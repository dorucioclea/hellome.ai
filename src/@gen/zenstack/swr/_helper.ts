/* eslint-disable */

import { createContext } from "react"

import superjson from "superjson"
import type { MutatorCallback, MutatorOptions, SWRResponse } from "swr"
import useSWR, { useSWRConfig } from "swr"

/**
 * Context type for configuring react hooks.
 */
export type RequestHandlerContext = {
  endpoint: string
}

/**
 * Context for configuring react hooks.
 */
export const RequestHandlerContext = createContext<RequestHandlerContext>({
  endpoint: "/api/model",
})

/**
 * Context provider.
 */
export const Provider = RequestHandlerContext.Provider

/**
 * Client request options
 */
export type RequestOptions<T> = {
  // disable data fetching
  disabled?: boolean
  initialData?: T
}

/**
 * Makes a GET request with SWR.
 *
 * @param url The request URL.
 * @param args The request args object, which will be superjson-stringified and appended as "?q=" parameter
 * @returns SWR response
 */
// eslint-disable-next-line @typescript-eslint/no-explicit-any
export function get<Result, Error = any>(
  url: string | null,
  args?: unknown,
  options?: RequestOptions<Result>,
): SWRResponse<Result, Error> {
  const reqUrl = options?.disabled ? null : url ? makeUrl(url, args) : null
  return useSWR<Result, Error>(reqUrl, fetcher, {
    fallbackData: options?.initialData,
  })
}

/**
 * Makes a POST request.
 *
 * @param url The request URL.
 * @param data The request data.
 * @param mutate Mutator for invalidating cache.
 */
export async function post<Result>(
  url: string,
  data: unknown,
  mutate: Mutator,
): Promise<Result> {
  const r: Result = await fetcher(url, {
    method: "POST",
    headers: {
      "content-type": "application/json",
    },
    body: marshal(data),
  })
  mutate()
  return r
}

/**
 * Makes a PUT request.
 *
 * @param url The request URL.
 * @param data The request data.
 * @param mutate Mutator for invalidating cache.
 */
export async function put<Result>(
  url: string,
  data: unknown,
  mutate: Mutator,
): Promise<Result> {
  const r: Result = await fetcher(url, {
    method: "PUT",
    headers: {
      "content-type": "application/json",
    },
    body: marshal(data),
  })
  mutate()
  return r
}

/**
 * Makes a DELETE request.
 *
 * @param url The request URL.
 * @param args The request args object, which will be superjson-stringified and appended as "?q=" parameter
 * @param mutate Mutator for invalidating cache.
 */
export async function del<Result>(
  url: string,
  args: unknown,
  mutate: Mutator,
): Promise<Result> {
  const reqUrl = makeUrl(url, args)
  const r: Result = await fetcher(reqUrl, {
    method: "DELETE",
  })
  const path = url.split("/")
  path.pop()
  mutate()
  return r
}

type Mutator = (
  data?: unknown | Promise<unknown> | MutatorCallback,
  opts?: boolean | MutatorOptions,
) => Promise<unknown[]>

export function getMutate(prefixes: string[]): Mutator {
  // https://swr.vercel.app/docs/advanced/cache#mutate-multiple-keys-from-regex
  const { cache, mutate } = useSWRConfig()
  return (
    data?: unknown | Promise<unknown> | MutatorCallback,
    opts?: boolean | MutatorOptions,
  ) => {
    if (!(cache instanceof Map)) {
      throw new Error("mutate requires the cache provider to be a Map instance")
    }

    const keys = Array.from(cache.keys()).filter(
      (k) =>
        typeof k === "string" &&
        prefixes.some((prefix) => k.startsWith(prefix)),
    ) as string[]
    const mutations = keys.map((key) => mutate(key, data, opts))
    return Promise.all(mutations)
  }
}

export async function fetcher<R>(url: string, options?: RequestInit) {
  const res = await fetch(url, options)
  if (!res.ok) {
    const error: Error & { info?: unknown; status?: number } = new Error(
      "An error occurred while fetching the data.",
    )
    error.info = unmarshal(await res.text())
    error.status = res.status
    throw error
  }

  const textResult = await res.text()
  try {
    return unmarshal(textResult) as R
  } catch (err) {
    console.error(`Unable to deserialize data:`, textResult)
    throw err
  }
}

function marshal(value: unknown) {
  return superjson.stringify(value)
}

function unmarshal(value: string) {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const j = JSON.parse(value) as any
  if (j?.json) {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    return superjson.parse<any>(value)
  } else {
    return j
  }
}

function makeUrl(url: string, args: unknown) {
  return args
    ? url + `?q=${encodeURIComponent(superjson.stringify(args))}`
    : url
}
