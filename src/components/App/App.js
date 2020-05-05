import React from 'react'
import bdayCard from '../../public/nikki-card.png'
import cardText from '../../public/card-text.png'
import './App.scss'
import Flippy, { FrontSide, BackSide } from 'react-flippy'

const App = () => {
  return (
    <div className="App">
      <Flippy
        flipOnHover={false} // default false
        flipOnClick={true} // default false
        flipDirection="horizontal" // horizontal or vertical
      >
        <FrontSide
          style={{
            boxShadow: 'none'
          }}
        >
          <img className="card-height" src={process.env.PUBLIC_URL + bdayCard} alt="Happy Birthday My Love!" />
        </FrontSide>
        <BackSide
          style={{
            boxShadow: 'none'
          }}>
          <img className="card-height" src={process.env.PUBLIC_URL + cardText} alt="Happy Birthday My Love - Text!" />
        </BackSide>
      </Flippy>
    </div>
  );
}

export default App;
