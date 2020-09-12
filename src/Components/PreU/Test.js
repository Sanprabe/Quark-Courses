import React, { Component } from 'react'

import QuestionBox from './questionBox'
import Result from './resultBox'

import './styles/Test.css'


export default class Test extends Component {
    constructor(props){
        super(props);
        this.state = {
            score: 0,
            responses: 0,
            questionBank: []
        }
    }

    questionBank = this.props.questions

    getQuestions = () => {
        this.questionBank().then(question => {
            this.setState({questionBank: question})
        })
    }

    newGame = () => {
        this.setState({
            score: 0,
            responses: 0,
            questionBank: []
        })
        this.getQuestions()
    }

    computeAnswer = (answer, correctAnswer) => {
        this.setState({
            responses: this.state.responses < 5 ? this.state.responses + 1 : 5
        })
        if(answer === correctAnswer){
            this.setState({score: this.state.score + 1})
        }
    }

    componentDidMount(){
        this.getQuestions()
    }

    render() {
        return (
            <div className="test__container"> 
                <div className="test__title">TEST: {this.props.topic}</div>
                <div className="test__questions">
                    {
                    this.state.questionBank.length > 0 &&  
                    this.state.responses < 5 &&  
                    this.state.questionBank.map(
                    ({question, answers, correct, questionId}) => <QuestionBox 
                    question= {question} 
                    options={answers} 
                    key={questionId} 
                    selected={answer => this.computeAnswer(answer, correct)}/>)} 
                
                    { 
                    this.state.responses === 5 
                        ? (<Result score={this.state.score} 
                        playAgain={this.newGame} closeModal={this.props.closeModal}/>)
                        : null
                    }
                </div>
          </div>
        )
    }
}

