import React from 'react'
import CardItem from './CardItem'
import './Cards.css'

function Cards() {
  return (
    <div className='cards'>
      <h1>Check out these INCREDIBLE games!</h1>
      <div className="cards__container">
        <div className="cards__wrapper">
          <ul className="cards__items">
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
          <h3>Good Websites</h3>
          <ul className="cards__items">
            <CardItem  
            src='images/img-1.jpg'
            text='Math Websites'
            label='Math'
            path='/information'
            />
            <CardItem 
            src='images/img-3.jpg'
            text='Reading Websites'
            label='Reading'
            path='/information'
            />
          </ul>
          <h3>Why we do this</h3>
          <CardItem 
            src='images/img-6.jpg'
            text='The Importance of Education'
            label='!!!'
            path='/information'
            />
        </div>
      </div>
    </div>
  )
}

export default Cards
