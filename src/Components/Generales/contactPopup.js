import React from 'react'
import Modal from 'react-modal'

import GmailLogo from '../../Images/gmail.png'

import './styles/contactPopup.css'

export default function ContactPoup(props) {
    return (
        <Modal isOpen={props.modalIsOpen} shouldCloseOnOverlayClick={false} onRequestClose={props.closeModal} className='modalContact' overlayClassName="Overlay">
                        <div className="modalContact__header">
                            <button onClick={props.closeModal} className="modalContact__header-button">
                                <svg className="modalContact__header-logo" width="24" height="24" xmlns="http://www.w3.org/2000/svg" fill-rule="evenodd" clip-rule="evenodd"><path d="M12 11.293l10.293-10.293.707.707-10.293 10.293 10.293 10.293-.707.707-10.293-10.293-10.293 10.293-.707-.707 10.293-10.293-10.293-10.293.707-.707 10.293 10.293z"/></svg>
                            </button>
                        </div>
                        <div className="modalContact__info">
                            <div className="modalContact__title">LAS MEJORES CLASES AL MEJOR PRECIO</div>
                            <div className="modalContact__text">Contactanos en cualquiera de estos medios</div>
                            <div className="modalContact__link-container">
                                <a href='https://wa.link/bt4129' className="deco-none" target='blank'>
                                    <div className='modalLink'>
                                        <div className="modalLink__logo">
                                            <svg className='modalLink__logo-svg' xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M12.031 6.172c-3.181 0-5.767 2.586-5.768 5.766-.001 1.298.38 2.27 1.019 3.287l-.582 2.128 2.182-.573c.978.58 1.911.928 3.145.929 3.178 0 5.767-2.587 5.768-5.766.001-3.187-2.575-5.77-5.764-5.771zm3.392 8.244c-.144.405-.837.774-1.17.824-.299.045-.677.063-1.092-.069-.252-.08-.575-.187-.988-.365-1.739-.751-2.874-2.502-2.961-2.617-.087-.116-.708-.94-.708-1.793s.448-1.273.607-1.446c.159-.173.346-.217.462-.217l.332.006c.106.005.249-.04.39.298.144.347.491 1.2.534 1.287.043.087.072.188.014.304-.058.116-.087.188-.173.289l-.26.304c-.087.086-.177.18-.076.354.101.174.449.741.964 1.201.662.591 1.221.774 1.394.86s.274.072.376-.043c.101-.116.433-.506.549-.68.116-.173.231-.145.39-.087s1.011.477 1.184.564.289.13.332.202c.045.072.045.419-.1.824zm-3.423-14.416c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm.029 18.88c-1.161 0-2.305-.292-3.318-.844l-3.677.964.984-3.595c-.607-1.052-.927-2.246-.926-3.468.001-3.825 3.113-6.937 6.937-6.937 1.856.001 3.598.723 4.907 2.034 1.31 1.311 2.031 3.054 2.03 4.908-.001 3.825-3.113 6.938-6.937 6.938z"/></svg>
                                        </div>
                                        <div className="modalLink__text">Whattsap</div>
                                    </div>
                                </a>
                                <a href="mailto:sanprabet@gmail.com?subject=Clases%20Online%20Efectivas%20&body=Deseo conocer más sobre las tutorias personalizadas de Quark Courses" className="deco-none" target='blank'>
                                    <div className='modalLink'>
                                        <div className="modalLink__logo">
                                            <img className='modalLink__logo-png' src={GmailLogo} alt="."/>
                                        </div>
                                        <div className="modalLink__text">E-mail</div>
                                    </div>
                                </a>
                            </div>
                        </div>
                </Modal>
    )
}
