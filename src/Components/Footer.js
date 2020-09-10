import React from 'react'
import './Styles/Footer.css'
import '../../node_modules/bootstrap/dist/css/bootstrap.css'

export default class Footer extends React.Component{
    render(){
        return (
            <div className="footer__ppal">
                <div className="container footer__container">
                    <div className="row footer__row">
                        <div className="col"></div>
                        <div className="col text-col">
                            <span>Hecho por <a href='https://www.youtube.com/channel/UCLWD0JpKr9BeSWVDemHqmJQ/' target="_blank" rel="noopener noreferrer" >Quark</a></span>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}