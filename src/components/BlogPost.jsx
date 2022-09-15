import { useNavigate, useParams } from "react-router-dom"
import { blogposts } from "./BlogPage"


export const BlogPost = () => {

  const { url } = useParams()
  const navigate = useNavigate()

  const post = blogposts.find(post => post.url === url)

  return (
    <div>
      <h3>{post?.title}</h3>
      <p>{post?.url}</p>

      <button onClick={() => navigate('/blog')}>Volver al blog</button>
    </div>
  )
}