import React from 'react'
import { Link } from 'react-router-dom';

import Topic from './Topic'
import '../../node_modules/bootstrap/dist/css/bootstrap.css'
import './Styles/subjects.css'


export default class Subjects extends React.Component {
        render(){
            return (
                <div className="subjects">
                    <div className="subjects-container container">
                        <div className="subjects__topics-title row">
                            {this.props.materia.title && (<h1 className="subjects__topics-title-text">{this.props.materia.title}</h1>)}
                        </div>
                        <div className="subjects__row row">
                            <div className="subjects__presentation col">
                                <div className="subjects__badge">
                                    <div className="subjects__badge-img">
                                        <img src={this.props.img} alt="lol"/>
                                    </div>
                                    <div className="subjects__badge-info">
                                        <p className="subjects__badge-info-text">{this.props.materia.text}</p>
                                    </div>
                                </div>
                            </div>
                            <div className="subjects__topics col container">
                                <div className="subjects__topics-elements row">
                                    {this.props.topic.topic_1 && (<Topic topic={this.props.topic.topic_1.name} link={this.props.topic.topic_1.to} final = {this.props.topic.topic_1.final} />)}
                                    {this.props.topic.topic_2 && (<Topic topic={this.props.topic.topic_2.name} link={this.props.topic.topic_2.to} final = {this.props.topic.topic_2.final} />)}
                                    {this.props.topic.topic_3 && (<Topic topic={this.props.topic.topic_3.name} link={this.props.topic.topic_3.to} final = {this.props.topic.topic_3.final} />)}
                                    {this.props.topic.topic_4 && (<Topic topic={this.props.topic.topic_4.name} link={this.props.topic.topic_4.to} final = {this.props.topic.topic_4.final} />)}
                                    {this.props.topic.topic_5 && (<Topic topic={this.props.topic.topic_5.name} link={this.props.topic.topic_5.to} final = {this.props.topic.topic_5.final} />)}
                                    {this.props.topic.topic_6 && (<Topic topic={this.props.topic.topic_6.name} link={this.props.topic.topic_6.to} final = {this.props.topic.topic_6.final} />)}
                                    {this.props.topic.topic_7 && (<Topic topic={this.props.topic.topic_7.name} link={this.props.topic.topic_7.to} final = {this.props.topic.topic_7.final} />)}
                                    {this.props.topic.topic_8 && (<Topic topic={this.props.topic.topic_8.name} link={this.props.topic.topic_8.to} final = {this.props.topic.topic_8.final} />)}
                                    {this.props.topic.topic_9 && (<Topic topic={this.props.topic.topic_9.name} link={this.props.topic.topic_9.to} final = {this.props.topic.topic_9.final} />)}
                                    <Link to={this.props.linkBack}>
                                        <button type="button" class="btn btn-primary topic">
                                            <div className="topic__arrow">
                                            <svg className='topic-arrow-svgBack' width="24" height="24" xmlns="http://www.w3.org/2000/svg" fill-rule="evenodd" clip-rule="evenodd"><path d="M12 0c6.623 0 12 5.377 12 12s-5.377 12-12 12-12-5.377-12-12 5.377-12 12-12zm0 1c6.071 0 11 4.929 11 11s-4.929 11-11 11-11-4.929-11-11 4.929-11 11-11zm3 5.753l-6.44 5.247 6.44 5.263-.678.737-7.322-6 7.335-6 .665.753z"/></svg>
                                            </div>
                                            <div className="topic__title">
                                                <h3>Atras</h3>
                                            </div>
                                        </button>
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            )
        }
    }