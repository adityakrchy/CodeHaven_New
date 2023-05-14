import { useState } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Coding from './components/Coding'
import Login from './Login'
import Signup from './Signup'
import { AuthProvider } from './AuthContext'
import Dashboard from './Dashboard'
import QuestionsList from './components/QuestionsList'
function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <AuthProvider>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Coding />} />
            <Route path='/login' element={<Login />} />
            <Route path='/signup' element={<Signup />} />
            <Route path='/dashboard' element={<Dashboard />} />
            <Route path='/questionslist' element={<QuestionsList />} />
            <Route path='/codingplatform' element={<Coding />} />
          </Routes>
        </BrowserRouter>
      </AuthProvider>
    </>
  )
}

export default App
