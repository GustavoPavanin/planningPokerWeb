import React, { useEffect, useState } from 'react';
import { TextField, Button, Container, Typography } from '@mui/material';
import { io } from 'socket.io-client';

const URL = 'http://localhost:8080/poker';
const Login = () => {
  const [isConnected, setIsConnected] = useState(false);
  const [username, setUsername] = useState('');



  const handleLogin = () => {
    const socket = io(URL);
    socket.emit('join', { username });
  };

  return (
    <Container maxWidth="xs">
      <Typography variant="h4" align="center" component="h1" gutterBottom>
        Login
      </Typography>
      <TextField
        label="Username"
        fullWidth
        value={username}
        onChange={(e) => setUsername(e.target.value)}
        margin="normal"
      />
      <Button variant="contained" color="primary" fullWidth onClick={handleLogin}>
        Login
      </Button>
    </Container>
  );
};

export default Login;