import React, { useState } from 'react'
import { Square } from './Square.js'
import './Board.css'

export const Board = () => {
    const [GameBoard,setGameBoard] = useState(Array(9).fill(null))
    const [Turn,setTurn] = useState(true);
    const [Winner,setWinner] =useState(null);

    function there_is_winner(arr){
        
        if(arr[0]===arr[1] && arr[1]===arr[2] && (arr[0]!=null && arr[1]!=null && arr[2]!=null)){
            return true;
        }
        else if(arr[0]===arr[4] && arr[4]===arr[8] && (arr[0]!=null && arr[1]!=null && arr[8]!=null)){
            return true;
        }
        else if(arr[3]===arr[4] && arr[4]===arr[5] && (arr[3]!=null && arr[4]!=null && arr[5]!=null)){
            return true;
        }
        else if(arr[6]===arr[7] && arr[7]===arr[8] && (arr[6]!=null && arr[7]!=null && arr[8]!=null)){
            return true;
        }
        else if(arr[0]===arr[3] && arr[3]===arr[6] && (arr[0]!=null && arr[3]!=null && arr[6]!=null)){
            return true;
        }
        else if(arr[1]===arr[4] && arr[4]===arr[7] && (arr[1]!=null && arr[4]!=null && arr[7]!=null)){
            return true;
        }
        else if(arr[2]===arr[5] && arr[5]===arr[8] && (arr[2]!=null && arr[5]!=null && arr[8]!=null)){
            return true;
        }
        else if(arr[2]===arr[4] && arr[4]===arr[6] && (arr[2]!=null && arr[4]!=null && arr[6]!=null)){
            return true;
        }
        else {
            return false;
        }
    }
    function handleClick(i) {
        if(GameBoard[i] || Winner){
            return ;
        }
        let nboard=GameBoard.slice();
       if(Turn){
       nboard[i]= 'X';
      } else
    {
       nboard[i]= 'O'
    }
       setGameBoard(nboard)
       setTurn(!Turn)

        if(there_is_winner(nboard)){
           if(Turn){
            setWinner('X');
           }
           else{
            setWinner('O');
           }
        //    return ;
        }

    }

  return (
   
    <div className='container'>
        <h2>winner is {Winner}</h2>
     <div className='board'>
        <Square value = {GameBoard[0]} onSquareClick = {() => handleClick(0)} index={0}/>
        <Square value = {GameBoard[1]} onSquareClick = {() => handleClick(1)} index={1}/>
        <Square value = {GameBoard[2]} onSquareClick = {() => handleClick(2)} index={2}/>
    
        <Square value = {GameBoard[3]} onSquareClick = {() => handleClick(3)} index={3}/>
        <Square value = {GameBoard[4]} onSquareClick = {() => handleClick(4)} index={4}/>
        <Square value = {GameBoard[5]} onSquareClick = {() => handleClick(5)} index={5}/>
    
        <Square value ={ GameBoard[6]} onSquareClick = {() => handleClick(6)} index={6}/>
        <Square value = {GameBoard[7]} onSquareClick = {() => handleClick(7)} index={7}/>
        <Square value = {GameBoard[8]} onSquareClick = {() => handleClick(8)} index={8}/>
     </div>
     </div>
  )
}
