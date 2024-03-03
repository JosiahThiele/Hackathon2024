import React from 'react'
import CardItem from './CardItem'
import './Cards.css'

function Cards() {
  return (
    <div className='cards'>
      <h1>Check out these INCREDIBLE games!</h1>
      <div className="cards__container">
        <div className="cards__wrapper">
        <ul className='cards__items'>
            <CardItem
              src='images/tic-math-toe.jpg'
              text='Tic Math Toe'
              label='Math'
              path='/games'
            />
            <CardItem
              src='images/coming-soon.jpeg'
              text='More games coming soon'
              label='Reading'
              path='/games'
            />
          </ul>
          <h1>or these other GREAT websites!</h1>
          <ul className='cards__items'>
            <CardItem
              src='images/math-signs.png'
              text='Math Websites'
              label='Math'
              path='/websites'
            />
            <CardItem
              src='images/monkey-reading.png'
              text='Reading Websites'
              label='Reading'
              path='/websites'
            />
          </ul>
          <ul>
          <CardItem
              src='images/more-info.png'
              text='Wow these are many words to keep all these cards big, i wonder why it does this? This will be the information btw'
              label='Check out more Information Here!'
              path='/information'
              color='#fff'
            />
          </ul>
        </div>
      </div>
    </div>
  )
}

export default Cards