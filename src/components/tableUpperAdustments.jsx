import React from 'react';
import { NavLink } from 'react-router-dom';
import Class from './style/tableAdjustments.module.scss';
import TableAddData from './tableAddData'
import TableSearch from './tableSearch'


const TableUpperAdjustments = (props) => {


  return (
    <div className={Class.adjustments}>
      <TableAddData open={ props.open } />
      <NavLink className={Class.adjustments_btn} to="/">Выбрать базу</NavLink>
      <TableSearch users={props.users} search={ props.search }/>
    </div>);
}

export default TableUpperAdjustments;
