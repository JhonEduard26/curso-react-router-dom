import { useParams } from "react-router-dom"
import { blogposts } from "./BlogPage"


export const BlogPost = () => {

  const { url } = useParams()

  const post = blogposts.find(post => post.url === url)

  return (
    <div>
      <h3>{post?.title}</h3>
      <p>{post?.url}</p>
    </div>
  )
}