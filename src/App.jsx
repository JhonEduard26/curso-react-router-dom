import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom'
import { AboutPage, HomePage, BlogPage, Menu, BlogPost } from './components'

export const App = () => {
  return (
    <BrowserRouter>
      <Menu />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/blog" element={<BlogPage />}>
          <Route path=':url' element={<BlogPost />} />
        </Route>
        <Route path="/about" element={<AboutPage />} />
        <Route path="*" element={<Navigate to='/' />} />
      </Routes>
    </BrowserRouter>
  )
}