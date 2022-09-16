import { useState } from 'react'
import { AuthContext } from './AuthContext'

export const AuthProvider = ({ children }) => {
  const [username, setUsername] = useState(null)
  const [password, setPassword] = useState(null)


  const login = (username, password) => {
    setUsername(username)
    setPassword(password)
  }

  const logout = () => {
    setUsername(null)
    setPassword(null)
  }

  const auth = {
    username,
    password,
    login,
    logout,
  }

  return (
    <AuthContext.Provider value={auth}>
      {children}
    </AuthContext.Provider>
  )
}