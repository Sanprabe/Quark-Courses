import React from 'react'
import {Link} from 'react-router-dom'

import './styles/Navbar.css'

export default class Navbar extends React.Component{
    render(){
        return(
            <div className="navbar__ppal">
                <div className="container navbar__container">
                    <div className="navbar__logo">
                        <Link to='/'>
                        <p className='logo__text'>
                            <span className='font-weight-bold quarkName'>QUARK</span>
                            <span className='font-weight-light coursesName'>Courses</span>
                        </p>
                        </Link>
                    </div>
                    <div className="navbar__buttons">
                        <Link to='/'>
                            <button className='btn btn-default'>Quienes Somos</button>
                        </Link>
                        <Link to='/'>
                            <button className='btn btn-primary navbar__button-main'>Contacta un profesor</button>
                        </Link>
                    </div>
                </div>
            </div>
        )
    }
}