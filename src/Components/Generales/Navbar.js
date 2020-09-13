import React from 'react'
import {Link} from 'react-router-dom'
// import Modal from 'react-modal'

import ContactPopup from './contactPopup'
import './styles/Navbar.css'

// import GmailLogo from '../../Images/gmail.png'

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
                        <button onClick={this.openModal} className='btn btn-primary navbar__button-main'>Contacta un profesor</button>
                    </div>
                </div>
                <ContactPopup modalIsOpen={this.state.modalIsOpen} closeModal={this.closeModal}/>
            </div>
        )
    }
}