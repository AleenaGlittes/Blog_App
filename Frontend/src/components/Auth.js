import React, { useState } from 'react';
import { Button, TextField, Typography, Box } from '@mui/material';
import axios from 'axios';
import { useDispatch } from 'react-redux';
import { authActions } from '../store';
import { useNavigate } from 'react-router-dom';

function Auth() {
    const navigate = useNavigate();
const dispatch = useDispatch();
const [isSignup,setSignup] =useState(false);
const [inputs,setInputs]= useState({
    name :"", email:"",password:""
})

const handleChange =(e)=>{
    setInputs((prevState)=>
({
    ...prevState,
    [e.target.name]:e.target.value,
}));
}


const sendRequest = async (type = "login") => {
    try {
        const res = await axios.post(`http://localhost:5000/api/user/${type}`, {
            name: inputs.name,
            email: inputs.email,
            password: inputs.password,
        });
        const data = res.data;
        console.log(data);
        return data;
    } catch (error) {
        if (error.response) {
            // The request was made and the server responded with a status code
            console.error("Server responded with status code:", error.response.status);
            console.error("Response data:", error.response.data);
        } else if (error.request) {
            // The request was made but no response was received
            console.error("No response received from the server");
        } else {
            // Something happened in setting up the request that triggered an error
            console.error("Error setting up the request:", error.message);
        }
        return null;
    }
}



const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Button clicked");

    // Perform form validation or other necessary checks

    if (isSignup) {
        sendRequest("signup").then((data)=>localStorage.setItem("userId",data.user._id))
            .then(() => {
                console.log("Signup successful");
                dispatch(authActions.login());
            }).then(()=>navigate("/blogs"))
            .catch((error) => {
                console.error("Error during signup:", error);
            });
    } else {
        sendRequest()
            .then(() => {
                console.log("Login successful");
                dispatch(authActions.login());
            }).then(()=>navigate("/blogs"))
            .catch((error) => {
                console.error("Error during login:", error);
            });
    }
};



  return (
    <div>
      <form onSubmit={handleSubmit}>
        <Box
          display="flex"
          flexDirection="column"
          alignItems="center"
          justifyContent="center"
          sx={{ height: '100vh' }} 
        >
          <Box
            width={300} 
            padding={3}
            boxShadow={3}
            borderRadius={2}
            bgcolor="background.paper"
          >
            <Typography variant="h4" gutterBottom align="center">
              {isSignup ? "Signup" : "Login"}
            </Typography>
            {isSignup &&
            <TextField
            onChange={handleChange}
              label="Username"
              name='name'
              value={inputs.name}
              placeholder='Name'
              variant="outlined"
              margin="normal"
              fullWidth
              required
            />}
            <TextField
              label="Email"
              name='email'
              onChange={handleChange}
              value={inputs.email}
              variant="outlined"
              type={"email"}
              margin="normal"
              fullWidth
              required
            />
            <TextField
              label="Password"
              name='password'
              onChange={handleChange}
              value={inputs.password}
              variant="outlined"
              type="password"
              margin="normal"
              fullWidth
              required
            />

            <Button type='submit' variant="contained" color="primary" fullWidth>
              Submit
            </Button>
            <Button onClick={()=>setSignup(!isSignup)} variant="text" color="primary" fullWidth>
              Move to {isSignup ? "Login" :"Signup"}
            </Button>
          </Box>
        </Box>
      </form>
    </div>
  );
}

export default Auth;
