import React from 'react'

import Subjects from '../../Components/subjects'
import LogoMaths from '../../Images/maths.jpg'

export default class MathsFunctionCuadratic extends React.Component{
    
    linkBack = '/preu/maths/functions'

    materia = {
        title: 'FUNCIONES',
        text: 'Las matematicas son la base de como comprendemos el mundo, en este mini-curso mi objetivo es explicarte las bases de el "lenguaje del universo" de la forma más sencilla posible. COMENCEMOS'
    }

    topics = {
        topic_1 :{
            name: 'Introducción Cuadraticas',
            to: '/preU/maths/functions',
            noArrow: true
        },
        topic_2 :{
            name: 'Cuadratica Explicita',
            to: '/preU/maths/functions',
            noArrow: true
        },
        topic_3 :{
            name: 'Cuadratica Implicita',
            to: '/preU/maths/functions',
            noArrow: true
        },
        topic_4 :{
            name: 'Soluciones de la Cuadratica',
            to: '/preU/maths/functions',
            noArrow: true
        },
        topic_5 :{
            name: 'Procedimientos Extras Cuadratica',
            to: '/preU/maths/functions',
            noArrow: true
        }

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