import React from 'react';
import {BrowserRouter, Route } from 'react-router-dom';
import Home from '../containers/Home';
import Login from '../containers/Login';
import Regis from '../containers/Register';
import NotFound from '../containers/NotFound';
import Layout from '../components/Layout';
import { Switch } from 'react-router-dom/cjs/react-router-dom.min';

const App = () =>(
    <BrowserRouter>
    <Layout>
    <Switch>
    <Route exact  path="/" component={Home}/>
    <Route exact  path="/register" component={Regis}/>
    <Route exact  path="/login" component={Login}/>
    <Route  component={NotFound}/>
    </Switch>
    </Layout>
    </BrowserRouter>



);

export default App;
