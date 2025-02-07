import React from 'react';
import { Link } from 'react-router-dom';
import Lottie from 'lottie-react';
import MainScene from "../assets/animation/MainScene.json"; 

const ErrorPage = () => {
  return (
    <div className='bg-gray-800 flex flex-col w-full h-screen fixed top-0 left-0 justify-center items-center text-white text-center'>

      {/* ✅ Animation with relative positioning */}
      <div className="relative">
        <Lottie animationData={MainScene} loop={true} />
        
        {/* ✅ Text placed over animation using absolute + z-index */}
        <div className="absolute inset-0 flex flex-col top-70 justify-center items-center z-10">
          <p className="text-3xl font-bold">Leading you back to home page</p>
          {/* ✅ Button Below */}
      <Link to="/auth/login" className='mt-6 px-6 py-3 bg-white text-black font-semibold rounded-lg shadow-md hover:bg-gray-200 transition'>
        Click Here!
      </Link>
        </div>
      </div>

      

    </div>
  );
};

export default ErrorPage;
