import { useState } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Coding from './components/Coding'
import Login from './Login'
import Signup from './Signup'
import { AuthProvider } from './AuthContext'
import Dashboard from './Dashboard'
import QuestionsList from './components/QuestionsList'
import { Toaster } from 'react-hot-toast'
import ColabHome from './components/Collab/ColabHome'
import EditorPage from './components/Collab/EditorPage'
import LandingPage from './LandingPage'
import IDEHome from './components/onlineide/IDEHome'
function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <AuthProvider>
        <div><Toaster /></div>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<LandingPage />} />
            <Route path='/login' element={<Login />} />
            <Route path='/signup' element={<Signup />} />
            <Route path='/dashboard' element={<Dashboard />} />
            <Route path='/questionslist' element={<QuestionsList />} />
            <Route path='/codingplatform/:id' element={<Coding />} />
            <Route path='/colabtogether' element={<ColabHome />} />
            <Route path="/editor/:roomId" element={<EditorPage />} />
            <Route path='/onlineide' element={<IDEHome />} />
          </Routes>
        </BrowserRouter>
      </AuthProvider>
    </>
  )
}

export default App
