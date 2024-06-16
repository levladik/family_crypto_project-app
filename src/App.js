import './App.css';
import React, { useState } from'react';
import TwitterIcon from '@mui/icons-material/Twitter';
import TelegramIcon from '@mui/icons-material/Telegram';
import YouTubeIcon from '@mui/icons-material/YouTube';
import Container from '@mui/material/Container';
import Button from '@mui/material/Button';

function App() {

  const [showGif, setShowGif] = useState(false);

  const handleClick = () => {
    setShowGif(!showGif);
  };

  return (
    <div className="App">
      <Container maxWidth="sm">
        <div>
          Типа офер, с кратким изложением сути проекта
        </div>
        <div>
          <TwitterIcon/>
          <TelegramIcon/>
          <YouTubeIcon/>
        </div>
        <div>
          Инструкция покупки
        </div>
        <Button variant="contained" onClick={handleClick}>бабло</Button>
        {showGif && (
          <img src="https://media1.tenor.com/m/ng0mwYEEpNMAAAAd/hasbulla-money.gif" alt="Hasbulla Money GIF" />
        )}
      </Container>      
    </div>
  );
}

export default App;
