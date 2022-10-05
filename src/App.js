import * as React from 'react';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import './App.css';
import { useState } from 'react';
import {generator} from './generator';


function App() {

  const [password, generate] = useState("Click Generate!!");
  const generatePassword = () => {
    let password = generator();
    generate(password);
  }
  

  return (
    <div className="App">
      <Container component="main" maxWidth="xs">
        <Box
          sx={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >
          
          <Typography component="h1" variant="h5">
            Password Generator
          </Typography>
          <Typography component="h1" variant='h5' sx={{border : "2px solid grey", borderRadius : "5%", padding : "4px" ,width:"80%"}}>
            {password}
          </Typography>
          <Box noValidate sx={{ mt: 1 }}>
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
              onClick={generatePassword}
            >
              Generate
            </Button>
          </Box>
        </Box>
      </Container>
    </div>
  );
}

export default App;
