import useAsync from "../hooks/useAsync"
import { getPosts } from "../services/posts"

const PostList = () => {
  const { loading, error, value: posts } = useAsync(getPosts)
  return (
    <>
      {posts?.map((post) => (
        <h3 key={post.id}>
          <a href={`/posts/${post.id}`}>{post.title}</a>
        </h3>
      ))}
    </>
  )
}

export default PostList
