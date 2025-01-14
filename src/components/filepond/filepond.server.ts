import { type useS3Upload } from "next-s3-upload"

import { type FilePondProps } from "react-filepond"
import { uniq } from "lodash"

import { renameFile } from "@/components/filepond/utils"

export type UploadS3ProcessResp = Awaited<
  ReturnType<ReturnType<typeof useS3Upload>["uploadToS3"]>
>

export type ServerBuildContext = {
  nextS3Upload: ReturnType<typeof useS3Upload>
  metas: UploadS3ProcessResp[]
  setMetas: (metas: UploadS3ProcessResp[]) => void
}

export type ServerBuildFunction = (
  context: ServerBuildContext,
) => FilePondProps["server"]

//======================================================================
// Debug
//======================================================================

export const bypass: ServerBuildFunction = () => ({
  process: (_fieldName, _file, _metadata, load) => {
    setTimeout(() => {
      load(`${Date.now()}`)
    }, 1500)
  },
  load: (source, load, error, _progress, _abort, _headers) => {
    fetch(source)
      .then((res) => res.blob())
      .then(load)
      .catch(error)
  },
})

//======================================================================
// Production (uses: `next-s3-upload`)
//======================================================================

export const production: ServerBuildFunction = ({
  nextS3Upload: { uploadToS3 },
  metas,
  setMetas,
}) => ({
  process: (
    _fieldName,
    file,
    metadata,
    load,
    error,
    _progress,
    abort,
    _transfer,
    _options,
  ) => {
    if (!file.name.includes(".")) {
      if (file.type === "image/png") {
        const filename = `${file.name}.png`
        console.warn("process.uploadToS3.renaming", file, filename)
        renameFile(file as File, filename)
      }
    }
    const controller = new AbortController()

    console.warn("process.uploadToS3.request", file)

    uploadToS3(file as File, {
      // TODO: submit PR
      // This function is entered if the user has tapped the cancel button
      // See: https://github.com/ryanto/next-s3-upload/issues/146
      //
      // controller,
      endpoint: {
        request: {
          url: "/api/uploads/process",
          // headers: {
          //   "Authorization": `Basic ${AUTH_TOKEN_HERE}`,
          // },
        },
      },
    })
      // .then(load)
      .then((response) => {
        console.warn("process.uploadToS3.success", {
          file,
          metadata,
          response,
        })
        setMetas(uniq([...metas, response]))

        const serverId = response.key
        return serverId
      })
      .then(load)
      .catch(error)

    return {
      abort: () => {
        controller.abort()
        abort()
      },
    }
  },
  load: "/api/uploads/load/",
  // fetch: "/api/uploads/fetch",
  // restore: "/api/uploads/restore",
  // revert: "/api/uploads/revert",
})
