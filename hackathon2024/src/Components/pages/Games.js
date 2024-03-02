import React from 'react'
import '../../App.css'
import TicTacToe from '../TicTacToe'

export default function Games(){
  return (
    <>
      <header className="game-header">Games Page Header</header>

      <div>
        <TicTacToe/>
      </div>
    </>
  )
}