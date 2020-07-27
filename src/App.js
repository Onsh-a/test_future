import React, {useState, useEffect} from 'react';
import 'normalize.css';
import './App.scss';
import TableBody from './components/tableBody';
import Loading from './components/loading'
import Search from './service/search'
import AddRow from './components/addRow'
import User from './service/constructor'
import Class from './components/style/addRow.module.scss';

function App(props) {

  let [users, setUsers] = React.useState([])
  let [necessaryElement, setElement] = React.useState([])
  let [addData, setAdd] = React.useState(false)
  let [isValid, validate] = React.useState(false)

  useEffect(() => {
    fetch("http://www.filltext.com/?rows=32&id={number|1000}&firstName={firstName}&lastName={lastName}&email={email}&phone={phone|(xxx)xxx-xx-xx}&address={addressObject}&description={lorem|32}").then(response => response.json()).then(data => {
      setUsers(data);
    });
  }, [])

  let backUpCache = [];

  let handleSearch = (e) => {
    let dataToSearch = e.target.previousSibling.value
    users = Search(users, dataToSearch, backUpCache[0]);
    setUsers(users)
  }

  let handleClose = (e) => {
    setAdd(false);
  }

  let wierdValidation = (e) => {
    isValid = true;
    let elems = document.querySelectorAll(`.${Class.addRow_input}`);
    elems.forEach((item) => {
      if (item.value === '') {
        return isValid = false
      }
    })
    isValid === true ? validate(true) : validate(false)

    //console.log(isValid)
  }

  let handleNewUser = (e) => {
    if (isValid) {
      let elems = document.querySelectorAll(`.${Class.addRow_input}`);
      let newData = [];
      elems.forEach((item) => {
        return newData.push(item.value)
      })

      let newUser = new User(newData[0], newData[1], newData[2], newData[3], newData[4])
      users.unshift(newUser)
      setUsers(users)
      setAdd(false);
    }
  }

  let handleOpen = (e) => {
    setAdd(true);
  }

  let handleMoreInfo = (e) => {
    let elementIndex = e.target.parentNode.firstChild.innerHTML

    if (elementIndex == necessaryElement.id) { // closes the tab if the same row is clicked again
      return setElement([])
    }

    users.forEach((item, i) => {
      if (item.id == elementIndex) {
        setElement(item);
      }
    });

  }

  return (<div className="App">

    <AddRow addData={addData} close={handleClose} open={handleOpen} add={handleNewUser} validate={wierdValidation} isValid={isValid}/> {
      users.length > 0
        ? <TableBody users={users} search={handleSearch} moreInfo={handleMoreInfo} moreInfoData={necessaryElement} open={handleOpen}/>
        : <Loading/>
    }

  </div>);
}

export default App;
