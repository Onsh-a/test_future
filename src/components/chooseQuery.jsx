import React from 'react';
import { NavLink} from 'react-router-dom';
import Class from './style/chooseQuery.module.scss';

const ChooseQuery = (props) => {

  return (
    <div className={Class.container}>
      <div className={Class.nav_wrapper}>
        <NavLink to="/big_data">Big Data</NavLink>
        <NavLink to="/small_data">Small Data</NavLink>
      </div>
    </div>

  );
}

export default ChooseQuery;
