import React from 'react';
import Class from './style/tableAdjustments.module.scss';
import TableAddData from './tableAddData'
import TableSearch from './tableSearch'


const TableUpperAdjustments = (props) => {


  return (
    <div className={Class.adjustments}>
      <TableAddData open={ props.open } />
      <TableSearch users={props.users} search={ props.search }/>
    </div>);
}

export default TableUpperAdjustments;
