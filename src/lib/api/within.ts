import { type NextApiResponse } from "next"

import Status from "http-status-codes"

import { type BaseApiResponse } from "@/lib/api"

export async function within<T, K extends BaseApiResponse>(
  fn: () => Promise<T>,
  res: NextApiResponse<K | BaseApiResponse>,
  duration_ms: number,
) {
  const id = setTimeout(() => {
    const message = "There was an error with the upstream service!"
    return res.status(Status.REQUEST_TIMEOUT).json({
      message,
    })
  }, duration_ms)

  try {
    const result = await fn()
    clearTimeout(id)
    return result
  } catch (error) {
    let message = "Unknown Error"
    if (error instanceof Error) message = error.message
    res.status(Status.INTERNAL_SERVER_ERROR).json({ message })
  }
}
