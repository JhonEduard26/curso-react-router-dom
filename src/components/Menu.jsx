import { Link } from 'react-router-dom'

export const Menu = () => {
  return (
    <nav>
      <ul>
        <li>
          <Link to={'/home'}>Home</Link>
        </li>
        <li>
          <Link to={'/about'}>About</Link>
        </li>
        <li>
          <Link to={'/blog'}>Blog</Link>
        </li>
        <li>
          <Link></Link>
        </li>
      </ul>
    </nav>
  )
}