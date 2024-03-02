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
              src='images/img-7.jpg'
              text='Reach the End'
              label='Reading'
              path='/games'
            />
            <CardItem
              src='images/img-4.jpg'
              text='Escape the Island'
              label='Math'
              path='/games'
            />
          </ul>
          <h1>or these other GREAT websites!</h1>

          <ul className='cards__items'>
            <CardItem
              src='images/img-1.jpg'
              text='Math Websites'
              label='Math'
              path='/websites'
            />
            <CardItem
              src='images/img-3.jpg'
              text='Reading Websites'
              label='Reading'
              path='/websites'
            />
          </ul>
          <ul>
          <CardItem
              src='images/img-6.jpg'
              text='Wow these are many words to keep all these cards big, i wonder why it does this? This will be the information btw'
              label='!!!'
              path='/information'
            />
          </ul>
          <ul>
          <CardItem
              src='images/img-home.jpg'
              text='Dev website'
              label='🪦'
              path='/dev'
            />
          </ul>
        </div>
      </div>
    </div>
  )
}

export default Cards
