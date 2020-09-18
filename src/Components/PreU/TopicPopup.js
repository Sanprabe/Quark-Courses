import React from 'react'
import Modal from 'react-modal'

import Video from './Video'
import Test from './Test'

import './styles/Topic.css' //Diseño del botón
import './styles/VideoPopup.css'

Modal.setAppElement('#content')

export default class TopicPopup extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            modalVideoIsOpen: false,
            modalTestIsOpen: false
        }
    
        this.openVideoModal = () =>{
            this.setState({
                modalVideoIsOpen: true,
                modalTestIsOpen: false
            })
        }
    
        this.closeVideoModal = () =>{
            this.setState({
                modalVideoIsOpen: false,
                modalTestIsOpen: false
            })
        }
    
        this.openTestModal = () =>{
            this.setState({
                modalTestIsOpen: true,
                modalVideoIsOpen: false
            })
        }
    
        this.closeTestModal = () =>{
            this.setState({
                modalTestIsOpen: false
            })
        }
    }
    
    render(){
        return(
            <React.Fragment>
                <button onClick={this.openVideoModal} type="button" class="btn btn-outline-primary topic">
                    <div className="topic__title">
                        <h3>{this.props.info.topic}</h3>
                    </div>
                </button>
                <Modal isOpen={this.state.modalVideoIsOpen} shouldCloseOnOverlayClick={false} onRequestClose={this.openVideoModal} className='modal__videoPopup' overlayClassName="overlay__videoPopup">
                    <div className="modal__videoHeader">
                        <button onClick={this.closeVideoModal} className="modal__videoHeader-button">
                            <svg className="modal__videoHeader-logo" width="24" height="24" xmlns="http://www.w3.org/2000/svg" fill-rule="evenodd" clip-rule="evenodd"><path d="M12 11.293l10.293-10.293.707.707-10.293 10.293 10.293 10.293-.707.707-10.293-10.293-10.293 10.293-.707-.707 10.293-10.293-10.293-10.293.707-.707 10.293 10.293z"/></svg>
                        </button>
                    </div>
                    <Video video={this.props.info.link} openTest={this.openTestModal} />
                </Modal>
                <Modal isOpen={this.state.modalTestIsOpen} shouldCloseOnOverlayClick={false} onRequestClose={this.openTestModal} className='modal__videoPopup' overlayClassName="overlay__videoPopup">
                    <div className="modal__videoHeader">
                        <button onClick={this.closeTestModal} className="modal__videoHeader-button">
                            <svg className="modal__videoHeader-logo" width="24" height="24" xmlns="http://www.w3.org/2000/svg" fill-rule="evenodd" clip-rule="evenodd"><path d="M12 11.293l10.293-10.293.707.707-10.293 10.293 10.293 10.293-.707.707-10.293-10.293-10.293 10.293-.707-.707 10.293-10.293-10.293-10.293.707-.707 10.293 10.293z"/></svg>
                        </button>
                    </div>
                    <Test questions={this.props.questions} closeModal={this.closeVideoModal} topic={this.props.info.topic}  />
                </Modal>
            </React.Fragment>
        )
    }
}