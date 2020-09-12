import React from 'react';

import './styles/resultBox.css'
import '../../../node_modules/bootstrap/dist/css/bootstrap.css'
  
const Result = ({score, playAgain, closeModal }) => ( 
  <div className="resultBox__container"> 
    <div className="resultBox__score"> Your score is {score} / 5 correct answer ! ! ! </div>
    <div className="resultBox__buttons">
      <button className="resultBox__btn resultBox__playBtn btn btn-outline-primary" onClick={playAgain} > Play Again </button>
      <button className="resultBox__btn resultBox__closeBtn btn btn-outline-primary" onClick={closeModal} > Close </button>
    </div>
  </div> 
) 
  
export default Result; 
