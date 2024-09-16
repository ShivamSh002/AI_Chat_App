import React, { useState } from 'react';
import TextField from '@mui/material/TextField';
import './Chat.css';
import SearchIcon from '@mui/icons-material/Search';

const Chat = () => {
  const [chatInput, setChatInput] = useState(''); 

  const handleInputChange = (e) => {
    setChatInput(e.target.value);
  };

  const handleSearch = () => {
    if (chatInput.trim()) {
      console.log("User's chat:", chatInput);
      setChatInput(''); 
    }
  };

  return (
    <div>    
      <div className='chat-container'>
        <TextField 
          id="outlined-basic" 
          label="Ask Anything..." 
          variant="outlined" 
          className="chat-input"
          value={chatInput} 
          onChange={handleInputChange} 
          sx={{
            '& .MuiOutlinedInput-root': {
              '& fieldset': {
                borderColor: 'white', 
              },
              '&:hover fieldset': {
                borderColor: 'white', 
              },
              '&.Mui-focused fieldset': {
                borderColor: 'white', 
              },
              color: 'white',
            },
            '& .MuiInputLabel-root': {
              color: 'white', 
            },
            '& .MuiOutlinedInput-input': {
              color: 'white', 
            },
            '& .MuiInputLabel-root.Mui-focused': {
              color: 'white', 
            }
          }}
        />
        <SearchIcon 
          sx={{
            color: "white", 
            fontSize: "50px", 
            marginLeft: "15px", 
            cursor: "pointer"
          }}
          onClick={handleSearch} 
        />
      </div>
    </div>
  );
}

export default Chat;
