import React from 'react';
import Class from './style/addRow.module.scss';

const AddRow = (props) => {

  if (props.addData === false) {
    return null;
  }

  return (

    <div className={Class.addRow}>
      <div onClick= { props.close } className={Class.addRow_close}>&#x2715;</div>
      <span className={Class.addRow_title}>Добавьте пользователя</span>
      <input onChange={ props.validate } id='digitInput' className={Class.addRow_input} type="number" placeholder='id'/>
      <input onChange={ props.validate } className={Class.addRow_input} type="text" placeholder='Имя'/>
      <input onChange={ props.validate } className={Class.addRow_input} type="text" placeholder='Фамилия'/>
      <input onChange={ props.validate } className={Class.addRow_input} type="text" placeholder='Эл. почта'/>
      <input onChange={ props.validate } className={Class.addRow_input} type="text" placeholder='Телефон'/>
      <div onClick={ props.add } className={props.isValid === true ? Class.addRow_btn : Class.addRow_btn_disabled}>Добавить</div>
    </div>

  );
}

export default AddRow;
