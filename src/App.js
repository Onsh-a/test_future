import React, {useState, useEffect} from 'react';
import {BrowserRouter, Route} from 'react-router-dom';
import 'normalize.css';
import './App.scss';
import ChooseQuery from './components/chooseQuery.jsx'
import BigDataQuery from './components/bigDataQuery'
import SmallDataQuery from './components/smallDataQuery';

function App(props) {


  return (<div className="App">

  <BrowserRouter>
    <Route exact path='/' render = { () => <ChooseQuery />} />
    <Route path='/big_data' render = { () => <BigDataQuery />} />
    <Route path='/small_data' render={ () => <SmallDataQuery />} />
  </BrowserRouter>




  </div>);
}

export default App;
