import { useAuth } from '../hooks/useAuth'

export const ProfilePage = () => {
  const auth = useAuth()
  return (
    <>
      <h1>Profile: </h1>
      <h2>{
        auth.username ? auth.username : 'No hay usuarios logueados'
      }</h2>
    </>
  )
}