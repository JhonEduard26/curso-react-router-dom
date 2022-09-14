import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom'
import { AboutPage, HomePage, BlogPage } from './components'

export const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/blog" element={<BlogPage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="*" element={<Navigate to='/' />} />
      </Routes>
    </BrowserRouter>
  )
}