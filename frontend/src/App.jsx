
import './App.css'
import {Routes,Route} from "react-router-dom"
import LoginPage from './Pages/LoginPage'
import SignUpPage from './Pages/SignUpPage'
import HomePage from './Pages/HomePage'
import Layout from './Layout/Layout'
import ErrorPage from './Pages/ErrorPage'
import ProtectionPanel from './Pages/ProtectionPanel'
function App() {
 

  return (
    <>
    <Routes>
      {/* Error Page */}
      <Route path='*' element={<ErrorPage/>} />
      <Route path='/' element={<Layout><HomePage/></Layout>} />
     <Route path='/auth/login' element = {<LoginPage/>} />
     <Route path='/auth/sign-up' element = {<SignUpPage/>} />
     <Route path = '/protection/panel' element = {<Layout><ProtectionPanel/></Layout>}/>
    </Routes>
    </>
  )
}

export default App
