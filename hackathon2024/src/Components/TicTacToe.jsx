import React, {useState, useRef} from 'react'

import './TicTacToe.css'
import circle_icon from '../Components/Assets/circle.png'
import cross_icon from '../Components/Assets/cross.png'
import MathQuestion from '../Components/MathQuestion'

let data = ["", "", "", "", "", "", "", "", ""];

const TicTacToe = () => {
    let [count, setCount] = useState(0);
    let [lock, setLock] = useState(false);
    let titleRef = useRef(null);
    let box1 = useRef(null);
    let box2 = useRef(null);
    let box3 = useRef(null);
    let box4 = useRef(null);
    let box5 = useRef(null);
    let box6 = useRef(null);
    let box7 = useRef(null);
    let box8 = useRef(null);
    let box9 = useRef(null);

    let box_array = [box1, box2, box3, box4, box5, box6, box7, box8, box9];

    const [showMathQuestion, setShowMathQuestion] = useState(false);
  const [mathQuestion, setMathQuestion] = useState({
    question: '',
    answer: null,
    onSubmit: () => {},
  });

  const mathQuestions = [
    { question: 'What is 5 + 5?', answer: 10 },
    { question: 'What is 3 x 4?', answer: 12 },
    { question: 'What is 2 + 3?', answer: 5},
    { question: 'What is 4 + 3?', answer: 7},
    { question: 'What is 1 + 3?', answer: 4},
    { question: 'What is 4 + 4?', answer: 8},
    { question: 'What is 1 x 1?', answer: 1},
    { question: 'What is 2 + 7?', answer: 9},
    { question: 'What is 40 + 3?', answer: 43},
    { question: 'What is 5 + 6?', answer: 11},
    { question: 'What is 4 x 2?', answer: 8},
    { question: 'What is 8 + 1?', answer: 9},
    { question: 'What is 3 + 3?', answer: 6},
    { question: 'What is 5 x 3?', answer: 15},
    { question: 'What is 6 + 4?', answer: 10 },
    { question: 'What is 9 - 5?', answer: 4 },
    { question: 'What is 2 x 7?', answer: 14 },
    { question: 'What is 15 / 3?', answer: 5 },
    { question: 'What is 11 + 8?', answer: 19 },
    { question: 'What is 6 x 9?', answer: 54 },
    { question: 'What is 20 - 13?', answer: 7 },
    { question: 'What is 4 x 5?', answer: 20 },
    { question: 'What is 18 / 2?', answer: 9 },
    { question: 'What is 3 + 7?', answer: 10 },
    { question: 'What is 25 / 5?', answer: 5 },
    { question: 'What is 15 - 9?', answer: 6 },
    { question: 'What is 8 x 3?', answer: 24 },
    { question: 'What is 14 / 2?', answer: 7 },
    // Add more questions as needed
  ];

    const toggle = (e, num) => {
        if (lock || showMathQuestion) {
          return 0;
        }
    
        const handleMove = () => {
          if (count % 2 === 0) {
            e.target.innerHTML = `<img src='${cross_icon}'>`;
            data[num] = "x";
            setCount((prevCount) => prevCount + 1);
          } else {
            e.target.innerHTML = `<img src='${circle_icon}'>`;
            data[num] = "o";
            setCount((prevCount) => prevCount + 1);
          }
    
          checkWin();
          setShowMathQuestion(false); // Close the math question after the move
        };
    
        // Show the math question before the move
        setShowMathQuestion(true);
        // You can customize the question and onSubmit logic based on your needs
        setMathQuestion({ questions: mathQuestions, onSubmit: handleMove });
      };

    const checkWin = () => {
        if(data[0] === data[1] && data[1] === data[2] && data[2] !==""){
            won(data[2]);
        } else if (data[3] === data[4] && data[4] === data[5] && data[5] !==""){
            won(data[5]);
        } else if (data[6] === data[7] && data[7] === data[8] && data[8] !==""){
            won(data[8]);
        } else if (data[0] === data[3] && data[3] === data[6] && data[6] !==""){
            won(data[6]);
        } else if (data[1] === data[4] && data[4] === data[7] && data[7] !==""){
            won(data[7]);
        } else if (data[2] === data[5] && data[5] === data[8] && data[8] !==""){
            won(data[8]);
        } else if (data[0] === data[4] && data[4] === data[8] && data[8] !==""){
            won(data[8]);
        } else if (data[2] === data[4] && data[4] === data[6] && data[6] !==""){
            won(data[6]);
        }
    }

    const won = (winner) => {
        setLock(true);
        if (winner==="x"){
            titleRef.current.innerHTML = `Congratulations: <img src='${cross_icon}'> Wins!`;
        } else {
            titleRef.current.innerHTML = `Congratulations: <img src='${circle_icon}'> Wins!`;
        }
    }

    const reset = () => {
        setLock(false);
        data = ["", "", "", "", "", "", "", "", ""];
        titleRef.current.innerHTML = 'Tic Tac Toe <span>Math Monkey</span>';
        box_array.map((e)=>{
            e.current.innerHTML = "";
        })
    }

    return (
        <div className= 'container'>
            <ht className="title" ref={titleRef}>
                Tic <span>Math Monkey</span>
            </ht>

            {showMathQuestion && <MathQuestion questions={mathQuestion.questions} onSubmit={mathQuestion.onSubmit} />}

            <div className="board">
                <div className="row1">
                    <div className="boxes" ref={box1} onClick={(e)=>{toggle(e,0)}}></div>
                    <div className="boxes" ref={box2} onClick={(e)=>{toggle(e,1)}}></div>
                    <div className="boxes" ref={box3} onClick={(e)=>{toggle(e,2)}}></div>
                </div>
                <div className="row2">
                    <div className="boxes" ref={box4} onClick={(e)=>{toggle(e,3)}}></div>
                    <div className="boxes" ref={box5} onClick={(e)=>{toggle(e,4)}}></div>
                    <div className="boxes" ref={box6} onClick={(e)=>{toggle(e,5)}}></div>
                </div>
                <div className="row3">
                    <div className="boxes" ref={box7} onClick={(e)=>{toggle(e,6)}}></div>
                    <div className="boxes" ref={box8} onClick={(e)=>{toggle(e,7)}}></div>
                    <div className="boxes" ref={box9} onClick={(e)=>{toggle(e,8)}}></div>
                </div>
            </div>

            <button className="reset" onClick={()=>{reset()}}>Reset</button>

            

        </div>
    )
}

export default TicTacToe