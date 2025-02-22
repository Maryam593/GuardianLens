import React, { useContext } from "react";
import { Formik, Form } from "formik";
import { Button, TextField } from "@mui/material";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { userDataContext } from "../Context/UserContext";
import { Link } from "react-router-dom";

const SignUpPage = () => {
  const { setUser } = useContext(userDataContext);
  const navigate = useNavigate();

  const handleAPI = async (values) => {
    const userData = {
      FullName: {
        firstName: values.FullName.firstName,
        lastName: values.FullName.lastName,
      },
      email: values.email,
      password: values.password,
    };

    try {
      const response = await axios.post(
        "http://localhost:3000/register-yourself-as-survivour",
        userData
      );

      if (response.status === 200) {
        const data = response.data;
        console.log("API Response:", data);
        if (data) {
          setUser(data);
          localStorage.setItem("user", JSON.stringify(data));
          localStorage.setItem("token", data.token);
          navigate("/");
        } else {
          console.log("User data is missing in API response!");
        }
      }
    } catch (error) {
      console.log("Signup API Error:", error);
    }
  };

  return (
    <div className="flex items-center justify-center w-full min-h-screen">
      <div className="w-3/4 max-w-4xl h-[600px] flex border border-[#108dc7] rounded-lg overflow-hidden">
        {/* Right Section - Sign In */}
        <div className="w-1/2 bg-gradient-to-r from-[#108dc7] to-[#ef8e38] text-white flex flex-col items-center justify-center p-8">
          <h2 className="text-3xl font-bold mb-4">Welcome Back!</h2>
          <p className="text-center mb-6">
            Already have an account? Sign in now!
          </p>
          <div className="bg-white text-black p-2 rounded-[50px] w-[130px]">
            <Link to="/auth/login">SIGN IN</Link>
          </div>
        </div>

        {/* Left Section - Signup Form */}
        <div className="w-1/2 p-8 bg-white flex flex-col justify-center">
          <h2 className="text-3xl font-bold text-center mb-4">Sign Up</h2>

          {/* Social Icons */}
          <div className="flex justify-center space-x-4 mb-4">
            <span className="cursor-pointer p-2 bg-gray-100 rounded-full">
              🔵
            </span>
            <span className="cursor-pointer p-2 bg-gray-100 rounded-full">
              🟠
            </span>
            <span className="cursor-pointer p-2 bg-gray-100 rounded-full">
              🔷
            </span>
          </div>

          <Formik
            initialValues={{
              email: "",
              password: "",
              FullName: {
                firstName: "",
                lastName: "",
              },
            }}
            onSubmit={async (values) => {
              await handleAPI(values);
            }}
          >
            {({ values, handleChange }) => (
              <Form className="flex flex-col space-y-4">
                <TextField
                  type="text"
                  label="First Name"
                  value={values.FullName.firstName}
                  name="FullName.firstName"
                  onChange={handleChange}
                  fullWidth
                  margin="normal"
                />
                <TextField
                  type="text"
                  label="Last Name"
                  value={values.FullName.lastName}
                  name="FullName.lastName"
                  onChange={handleChange}
                  fullWidth
                  margin="normal"
                />
                <TextField
                  type="email"
                  label="Email"
                  value={values.email}
                  name="email"
                  onChange={handleChange}
                  fullWidth
                  margin="normal"
                />
                <TextField
                  type="password"
                  label="Password"
                  name="password"
                  value={values.password}
                  onChange={handleChange}
                  fullWidth
                  margin="normal"
                />

                <Button
                  type="submit"
                  variant="contained"
                  sx={{ padding: "15px", marginTop: "10px" }}
                  className="bg-gradient-to-r from-[#108dc7] to-[#ef8e38] text-white"
                  fullWidth
                >
                  Register
                </Button>
              </Form>
            )}
          </Formik>
        </div>
      </div>
    </div>
  );
};

export default SignUpPage;
