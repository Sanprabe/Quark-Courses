import React from 'react'
import Subjects from '../../Components/PreU/subjects'
import LogoMaths from '../../Images/maths.jpg'

export default class MathsFunction extends React.Component{
    
    linkBack = '/preu/maths/'

    materia = {
        title: 'FUNCIONES',
        text: 'Las matematicas son la base de como comprendemos el mundo, en este mini-curso mi objetivo es explicarte las bases de el "lenguaje del universo" de la forma más sencilla posible. COMENCEMOS'
    }

    topics = {
        topic_1 :{
            name: 'Introducción Funciones',
            to: null,
            final: true
        },topic_2 :{
            name: 'Cuadraticas',
            to: '/preU/maths/functions/cuadratic'
        },
        topic_3 :{
            name: 'Cubicas',
            to: '/preU/maths/functions/cubic'
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