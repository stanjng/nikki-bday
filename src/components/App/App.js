import React from 'react'
import bdayCard from '../../resources/nikki-card.png'
import cardText from '../../resources/card-text.png'
import './App.scss'
import Flippy, { FrontSide, BackSide } from 'react-flippy'

const App = () => {
  return (
    <div
      className="App"
    >
      <Flippy
        flipOnHover={false} // default false
        flipOnClick={true} // default false
        flipDirection="horizontal" // horizontal or vertical
        style={{
          display: 'flex',
          alignItems: 'center'
        }}
      >
        <FrontSide
          style={{
            boxShadow: 'none'
          }}
        >
          <img className="card-height" src={bdayCard} alt="Happy Birthday My Love!" />
        </FrontSide>
        <BackSide
          style={{
            boxShadow: 'none'
          }}>
          <img className="card-height" src={cardText} alt="Happy Birthday My Love - Text!" />
        </BackSide>
      </Flippy>
      <footer>
      Love you Nikki, Just click the card to flip it!
      </footer>
    </div>
  )
}

export default App
