import React from 'react'
import {Link} from 'react-router-dom'

import ContactPopup from './contactPopup'
import './styles/Navbar.css'

export default class Navbar extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            modalIsOpen: false,
        }
    
        this.openModal = () =>{
            this.setState({
                modalIsOpen: true
            })
        }
    
        this.closeModal = () =>{
            this.setState({
                modalIsOpen: false,
                testIsOpen: false
            })
        }
    }

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
                        {/* <Link to='/'>
                            <button className='btn btn-default'>Quienes Somos</button>
                        </Link> */}{/* Crear pagina de quienes somos */}
                        <button onClick={this.openModal} className='btn btn-primary navbar__button-main'>
                            <span className='navbar__button-mainText'>Contacta un profesor</span>
                            <svg className='navbar__button-mainButton' width="24" height="24" xmlns="http://www.w3.org/2000/svg" fill-rule="evenodd" clip-rule="evenodd"><path d="M24 21h-24v-18h24v18zm-23-16.477v15.477h22v-15.477l-10.999 10-11.001-10zm21.089-.523h-20.176l10.088 9.171 10.088-9.171z"/></svg>
                        </button>
                    </div>
                </div>
                <ContactPopup modalIsOpen={this.state.modalIsOpen} closeModal={this.closeModal}/>
            </div>
        )
    }
}