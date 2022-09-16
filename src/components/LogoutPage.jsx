import { useNavigate } from 'react-router-dom'
import { useAuth } from '../hooks/useAuth'

export const LogoutPage = () => {
  const auth = useAuth()
  const navigate = useNavigate()

  const handleLogout = (event) => {
    event.preventDefault()
    auth.logout()
    navigate('/login')
  }

  return (
    <>
      <h1>Log out Page</h1>

      <form onSubmit={handleLogout}>
        <button type="submit">Log out</button>
      </form>
    </>
  )
}