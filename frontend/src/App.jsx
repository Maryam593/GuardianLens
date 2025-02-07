
import './App.css'
import {Routes,Route} from "react-router-dom"
import LoginPage from './Pages/LoginPage'
import SignUpPage from './Pages/SignUpPage'
import HomePage from './Pages/HomePage'
import Layout from './Layout/Layout'
function App() {
 

  return (
    <>
    <Routes>
      <Route path='/' element={<Layout><HomePage/></Layout>} />
     <Route path='/auth/login' element = {<LoginPage/>} />
     <Route path='/auth/sign-up' element = {<SignUpPage/>} />
    </Routes>
    </>
  )
}

export default App
