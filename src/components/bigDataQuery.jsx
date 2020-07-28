import React, {useState, useEffect} from 'react';
import 'normalize.css';
import './../App.scss';
import axios from 'axios'
import TableBody from './tableBody';
import Loading from './loading'
import Search from './../service/search'
import AddRow from './addRow'
import User from './../service/constructor'
import Class from './style/addRow.module.scss';

function BigData(props) {

  let [users, setUsers] = React.useState([])
  let [necessaryElement, setElement] = React.useState([])
  let [addData, setAdd] = React.useState(false)
  let [isValid, validate] = React.useState(false)
  let [loading, setLoading] = React.useState(false)
  let [currentPage, setCurrentPage] = React.useState(1)
  let [usersPerPage, setUsersPerPage] = React.useState(40)
  let [lazyLoad, setLazyLoad] = React.useState(true);


  useEffect(() => {
    const fetchUsers = async () => {
      setLoading(true);
      const res = await axios.get('http://www.filltext.com/?rows=25&id={number|1000}&firstName={firstName}&delay=3&lastName={lastName}&email={email}&phone={phone|(xxx)xxx-xx-xx}&address={addressObject}&description={lorem|32}');
      setUsers(res.data);
      setLoading(false);
      const res_two = await axios.get('http://www.filltext.com/?rows=1000&id={number|1000}&firstName={firstName}&delay=3&lastName={lastName}&email={email}&phone={phone|(xxx)xxx-xx-xx}&address={addressObject}&description={lorem|32}')
      setUsers(res_two.data);
      setLazyLoad(false)
    }

    fetchUsers()
  }, [])

  let backUpCache = [];

  let handleSearch = (e) => {
    let dataToSearch = e.target.previousSibling.value
    users = Search(users, dataToSearch, backUpCache[0]);
    setUsers(users)
  }

  //pagination

  let indexOfLastUser = currentPage * usersPerPage;
  let indexOfFirstUser = indexOfLastUser - usersPerPage;
  let currentUsers = users.slice(indexOfFirstUser, indexOfLastUser);

  let paginate = (pageNumber) => {
    setCurrentPage(pageNumber);

  }

  //handlers

  let handleClose = (e) => {
    setAdd(false);
  }

  let wierdValidation = (e) => { // validation for adding new user
    isValid = true;
    let elems = document.querySelectorAll(`.${Class.addRow_input}`);
    elems.forEach((item) => {
      if (item.value === '') {
        return isValid = false
      }
    })
    isValid === true ? validate(true) : validate(false)
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

    <AddRow addData={addData} close={handleClose} open={handleOpen} add={handleNewUser} validate={wierdValidation} isValid={isValid}/>

    { loading === false
        ? <TableBody users={currentUsers} search={handleSearch} moreInfo={handleMoreInfo} moreInfoData={necessaryElement} open={handleOpen} usersPerPage={usersPerPage} totalUsers={users.length} paginate={paginate} currentPage={currentPage} lazyLoad={ lazyLoad }/>
        : <Loading />
    }

  </div>);
}

export default BigData;
