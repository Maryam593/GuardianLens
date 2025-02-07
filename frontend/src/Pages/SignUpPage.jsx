import React from 'react'
import { Formik,Form} from 'formik'
import {Button,TextField} from '@mui/material'
const SignUpPage = () => {
  return (
    <>
    <Formik 
  initialValues={{
    email: '', 
    password: '', 
    FullName: {
      firstName: '', 
      lastName: ''
    }
  }} 
  onSubmit={(values) => {
    console.log("Form Data:", values);
  }}
>
   {
    ({values,handleChange}) => (
        <>
        <Form>
            <TextField type = "text" placeholder='John' value={values.firstName} name = "firstName" onChange={handleChange}/>
            <TextField type = "text" placeholder='Doe' value={values.lastName} name = "lastName" onChange={handleChange}/>
            <TextField type = "email" placeholder='abc@gmail.com' value={values.email} name = "email" onChange={handleChange}/>
            <TextField type = "password" placeholder='make your secret key' name = "password" value={values.password} onChange={handleChange}/>
            <Button type="submit" color = "success" variant='contained'>Submit</Button>
        </Form>
        </>
    )
   }
    </Formik>
    </>
  )
}

export default SignUpPage
