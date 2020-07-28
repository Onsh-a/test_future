import React, {useState, useEffect} from 'react';
import {BrowserRouter, Route} from 'react-router-dom';
import 'normalize.css';
import './App.scss';
import ChooseQuery from './components/chooseQuery.jsx'
import BigDataQuery from './components/bigDataQuery'
import SmallDataQuery from './components/smallDataQuery';
import Fetch from './service/fetch'

function App(props) {

  // let [usersBig, getUsersBig] = useState([])
  // let [usersSmall, getUsersSmall] = useState([])
  //
  // let data;
  // getUsersBig(fetch(data))
  // console.log(data);



  return (<div className="App">

  <BrowserRouter>
    <Route exact path='/' render = { () => <ChooseQuery />} />
    <Route path='/big_data' render = { () => <BigDataQuery />} />
    <Route path='/small_data' render={ () => <SmallDataQuery />} />
  </BrowserRouter>




  </div>);
}

export default App;
