import { Link } from "react-router-dom"

export const BlogLink = ({ url, title }) => {
  return (
    <div>
      <li>
        <Link to={`/blog/${url}`}>{title}</Link>
      </li>
    </div>
  )
}