import React from 'react';
import Class from './style/tableBody.module.scss';

const TableRow = (props) => {

  return (
    <tr onClick={props.moreInfo} className={Class.table_row}>
      <td className={Class.table_data}>{props.users.id}</td>
      <td className={Class.table_data}>{props.users.firstName}</td>
      <td className={Class.table_data}>{props.users.lastName}</td>
      <td className={Class.table_data}>{props.users.email}</td>
      <td className={Class.table_data}>{props.users.phone}</td>
    </tr>
  );
}

export default TableRow;
