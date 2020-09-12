import React from 'react';

import Navbar from './Navbar';
import Footer from './Footer'

import './styles/Layout.css'

export default function Layout(props) {

  return (
    <div className='layout'>
      <Navbar />
      {props.children}
      <Footer />
    </div>
  );
}