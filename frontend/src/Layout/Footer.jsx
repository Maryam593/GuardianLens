import React from 'react'
import { useState } from 'react'
const Footer = () => {
    const [show,setShow] = useState(false)
  return (
    <>
  <footer className="bottom-0 fixed right-0 w-full bg-gray-900 flex">
  <h1 className="text-white text-center">All Rights Reserved</h1>
</footer>

    </>
  )
}

export default Footer
