// import React, {useState} from 'react'
// import Modal from 'react-modal'

// import Video from './Video'
// import Test from './Test'

// import './Styles/Topic.css'
// import './Styles/TopicPopup.css'

// Modal.setAppElement('#content')

// export default function TopicPopup (props){
//     const [modalIsOpen, setmodalIsOpen] = useState(false)
//     const [testIsOpen, setTestIsOpen] = useState(false)
//     turnTrue = () => {setTestIsOpen(true)}

//     return(
//         <React.Fragment>
//             <button onClick={() => setmodalIsOpen(true)} type="button" class="btn btn-outline-primary topic">
//                 <div className="topic__title">
//                     <h3>{props.info.topic}</h3>
//                 </div>
//             </button>
//             <Modal isOpen={modalIsOpen} shouldCloseOnOverlayClick={false} onRequestClose={() => setmodalIsOpen(false)}>
//                     <div className="modal__header">
//                         <button onClick={() => setmodalIsOpen(false)} className="modal__header-button">
//                             <svg className="modal__header-logo" width="24" height="24" xmlns="http://www.w3.org/2000/svg" fill-rule="evenodd" clip-rule="evenodd"><path d="M12 11.293l10.293-10.293.707.707-10.293 10.293 10.293 10.293-.707.707-10.293-10.293-10.293 10.293-.707-.707 10.293-10.293-10.293-10.293.707-.707 10.293 10.293z"/></svg>
//                         </button>
//                     </div>
//                     {testIsOpen? <Test  /> : <Video video={props.info.link} setTestIsOpen={this.turnTrue} /> }
//                     <div className="modal__test">

//                     </div>
//             </Modal>
//         </React.Fragment>      
//     )
// }

import React from 'react'
import Modal from 'react-modal'

import Video from './Video'
import Test from './Test'

import './Styles/Topic.css'
import './Styles/TopicPopup.css'

Modal.setAppElement('#content')

export default class TopicPopup extends React.Component{

    state = {
        modalIsOpen: false,
        testIsOpen:false
    }

    openModal = () =>{
        this.setState({
            modalIsOpen: true
        })
    }

    closeModal = () =>{
        this.setState({
            modalIsOpen: false
        })
    }

    openTest = () =>{
        this.setState({
            testIsOpen: true
        })
    }

    closeTest = () =>{
        this.setState({
            testIsOpen: false
        })
    }
    
    render(){
        return(
            <React.Fragment>
                <button onClick={this.openModal} type="button" class="btn btn-outline-primary topic">
                    <div className="topic__title">
                        <h3>{this.props.info.topic}</h3>
                    </div>
                </button>
                <Modal isOpen={this.state.modalIsOpen} shouldCloseOnOverlayClick={false} onRequestClose={this.modalIsOpen}>
                        <div className="modal__header">
                            <button onClick={this.closeModal} className="modal__header-button">
                                <svg className="modal__header-logo" width="24" height="24" xmlns="http://www.w3.org/2000/svg" fill-rule="evenodd" clip-rule="evenodd"><path d="M12 11.293l10.293-10.293.707.707-10.293 10.293 10.293 10.293-.707.707-10.293-10.293-10.293 10.293-.707-.707 10.293-10.293-10.293-10.293.707-.707 10.293 10.293z"/></svg>
                            </button>
                        </div>
                        {this.state.testIsOpen? <Test  /> : <Video video={this.props.info.link} openTest={this.openTest} /> }
                        <div className="modal__test">
    
                        </div>
                </Modal>
            </React.Fragment>      
        )
    }
}