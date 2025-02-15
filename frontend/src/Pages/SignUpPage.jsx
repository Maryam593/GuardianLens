import React, { useContext } from 'react';
import { Formik, Form } from 'formik';
import { Button, TextField } from '@mui/material';
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { userDataContext } from '../Context/UserContext';

const SignUpPage = () => {
  const {user,setUser} = useContext(userDataContext);
  const navigate = useNavigate();

  const handleAPI = async (values) => {
    const userData = {
      FullName: {
        firstName: values.FullName.firstName, 
        lastName: values.FullName.lastName
      },
      email: values.email, 
      password: values.password
    };
  
    try {
      const response = await axios.post("http://localhost:3000/register-yourself-as-survivour", userData);
  
      if (response.status === 200) {
        const data = response.data; 
        console.log("API Response:", data);
        if (data) {  
          setUser(data);  
          localStorage.setItem("user", JSON.stringify(data));
        } else {
          console.log("User data is missing in API response!");
        }
  
        localStorage.setItem('token', data.token);
        navigate("/");
      }
    } catch (error) {
      console.log("Signup API Error:", error);
    }
  };
  
  

  return (
    <Formik 
      initialValues={{
        email: '', 
        password: '', 
        FullName: {
          firstName: '', 
          lastName: ''
        }
      }} 
      onSubmit={async (values) => {
        await handleAPI(values);
      }}
    >
      {({ values, handleChange }) => (
        <Form className='flex flex-col gap-3'>
          <TextField 
            type="text" 
            placeholder="John" 
            value={values.FullName.firstName} 
            name="FullName.firstName" 
            onChange={handleChange}
          />
          <TextField 
            type="text" 
            placeholder="Doe" 
            value={values.FullName.lastName} 
            name="FullName.lastName" 
            onChange={handleChange}
          />
          <TextField 
            type="email" 
            placeholder="abc@gmail.com" 
            value={values.email} 
            name="email" 
            onChange={handleChange}
          />
          <TextField 
            type="password" 
            placeholder="make your secret key" 
            name="password" 
            value={values.password} 
            onChange={handleChange}
          />
          <Button type="submit" color="success" variant="contained" sx={{ padding: "10px" }}>
            Submit
          </Button>
        </Form>
      )}
    </Formik>
  );
};

export default SignUpPage;
