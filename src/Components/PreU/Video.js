import React from 'react'

import './styles/Topic.css'

export default class Video extends React.Component {
    render(){
        return (
            <React.Fragment>
                <div className="modal__video">
                    <iframe className="modal__video-iframe" width="560" height="315" src={this.props.video} title={this.props.video} frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen="allowfullscreen" mozallowfullscreen="mozallowfullscreen"  msallowfullscreen="msallowfullscreen" oallowfullscreen="oallowfullscreen" webkitallowfullscreen="webkitallowfullscreen"></iframe>
                </div>
                <div className="modal__footer">
                    <button onClick={this.props.openTest} type="button" class="btn btn-primary modal__footer-button">Sigue con el test</button>
                </div>
            </React.Fragment>
        )
    }
}
