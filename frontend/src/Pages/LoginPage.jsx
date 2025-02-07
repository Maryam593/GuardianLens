import React from 'react';
import {  Formik, Form } from 'formik';
import { Button,TextField } from '@mui/material';

const LoginPage = () => {
  return (
    <Formik
      initialValues={{ email: '', password: '' }}
      onSubmit={(values) => {
        console.log("Form Data:", values);
      }}
    >
      {({ values, handleChange }) => ( 
        <Form>
          <TextField 
            type="email"
            name="email"
            placeholder="Enter your email address"
            value={values.email} 
            onChange={handleChange} 
            fullWidth
            margin="normal"
          />
          <TextField 
            type="password"
            name="password"
            placeholder="Enter your secret key"
            value={values.password} 
            onChange={handleChange} 
            fullWidth
            margin="normal"
          />
          <Button type='submit' variant="contained" color="primary">Submit</Button>
        </Form>
      )}
    </Formik>
  );
};

export default LoginPage;
