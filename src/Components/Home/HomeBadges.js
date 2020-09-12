import React from 'react'
import './styles/HomeBadges.css'

export default class HomeBadges extends React.Component{
    render(){
        return(
            <div className="home__badges">
                <img 
                src={require(`../../Images/${this.props.img}`)}
                className='home__badges-img'
                alt={this.props.imgAlt}
                />
                <h2 className='home__badges-title'>{this.props.title}</h2>
                <p className='home__badges-text'>{this.props.text}</p>
            </div>
        )
    }
}