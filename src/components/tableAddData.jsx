import React from 'react';
import Class from './style/tableAdjustments.module.scss';


const TableAddData = (props) => {


  return (
    <div className={Class.adjustments_btn_container}>
      <div onClick={ props.open } className={Class.adjustments_btn}>Добавить</div>
    </div>);
}

export default TableAddData;
