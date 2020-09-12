import React from 'react';
import '../../node_modules/bootstrap/dist/css/bootstrap.css'
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import Layout from './Generales/Layout'
import Home from '../Pages/Home'
import Preu from '../Pages/preU';
import Maths from '../Pages/Maths/Maths'
import MathsFunction from '../Pages/Maths/Functions'
import MathsFunctionCuadratic from '../Pages/Maths/FunctionsCuadratics'
import Physics from '../Pages/Physics/Physics'

export default function App() {
  return (
    <BrowserRouter>
      <Layout>
        <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/preU" component={Preu} />
        <Route exact path='/preU/maths' component={Maths} />
        <Route exact path='/preU/maths/functions' component={MathsFunction} />
        <Route exact path='/preU/maths/functions/cuadratic' component={MathsFunctionCuadratic} />
        <Route exact path='/preU/physics' component={Physics} />
        </Switch>
      </Layout>
    </BrowserRouter>
  );
}