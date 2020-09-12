import React, {useState} from "react";

import './styles/questionBox.css'
import '../../../node_modules/bootstrap/dist/css/bootstrap.css'

const QuestionBox = ({ question, options, selected}) => {
  const [answer, setAnswer] = useState(options); 
  return ( 
    <div className="questionBox__container"> 
        <div className="questionBox__question">{question}</div>
        <div className="questionBox__answers">
            {answer === options && (answer.map((text, index) => (
            <button 
                key={index} 
                className="questionBox__answerBtn btn btn-outline-primary"
                onClick={()=>{ 
                        setAnswer([text]);
                        selected(text); 
                    }}> {text} 
            </button>
            )))}
            {answer !== options && (
                answer.map((text, index) => (
                    <button 
                        key={index} 
                        className="questionBox__answerBtn btn btn-outline-primary">
                        {text} 
                    </button>
                )))}
        </div>
    </div>
  ) 
}; 
  
export default QuestionBox; 
