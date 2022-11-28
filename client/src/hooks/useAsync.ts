import { useCallback, useEffect, useState } from "react"

export default function useAsync<T>(
  fun: () => Promise<T>,
  dependencies: Array<any> = []
) {
  const { exec, ...state } = useAsyncInternal(fun, dependencies, true)

  useEffect(() => {
    exec()
  }, [exec])

  return state
}

export function useAsyncFn<T>(
  fun: () => Promise<T>,
  dependencies: Array<any> = []
) {
  return useAsyncInternal(fun, dependencies, false)
}

function useAsyncInternal<T>(
  fun: () => Promise<T>,
  dependencies: Array<any>,
  initialLoading = false
) {
  const [loading, setLoading] = useState(initialLoading)
  const [error, setError] = useState<string>()
  const [value, setValue] = useState<T>()

  const exec = useCallback((...params: []) => {
    setLoading(true)
    return fun(...params)
      .then((data) => {
        setValue(data)
        setError(undefined)
        return data
      })
      .catch((error) => {
        setError(error)
        setValue(undefined)
        return Promise.reject(error)
      })
      .finally(() => {
        setLoading(false)
      })
  }, dependencies)

  return { loading, error, value, exec }
}
