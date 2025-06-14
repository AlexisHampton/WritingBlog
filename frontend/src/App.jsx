import React from 'react'
import LoginPage from './Pages/LoginPage'
import { Routes, Route } from 'react-router'
import HomePage from './Pages/HomePage'
import SignUpPage from './Pages/SignUpPage'
import Dashboard from './Pages/Dashboard'
import StoryPage from './Pages/StoryPage'
import ProfilePage from './Pages/ProfilePage'
import ReadingPage from './Pages/ReadingPage'
import StoryInfo from './Pages/StoryInfo'

export const api = "http://localhost:5001/api/";

const App = () => {
  return (
    <div>
      <title> Writeblr</title>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/signup" element={<SignUpPage />} />
        <Route path="/dashboard/:id" element={<Dashboard />} />
        <Route path="/storyPage/:id" element={<StoryPage />} />
        <Route path="/profile/:id" element={<ProfilePage />} />
        <Route path='/readingPage/:id' element={<ReadingPage />} />
        <Route path='/storyinfo/:id' element={<StoryInfo />} />
      </Routes>
    </div>
  )
}

export default App