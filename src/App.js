import * as React from 'react';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import './App.css';
import { useState } from 'react';
import {generator} from './generator';
import ContentCopyIcon from '@mui/icons-material/ContentCopy';
import copy from "copy-to-clipboard"; 

function App() {

  const [password, generate] = useState("Click Generate!!");
  const generatePassword = () => {
    let password = generator();
    generate(password);
  }

  const copyPassword = () => {
    copy(password);
    console.log('copied');
  }
  
  let style = {
      borderRadius : "5%",
      padding : "4px",
      width:"80%",
      width : 'auto',
      marginRight : '15px'
    }

  return (
    <div className="App">
        <Box
          sx={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent : 'space-between',
            height : '80%',
            paddingTop : '10%',
            paddingBottom : '10%'
          }}
        > 
          <Typography component="h1" variant="h5">
            Password Generator
          </Typography>
          <Box 
            sx={{display : 'flex'}}
          > 
            <Typography component="h1" variant='h5' sx={style}>
              {password}
            </Typography>
            <ContentCopyIcon fontSize="large" onClick={copyPassword}/>
          </Box>
          
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
    </div>
  );
}

export default App;
