import React from 'react'
import LoginPage from './Pages/LoginPage'
import { Routes, Route } from 'react-router'
import HomePage from './Pages/HomePage'
import SignUpPage from './Pages/SignUpPage'
import Dashboard from './Pages/Dashboard'
import StoryPage from './Pages/StoryPage'

const App = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/signup" element={<SignUpPage />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/storyPage" element={<StoryPage />} />
      </Routes>


    </div>
  )
}

export default App