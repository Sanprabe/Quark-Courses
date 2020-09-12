import React from 'react'

import './Styles/Topic.css'

import TopicNormal from './TopicNormal'
import TopicPopup from './TopicPopup'

export default class Topic extends React.Component{
    Props = this.props
    Popup = this.props.final
    Preguntas = this.props.questions
    render(){
        return(
            <React.Fragment>
                {this.Popup ? <TopicPopup info={this.Props} questions={this.Preguntas} /> :<TopicNormal info={this.Props}  />}
            </React.Fragment>
        )
    }
}