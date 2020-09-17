import React from 'react'
import Modal from 'react-modal'

import Video from './Video'
import Test from './Test'

import './styles/Topic.css'
import './styles/TopicPopup.css'

Modal.setAppElement('#content')

export default class TopicPopup extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            modalIsOpen: false,
            testIsOpen: false
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
    
        this.openTest = () =>{
            this.setState({
                testIsOpen: true
            })
        }
    
        this.closeTest = () =>{
            this.setState({
                testIsOpen: false
            })
        }
    }
    
    render(){
        return(
            <React.Fragment>
                <button onClick={this.openModal} type="button" class="btn btn-outline-primary topic">
                    <div className="topic__title">
                        <h3>{this.props.info.topic}</h3>
                    </div>
                </button>
                <Modal isOpen={this.state.modalIsOpen} shouldCloseOnOverlayClick={false} onRequestClose={this.modalIsOpen} className='modal__topicPopup' overlayClassName="Overlay__topicPopup">
                        <div className="modal__header">
                            <button onClick={this.closeModal} className="modal__header-button">
                                <svg className="modal__header-logo" width="24" height="24" xmlns="http://www.w3.org/2000/svg" fill-rule="evenodd" clip-rule="evenodd"><path d="M12 11.293l10.293-10.293.707.707-10.293 10.293 10.293 10.293-.707.707-10.293-10.293-10.293 10.293-.707-.707 10.293-10.293-10.293-10.293.707-.707 10.293 10.293z"/></svg>
                            </button>
                        </div>
                        {this.state.testIsOpen? <Test questions={this.props.questions} closeModal={this.closeModal} topic={this.props.info.topic}  /> : <Video video={this.props.info.link} openTest={this.openTest} /> }
                </Modal>
            </React.Fragment>      
        )
    }
}