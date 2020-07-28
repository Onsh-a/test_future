import React from 'react';
import { NavLink} from 'react-router-dom';
import Class from './style/chooseQuery.module.scss';

const ChooseQuery = (props) => {

  return (
    <div className={Class.container}>
      <div className={Class.nav_wrapper}>
        <NavLink to="/big_data">Большая база</NavLink>
        <NavLink to="/small_data">Маленькая база</NavLink>
      </div>
    </div>

  );
}

export default ChooseQuery;
