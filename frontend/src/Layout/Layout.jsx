import React from 'react'
import Header from '../Components/Header'
import Footer from '../Components/Footer'

const Layout = ({children}) => {
  return (
    <div>
      <Header/>
      {children}
      <Footer/>
    </div>
  )
}

export default Layout
