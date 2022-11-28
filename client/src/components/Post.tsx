import React from "react"
import { usePost } from "../context/PostContext"

const Post = () => {
  const { title, body } = usePost()
  return (
    <div className="post">
      <h1>{title}</h1>
      <article>{body}</article>
    </div>
  )
}

export default Post
