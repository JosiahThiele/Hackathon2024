import React from 'react'
import {Link} from 'react-router-dom'

function CardItem(props) {
  let textColor = '#000';
 if(props.color == null){
    textColor = '#252e48';
 } else {
  textColor = props.color;
 }

  return (
    <>
      <li className='cards__item'>
        <Link className='cards__item__link' to={props.path}>
          <figure className='cards__item__pic-wrap' data-category={props.label}>
            <img src={props.src} alt='Travel Image'
            className='cards__item__img'/>
          </figure>
          <div className='cards__item__info'>
            <h5 className='cards__item__text' style={{ color: textColor }}>{props.text}</h5>
          </div>
        </Link>
      </li>
    </>
  )
}

export default CardItem
