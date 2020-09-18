import React from 'react'
import Modal from 'react-modal'

import GmailLogo from '../../Images/gmail.png'
import WhatsappLogo from '../../Images/whatsapp.png'
import CloseLogo from '../../Images/closeLogo.png'

import './styles/contactPopup.css'

export default function ContactPoup(props) {
    return (
        <Modal isOpen={props.modalIsOpen} shouldCloseOnOverlayClick={false} onRequestClose={props.closeModal} className='modalContact' overlayClassName="Overlay">
                        <div className="modalContact__header">
                            <button onClick={props.closeModal} className="modalContact__header-button">
                                <img className="modalContact__header-logo" src={CloseLogo} alt="closeLogo"/>
                            </button>
                        </div>
                        <div className="modalContact__info">
                            <div className="modalContact__title">LAS MEJORES CLASES AL MEJOR PRECIO</div>
                            <div className="modalContact__text">Contactanos en cualquiera de estos medios</div>
                            <div className="modalContact__link-container">
                                <a href='https://wa.link/bt4129' className="deco-none" target='blank'>
                                    <div className='modalLink'>
                                        <div className="modalLink__logo">
                                        <img className='modalLink__logo-png' src={WhatsappLogo} alt="Whatsapp Logo"/>
                                        </div>
                                        {/* <div className="modalLink__text">Whattsap</div> */}
                                    </div>
                                </a>
                                <a href="mailto:sanprabet@gmail.com?subject=Clases%20Online%20Efectivas%20&body=Deseo conocer más sobre las tutorias personalizadas de Quark Courses" className="deco-none" target='blank'>
                                    <div className='modalLink'>
                                        <div className="modalLink__logo">
                                            <img className='modalLink__logo-png' src={GmailLogo} alt="Email Logo"/>
                                        </div>
                                        {/* <div className="modalLink__text">E-mail</div> */}
                                    </div>
                                </a>
                            </div>
                        </div>
                </Modal>
    )
}
