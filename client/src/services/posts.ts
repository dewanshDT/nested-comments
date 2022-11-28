import { makeRequest } from "./makeRequest"

export interface Post {
  id: string
  title: string
}

export function getPosts(): Promise<Post[]> {
  return makeRequest("/posts")
}

export function getPost(id: string): Promise<{
  id: string | undefined
  title: string | undefined
  body: string
  comments: {
    id: string
    message: string
    parentId: string
    createdAt: string
    user: {
      id: string
      name: string
    }
  }
}> {
  return makeRequest(`/posts/${id}`)
}
