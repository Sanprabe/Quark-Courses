import React from 'react';
import {Link} from 'react-router-dom'
import * as Scroll from 'react-scroll';

import SubjectButton from '../Components/PreU/SubjectButton'

import ImagenCourses from '../Images/Courses.png'
import './Styles/preU.css'


export default class PreU extends React.Component{
    LinkScroll = Scroll.Link;
    render(){
        return(
            <div>
            <div className="coursesHero">
                <div className="container coursesHero__container">
                    <div className="row coursesHero__container-row">
                        <div className="col coursesHero__info">
                            <p className='coursesHero__info-title'>
                                <span className='font-weight-bold h1 coursesHero__info-title1'>PRE</span>
                                <span className='font-weight-light h1 coursesHero__info-title2'>Universitario</span>
                            </p>
                            <p className='coursesHero__info-text h3'>PreUniversitario online 100% gratis. <br/> Avanza a tu ritmo y contacta a un profe cuando lo necesites</p>
                            <div className="coursesHero__buttons">
                                <Link className='btn btn-outline-primary coursesHero__buttons-btn coursesHero__buttons-contact'>
                                    <span>Contacta a un profe</span>
                                </Link>
                            </div>
                        </div>
                        <div className="col coursesHero__banner">
                            <img src={ImagenCourses} alt="" className='coursesHero__banner-img' />
                        </div>    
                    </div>
                    <hr />
                </div>
            </div>
            <div className="materias" name='subject-section'>
                <div className="container materias__container-general">
                    <div className="row materias__title">
                        <h1 className='materias__title-text' id='materias__title-link'>¿QUÉ DESEAS APRENDER HOY?</h1>
                    </div>
                    <div className="container materias__container-SubjectButtons">
                        <div className="row materias__row">
                            <div className=' col materias__col materias__col-1'>
                                <div className=" materias__maths">
                                    <SubjectButton subject='Matemáticas' link='/preU/maths' />
                                </div>
                                <div className="materias__physics">
                                    <SubjectButton subject='Física' link='/preU/physics' />
                                </div>
                                <div className="materias__chemistry">
                                    <SubjectButton subject='Química' link='/preU/chemistry' />
                                </div>
                            </div>
                            <div className='col materias__col materias__col-2'>
                                <div className="materias__biology">
                                    <SubjectButton subject='Biología' link='/preU/biology' />
                                </div>
                                <div className="materias__history">
                                    <SubjectButton subject='Historia' link='/preU/history' />
                                </div>
                                <div className="materias__imageAnalysis">
                                    <SubjectButton subject='Analisis de Imagen' link='/preU/imageAnalisys' />
                                </div>              
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            </div>
        )
    }
}