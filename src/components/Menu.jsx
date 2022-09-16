import { Link } from 'react-router-dom'
import { useAuth } from '../hooks/useAuth'

export const Menu = () => {
  const { token } = useAuth()

  return (
    <nav>
      <ul>
        <li>
          <Link to='/home'>Home</Link>
        </li>
        <li>
          <Link to='/about'>About</Link>
        </li>
        <li>
          <Link to='/blog'>Blog</Link>
        </li>
        {
          !token &&
          <li>
            <Link to='/login'>Log in</Link>
          </li>
        }
        {
          token &&
          <li>
            <Link to='/logout'>Log out</Link>
          </li>
        }
        {
          token &&
          <li>
            <Link to='/profile'>Profile</Link>
          </li>
        }
      </ul>
    </nav>
  )
}