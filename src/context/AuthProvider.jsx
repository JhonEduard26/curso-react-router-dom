import { useState } from 'react'
import { AuthContext } from './AuthContext'

export const AuthProvider = ({ children }) => {
  const [token, setToken] = useState(null)
  const [username, setUsername] = useState(null)
  const [password, setPassword] = useState(null)


  const login = (username, password) => {
    setUsername(username)
    setPassword(password)
    setToken('1ds23fs234')
  }

  const logout = () => {
    setUsername(null)
    setPassword(null)
    setToken(null)
  }

  const auth = {
    username,
    password,
    token,
    login,
    logout,
  }

  return (
    <AuthContext.Provider value={auth}>
      {children}
    </AuthContext.Provider>
  )
}