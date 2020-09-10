import React from 'react'
import Subjects from '../../Components/subjects'
import LogoMaths from '../../Images/maths.jpg'

export default class Maths extends React.Component{
    
    linkBack = '/preu'

    materia = {
        title: 'MATEMATICAS',
        text: 'Las matematicas son la base de como comprendemos el mundo, en este mini-curso mi objetivo es explicarte las bases de el "lenguaje del universo" de la forma más sencilla posible. COMENCEMOS'
    }

    topics = {
        topic_1 :{
            name: 'Matematicas Básica',
            to: 'https://www.youtube.com/embed/3ppZzNF4kx8',
            final: true
        },
        topic_2 :{
            name: 'Funciones',
            to: '/preU/maths/functions',
            final: false
        },
        topic_3 :{
            name: 'Funciones Conicas',
            to: '/preU/maths/conicFunctions',
            final: false
        },
        topic_4 :{
            name: 'Geometría',
            to: '/preU/maths/geometry',
            final: false
        },
        topic_5 :{
            name: 'Trigonometría',
            to: '/preU/maths/trigonometry',
            final: false
        },

    }

    render(){
        return(
            <Subjects
            linkBack={this.linkBack}
            img={LogoMaths}
            materia={this.materia}
            topic={this.topics}
            />
        )
    }
}