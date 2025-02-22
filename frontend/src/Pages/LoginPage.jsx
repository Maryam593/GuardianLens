import React, { useContext } from 'react';
import { Formik, Form } from 'formik';
import { Button, TextField } from '@mui/material';
import { userDataContext } from '../Context/UserContext';
import { useNavigate } from 'react-router-dom';
import axios from 'axios'; 

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
      
      setUser(data);
  
      setTimeout(() => {
        navigate("/"); 
      }, 2000);
    } catch (error) {
      console.error("Login Error:", error);
    }
  };
  
  

  return (
    <Formik
      initialValues={{ email: '', password: '' }}
      onSubmit={async (values) => {
        console.log("Form Data:", values);
        await handleAPI(values); 
      }}
    >
      {({ values, handleChange }) => (
        <Form>
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
          <Button type="submit" variant="contained" color="primary" fullWidth>
            Submit
          </Button>
        </Form>
      )}
    </Formik>
  );
};

export default LoginPage;
