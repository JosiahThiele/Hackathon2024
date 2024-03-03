import React from 'react'
import '../../App.css'
import TicTacToe from '../TicTacToe'
import Footer from '../Footer'

export default function Games(){
  return (
    <>
      <header className="game-header">Games Page Header</header>

      <div>
        <TicTacToe/>
        <Footer />
      </div>
    </>
  )
}