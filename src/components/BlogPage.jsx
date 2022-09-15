import { Outlet } from 'react-router-dom'
import { BlogLink } from './BlogLink'

export const blogposts = [
  {
    id: 1,
    title: 'que es react',
    url: 'react'
  },
  {
    id: 2,
    title: 'que es react-router',
    url: 'react-router'
  },
]

export const BlogPage = () => {
  return (
    <div>

      <h2>BlogPage</h2>
      <Outlet />
      <ul>
        {blogposts.map(post => (
          <BlogLink key={post.id} url={post.url} title={post.title} />
        ))}
      </ul>

    </div>
  )
}