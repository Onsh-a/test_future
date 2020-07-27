import React from 'react';
import Class from './style/tableAdjustments.module.scss';


const TableSearch = (props) => {

  return (
    <div className={Class.adjustments_search}>
      <input className={Class.adjustments_search_input} type="text"/>
      <div className={Class.adjustments_search_btn}
        onClick={ props.search }>Search</div>
    </div>);
}

export default TableSearch;
