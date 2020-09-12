import React from 'react'
import { Link } from 'react-router-dom'

import './styles/Topic.css'


export default function TopicNormal (props){
    return(
        <Link to={props.info.link}>
            <button type="button" class="btn btn-outline-primary topic">
                <div className="topic__title">
                    <h3>{props.info.topic}</h3>
                </div>
                <div className="topic__arrow">
                    <svg className='topic-arrow-svg' width="24" height="24" xmlns="http://www.w3.org/2000/svg" color='##407BFF' fill-rule="evenodd" clip-rule="evenodd"><path d="M21.883 12l-7.527 6.235.644.765 9-7.521-9-7.479-.645.764 7.529 6.236h-21.884v1h21.883z"/></svg>
                </div>
            </button>
        </Link>
    )
}