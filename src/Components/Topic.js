import React from 'react'

import './Styles/Topic.css'

import TopicNormal from './TopicNormal'
import TopicPopup from './TopicPopup'

export default class Topic extends React.Component{
    render(){
        const Props = this.props
        const Popup = this.props.final
        return(
            <React.Fragment>
                {Popup ? <TopicPopup info={Props} /> :<TopicNormal info={Props}  />}
            </React.Fragment>
        )
    }
}