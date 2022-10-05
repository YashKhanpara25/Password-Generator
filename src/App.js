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
  const [iscopied,setCopy] = useState(false);

  const generatePassword = () => {
    let password = generator();
    generate(password);
    setCopy(false);
  }

  const copyPassword = () => {
    copy(password);
    setCopy(true);
  }
  
  let style = {
      padding : "4px",
      width:"80%",
      width : 'auto',
      paddingRight : '15px',
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
            sx={{display : 'flex' ,
                border : "2px solid grey" ,
                borderRadius : "7px",
                 }}
          > 
            <Typography component="h1" variant='h5' sx={style}>
              {password}
            </Typography>
            <Box backgroundColor = {iscopied?"#4BB543":'none'}
            onClick={copyPassword} color="success" sx={{display:'flex',justifyContent:'center',alignItems:'center', borderLeft : "2px solid grey", paddingRight:'10px' }}>
              <ContentCopyIcon  sx={{padding:'3px', }}/>
              <Typography variant="h6">{iscopied?'copied':'copy'}</Typography>
            </Box>
            
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
