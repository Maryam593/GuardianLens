import React, { useContext } from 'react';
import { Formik, Form } from 'formik';
import { Button, TextField } from '@mui/material';
import { userDataContext } from '../Context/UserContext';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { Link } from 'react-router-dom';

const LoginPage = () => {
  const { setUser } = useContext(userDataContext);
  const navigate = useNavigate();

  const handleAPI = async (values) => {
    try {
      const response = await axios.post("http://localhost:3000/lets-enter-into-guardian-galaxy", values);
      const { token, data } = response.data || {};
  
      if (!data || !data._id) {  
        console.error("User ID not found in response!");
        return;
      }
  
      localStorage.setItem('token', token);
      localStorage.setItem('userId', data._id);

      const userResponse = await axios.get(`http://localhost:3000/survivour-profile/${data._id}`);
console.log("User Response:", userResponse.data);
setUser(userResponse.data); 

  
      setTimeout(() => {
        navigate("/"); 
      }, 2000);
    } catch (error) {
      console.error("Login Error:", error);
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen">
        <div className="w-3/4 max-w-4xl h-[600px] flex border border-[#108dc7] rounded-lg overflow-hidden">
        
        {/* Left Section - Sign In */}
        <div className="w-1/2 p-8 bg-white flex flex-col justify-center">
          <h2 className="text-3xl font-bold text-center mb-4">Sign in</h2>
          
          {/* Social Icons */}
          <div className="flex justify-center space-x-4 mb-4">
            <span className="cursor-pointer p-2 bg-gray-100 rounded-full">🔵</span>
            <span className="cursor-pointer p-2 bg-gray-100 rounded-full">🟠</span>
            <span className="cursor-pointer p-2 bg-gray-100 rounded-full">🔷</span>
          </div>

          <p className="text-center text-gray-500 mb-6">or use your account</p>

          {/* Formik Form */}
          <Formik
            initialValues={{ email: '', password: '' }}
            onSubmit={async (values) => {
              console.log("Form Data:", values);
              await handleAPI(values);
            }}
          >
            {({ values, handleChange }) => (
              <Form className="flex flex-col space-y-4">
                <TextField 
                  type="email"
                  name="email"
                  label="Email Address" 
                  value={values.email}
                  onChange={handleChange}
                  fullWidth
                  margin="normal"
                  required
                />
                <TextField 
                  type="password"
                  name="password"
                  label="Password"
                  value={values.password}
                  onChange={handleChange}
                  fullWidth
                  margin="normal"
                  required
                />
                {/* sx={{background : " bg-gradient-to-r from-[#108dc7] to-[#ef8e38]", padding : "10px", marginTop : "5px"}} */}
                <div className='flex justify-center items-center'>
                <Button type="submit" variant="contained" 
                sx={{padding:"15px", marginTop:"10px"}}
                 className="bg-gradient-to-r from-[#108dc7] to-[#ef8e38] text-white"  fullWidth>
                  SIGN IN
                </Button>
                </div>
              </Form>
            )}
          </Formik>
        </div>

        {/* Right Section - Signup */}
        <div className="w-1/2  bg-gradient-to-r from-[#108dc7] to-[#ef8e38] text-white flex flex-col items-center justify-center p-8">
          <h2 className="text-3xl font-bold mb-4">Hello, Friend!</h2>
          <p className="text-center mb-6">Enter your personal details and start your journey with us</p>
          <div className='bg-white text-black p-2 rounded-[50px] w-[130px]'>
            <Link to = "/auth/sign-up">SIGN UP</Link>
          </div>
        </div>

      </div>
    </div>
  );
};

export default LoginPage;
