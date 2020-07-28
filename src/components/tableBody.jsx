import React, {useState} from 'react';
import Class from './style/tableBody.module.scss';
import TableRow from './tableRow';
import Sort from './../service/sort';
import TableUpperAdjustments from './tableUpperAdustments';
import SelectedUser from './selectedUser'
import Pagination from './pagination'

const TableBody = (props) => {

  let [users, setUsers] = useState();
  let [sortingType, setType] = useState({id: 'none', name: 'none', surname: 'none'})

  let handleClick = (e) => {
    //sorting
    let type = e.target.getAttribute('value');
    let sorted_data;
    let active = sortingType;
    if (sortingType[type] === 'ascending') {
      sorted_data = Sort(props.users, type, true);
    } else {
      sorted_data = Sort(props.users, type, false);
    }

    setUsers({users: sorted_data});

    for (let key in active) { //reassign default values to unnecessary elements
      key !== type
        ? active[key] = 'none'
        : active[key] = active[key];
    }
    active[type] === 'ascending'
      ? active[type] = 'descending'
      : active[type] = 'ascending';
  }

  let rows = props.users.map((item, i) => {
    return <TableRow key={i} users={item} moreInfo={props.moreInfo}/>
  })

  return (<div className={Class.table_container}>

    <TableUpperAdjustments users={props.users} search={props.search} open={props.open}/>

    <table className={Class.table}>
      <thead>
        <tr>
          <th value='id' className={sortingType.id === 'none'
              ? Class.table__head_cell
              : sortingType.id === 'ascending'
                ? Class.active
                : Class.active_reverse} onClick={handleClick}>ID</th>

          <th value='name' className={sortingType.name === 'none'
              ? Class.table__head_cell
              : sortingType.name === 'ascending'
                ? Class.active
                : Class.active_reverse} onClick={handleClick}>Имя</th>

          <th value='surname' className={sortingType.surname === 'none'
              ? Class.table__head_cell
              : sortingType.surname === 'ascending'
                ? Class.active
                : Class.active_reverse} onClick={handleClick}>Фамилия</th>

          <th className={Class.table__head_cell}>Email</th>
          <th className={Class.table__head_cell}>Телефон</th>
        </tr>
      </thead>
      <tbody className={Class.table_body}>

        {rows}

      </tbody>
    </table>

    <Pagination usersPerPage={props.usersPerPage} totalUsers={props.totalUsers} paginate={props.paginate} currentPage={props.users} currentPageNumb={props.currentPage} lazyLoad = {props.lazyLoad}/>

    <SelectedUser selected={props.moreInfoData}/>

  </div>);
}

export default TableBody;
