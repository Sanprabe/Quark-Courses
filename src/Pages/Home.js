import React from 'react';
import {Link} from 'react-router-dom'
import * as Scroll from 'react-scroll';
import ContactPopup from '../Components/Generales/contactPopup'
import '../../node_modules/bootstrap/dist/css/bootstrap.css'


import './Styles/Home.css'
import './Styles/HomeResponsive.css'
import ImagenHero from '../Images/HeroBanner.png'
import HomeBadges from '../Components/Home/HomeBadges'


export default class Home extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            modalIsOpen: false,
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
    }

    LinkScroll = Scroll.Link;

    Badges = {
        Badge_1: {
            title: 'EL CONOCIMIENTO DEBE SER GRATUITO',
            text: 'Tienes cursos 100% gratuitos online, únicamente paga por asesorías personalizadas',
            img: 'money.jpg',
            imgAlt: 'moneyLogo'
        },
        Badge_2: {
            title: 'DE LA COMUNIDAD PARA LA COMUNIDAD',
            text: 'Todos nuestros profesores son estudiantes con los que podrás contar cuando lo necesites',
            img: 'people.jpg',
            imgAlt: 'Estudiante'
        },
        Badge_3: {
            title: 'PRUEBAS INTERCTIVAS',
            text: 'Puedes probar tus conocimientos en cualquier momento con nuestro sistema de test interactivos',
            img: 'tests.jpg',
            imgAlt: 'Estudiante',
        }
    }

    render(){
        return (
            <React.Fragment>
            <div className="hero">
                <div className="container hero__container">
                    <div className="row hero__container-row">
                            <div className="col hero__banner">
                                <img src={ImagenHero} className='hero__banner-img' alt='heroImage'></img>
                            </div>
                            <div className="col info__col">
                                <p className='NameHero'>
                                    <span className='font-weight-bold h1 NameHero-quark'>QUARK
                                    </span>
                                    <span className='font-weight-light h1 NameHero-courses'>Courses</span>
                                </p>
                                    <p className='h3 hero__text'>courses hechos por Estudiantes<br />Para Estudiantes</p>
                                    <this.LinkScroll className='btn btn-primary hero__button' activeClass="active" to="title-preU" spy={true} smooth={true} offset={50} duration={1500} onSetActive={this.handleSetActive}>
                                    <span>Comienza a Aprender</span>
                                    </this.LinkScroll>
                            </div>
                        </div>
                </div>
            </div>
            <hr />
            <div className="valores">
                <div className="container valores__container">
                    <div className="row valores__title">
                        <h1 className='valores__title-text'>¿Por qué lo hacemos?</h1>
                    </div>
                    <div className="row valores__banners">
                        <div className="col-sm">
                            <HomeBadges title={this.Badges.Badge_1.title} text={this.Badges.Badge_1.text} img={this.Badges.Badge_1.img} img__alt={this.Badges.Badge_1.imgAlt} />
                        </div>
                        <div className="col-sm">
                            <HomeBadges title={this.Badges.Badge_2.title} text={this.Badges.Badge_2.text} img={this.Badges.Badge_2.img} img__alt={this.Badges.Badge_2.imgAlt} />
                        </div>
                        <div className="col-sm">
                            <HomeBadges title={this.Badges.Badge_3.title} text={this.Badges.Badge_3.text} img={this.Badges.Badge_3.img} img__alt={this.Badges.Badge_3.imgAlt} />
                        </div>
                    </div>
                    <div className="row valores__onclick">
                        <Link className='btn btn-primary valores__onclick-buttons' to='/'>
                            <span>Contrata una asesoría personalizada</span>
                        </Link>
                    </div>
                </div>
            </div>
            <hr />
            <div className="courses" name='title-preU'>
                <div className="container courses__container">
                    <div className="row courses__container-row">
                        <div className="col courses__info">
                            <p className='courses__info-title'>
                                <span className='font-weight-bold h1 courses__info-title1'>PRE</span>
                                <span className='font-weight-light h1 courses__info-title2'>Universitario</span>
                            </p>
                            <p className='courses__info-text h3'>PreUniversitario online 100% gratis. <br/> Avanza a tu ritmo y contacta a un profe cuando lo necesites</p>
                            <div className="courses__buttons">
                                <Link className='btn btn-primary courses__buttons-btn courses__buttons-curso' to='/PreU'>
                                    <span>Ingresa al curso</span>
                                </Link>
                                <button onClick={this.openModal} className='btn btn-outline-primary courses__buttons-btn courses__buttons-contact' >
                                    <span>Contacta a un profe</span>
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <ContactPopup modalIsOpen={this.state.modalIsOpen} closeModal={this.closeModal}/>
            </React.Fragment>
        )
    }
}