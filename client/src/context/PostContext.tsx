import React from "react"
import { useContext } from "react"
import { useParams } from "react-router-dom"
import useAsync from "../hooks/useAsync"
import { getPost, Post } from "../services/posts"

interface Context {
  id?: string
  title?: string
  body?: string
  comments?: {
    id: string
    message: string
    parentId: string
    createdAt: string
    user: {
      id: string
      name: string
    }
  }
}

const PostContext = React.createContext({} as Context)

export function usePost(): Context {
  return useContext(PostContext)
}

export const PostProvider = ({ children }: { children: React.ReactNode }) => {
  const { id } = useParams()
  let data
  data = useAsync(() => getPost(id as string), [id])
  console.log(data)
  return (
    <PostContext.Provider value={{ id, ...data?.value }}>
      {data?.loading ? (
        <h1>loading</h1>
      ) : data?.error ? (
        <h1>{data.error}</h1>
      ) : (
        children
      )}
    </PostContext.Provider>
  )
}
