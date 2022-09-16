import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom'
import { AboutPage, HomePage, BlogPage, Menu, BlogPost, LoginPage, ProfilePage } from './components'
import { LogoutPage } from './components/LogoutPage'

export const App = () => {
  return (
    <BrowserRouter>
      <Menu />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="blog" element={<BlogPage />}>
          <Route path=':url' element={<BlogPost />} />
        </Route>
        <Route path='login' element={<LoginPage />} />
        <Route path='logout' element={<LogoutPage />} />
        <Route path='profile' element={<ProfilePage />} />
        <Route path="about" element={<AboutPage />} />
        <Route path="*" element={<Navigate to='/' />} />
      </Routes>
    </BrowserRouter>
  )
}