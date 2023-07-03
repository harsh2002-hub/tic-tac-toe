import React, { useState } from 'react'
import './Board.css'
export const Square = ({value, onSquareClick,index}) => {
  return (
    <div>
        <button className='button' onClick={onSquareClick}>{value}</button>
    </div>
  )
}
