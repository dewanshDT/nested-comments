import axios from "axios"

const api = axios.create({
  baseURL: import.meta.env.VITE_APP_SERVER_URL,
  withCredentials: true,
})

export function makeRequest(url: string, options?: {}) {
  console.log(import.meta.env.VITE_APP_SERVER_URL)
  return api(url, options)
    .then((res) => res.data)
    .catch((error) => Promise.reject(error?.response?.data?.message ?? "Error"))
}
