import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { useAuth } from '../hooks/useAuth'

export const LoginPage = () => {
  const [name, setName] = useState('')
  const [password, setPassword] = useState('')
  const auth = useAuth()
  const navigate = useNavigate()


  const handleSubmit = (event) => {
    event.preventDefault()
    auth.login(name, password)
    navigate('/profile')
  }

  return (
    <>
      <h1>Login Page</h1>

      <form onSubmit={handleSubmit}>
        <label htmlFor="">
          <input
            type="text"
            placeholder="your username"
            name="username"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </label>
        <br />
        <label htmlFor="">
          <input
            type="password"
            placeholder="**********"
            name="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </label>
        <br />
        <button type="submit">Log in</button>
      </form>
    </>
  )
}