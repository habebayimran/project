// SignUp.js

import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { styled } from '@mui/system';
import {
  Typography,
  TextField,
  FormControlLabel,
  Checkbox,
  Button,
  Container,
  Paper,
} from '@mui/material';

const StyledContainer = styled(Container)({
  display: 'flex',
  flexDirection: 'column',
  alignContent: 'center',
  justifyContent: 'center',
  height: '100vh',
  backgroundSize: 'cover',
  margin: '0',
  padding: '0',
});

const StyledForm = styled('form')({
  width: '100%',
  marginTop: '16px',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
});

const StyledButton = styled(Button)({
  margin: '12px 0',
});

const StyledNameContainer = styled('div')({
  display: 'flex',
  gap: '8px',
});

const SignUpBox = styled(Paper)({
  padding: '24px',
  borderRadius: '16px',
  boxShadow: '0px 10px 20px rgba(0, 0, 0, 0.2)',
  textAlign: 'center',
  position: 'relative',
  overflow: 'hidden',
  transition: 'transform 0.3s ease-in-out',
  '&:hover': {
    transform: 'scale(1.05)',
  },
  maxWidth: '400px',
  margin: '0 auto',
  background: 'linear-gradient(to bottom, #2193b0, #6dd5ed)',
  color: '#fff',
});

const StyledLink = styled(Link)({
  fontWeight: 'bold',
});

const SignUpHeading = styled(Typography)({
  color: '#fff',
  fontWeight: 'bold',
});

const StyledTextField = styled(TextField)({
  '& label.Mui-focused': {
    color: '#fff',
  },
  '& .MuiInput-underline:after': {
    borderBottomColor: '#fff',
  },
  '& .MuiFilledInput-underline:after': {
    borderBottomColor: '#fff', 
  },
  '& .MuiOutlinedInput-root': {
    '& fieldset': {
      borderColor: 'rgba(0, 0, 0, 0.23)',
    },
    '&:hover fieldset': {
      borderColor: 'rgba(0, 0, 0, 0.23)',
    },
    '&.Mui-focused fieldset': {
      borderColor: '#fff',
    },
  },
});

const SignUp = () => {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmpassword, setConfirmPassword] = useState('');
  const [receiveNotifications, setReceiveNotifications] = useState(false);

  const handleSignUp = (event) => {
    event.preventDefault();
    console.log('Sign up data:', {
      firstName,
      lastName,
      email,
      password,
      confirmpassword,
      receiveNotifications,
    });
  };

  return (
    <StyledContainer className="signup-container">
      <SignUpBox className="signup-box">
        <SignUpHeading className="signup-header">Create an Account</SignUpHeading>
        <StyledForm className="signup-form">
          <StyledNameContainer>
            <StyledTextField
              variant="filled"
              margin="normal"
              required
              fullWidth
              label="First Name"
              name="firstName"
              value={firstName}
              onChange={(e) => setFirstName(e.target.value)}
            />
            <StyledTextField
              variant="filled"
              margin="normal"
              required
              fullWidth
              label="Last Name"
              name="lastName"
              value={lastName}
              onChange={(e) => setLastName(e.target.value)}
            />
          </StyledNameContainer>
          <StyledTextField
            variant="filled"
            margin="normal"
            required
            fullWidth
            label="Email Address"
            name="email"
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <StyledTextField
            variant="filled"
            margin="normal"
            required
            fullWidth
            label="Password"
            name="password"
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <StyledTextField
            variant="filled"
            margin="normal"
            required
            fullWidth
            label="Confirm Password"
            name="Confirm password"
            type="password"
            value={confirmpassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
          />
          <FormControlLabel
            control={
              <Checkbox
                value={receiveNotifications}
                onChange={() => setReceiveNotifications(!receiveNotifications)}
                color="primary"
              />
            }
            label="Receive Notifications"
          />
          <Link to="/home">
            <StyledButton variant="contained" type="submit">
              Sign Up
            </StyledButton>
          </Link>
        </StyledForm>
        <p className="login-link">
          Already have an account? <StyledLink to="/">Login</StyledLink>
        </p>
      </SignUpBox>
    </StyledContainer>
  );
};

export default SignUp;