import React from 'react'
import Subjects from '../../Components/PreU/subjects.js'
import LogoPhysics from '../../Images/physics.jpg'

export default class Physics extends React.Component{

    linkBack = '/preu'

    materia = {
        title: 'FÍSICA',
        text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.'
    }

    topics = {
        topic_1 :{
            name: 'Matematicas Básica',
            to: '/preU/maths/mathsBasics'
        },
        topic_2 :{
            name: 'Funciones',
            to: '/preU/maths/functions'
        },
        topic_3 :{
            name: 'Funciones Conicas',
            to: '/preU/maths/conicFunctions'
        },
        topic_4 :{
            name: 'Geometría',
            to: '/preU/maths/geometry'
        }
    }

    render(){
        return(
            <Subjects
            linkBack={this.linkBack}
            img={LogoPhysics}
            materia={this.materia}
            topic={this.topics}
            />
        )
    }
}