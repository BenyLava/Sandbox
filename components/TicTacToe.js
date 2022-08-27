import React from 'react';
import Link from 'next/link';
import styles from '../styles/Home.module.css';
import Header from '../components/Header';
import Head from 'next/head';
import dope from '../styles/dope.module.css';
import { useState, useEffect } from 'react';
import Card from 'react-bootstrap/Card';






export default function TicTacToe () {

    const [xTurn, setXTurn ] = useState(true);
    const [won, setWon] = useState(false);
    const [draw, setDraw ] = useState(false);
    const [modalTitle, setModalTitle] = useState("");

    const [wonCombo, setWonCombo] = useState([]);

    
    const [boardData, setBoardData] = useState({
        0: "",
        1: "",
        2: "",
        3: "",
        4: "",
        5: "",
        6: "",
        7: "",
        8: "",
     });

     const reset = () => {
        setBoardData({
          0: "",1: "",2: "",3: "",4: "",5: "",6: "",7: "",8: "",
        });
        setXTurn(true);
        setWon(false);
        setWonCombo([3]);
        setDraw(false);
        setModalTitle("");
    };

    const checkDraw = () => {
        let check = Object.keys(boardData).every((v) => boardData[v]);
    if (won === false) setDraw(check);
    if (check && won === false) setModalTitle("Match Draw!");
     };
      

     const WINNING_COMBO = [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
        [0, 4, 8],
        [2, 4, 6],
      ];

      const checkWinner = () => {
        WINNING_COMBO.map((bd) => {
          const [a, b, c] = bd;
          if (
            boardData[a] &&
            boardData[a] === boardData[b] &&
            boardData[a] === boardData[c]
          ) {
            setWon(true);
            setDraw(false);
            setWonCombo([a, b, c]);
            setModalTitle(`Player ${!xTurn ? "X" : "O"} Won!!`);

            return;
    
          }
        });
      };

      useEffect(() => {

            


        checkWinner();
       
        // eslint-disable-next-line react-hooks/exhaustive-deps
        }, [boardData]);

     const updateBoardData = (idx) => {
        if (!boardData[idx] && !won ) {
            {/*will check whether specific idx is empty or not */}
            let value = xTurn === true ? "X" : "O";
            setBoardData({ ...boardData, [idx]: value });
            setXTurn(!xTurn);
        }


     }

     



    return (
        <div className="fullDiv">
            
           
           
 
                <div>
                    <h1 className="textcenter">Tic Tac Toe</h1>
                    <div className="game">
                        <div className="game__menu">
                            <p>{xTurn === true ? "X Turn" : "O Turn"}</p>
                            <p>{`Game Won: ${won} | Game Draw: ${draw}`}</p>
                        </div>
                        <div className="game__board">
                            {[...Array(9)].map((v, idx) => {
                                return (
                                    <div key={idx} 
                                    className="square"
                                    onClick={() => {
                                        updateBoardData(idx);
                                    }}> {boardData[idx]} </div>


                                )


                            }
                            
                            )}
                        </div>
                    </div>
                        <div className={`modal ${modalTitle ? "show" : ""}`}>
                            <div className="modal__title">{modalTitle}</div>
                            <button className="button" onClick={reset}>New Game</button>
                        </div>
                </div>
   
   
   
  

            

      

        </div>
    )

}