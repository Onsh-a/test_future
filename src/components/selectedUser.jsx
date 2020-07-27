import React from 'react';
import Class from './style/selectedUser.module.scss';


const SelectedUser = (props) => {

  if (props.selected.length === 0) {
    return null;
  }


  return (
        <div className={Class.selected_user}>
          <span className={Class.selected_user_name}><strong>Выбран пользователь:</strong> {props.selected.firstName} {props.selected.lastName}</span>
          <span className={Class.selected_user_description_title}><strong>Описание:</strong></span>
          <div className={Class.selected_user_description_text}>{props.selected.description}</div>
          <span className={Class.selected_user_adress}><strong>Адрес проживания: </strong>{props.selected.address.streetAddress}</span>
          <span className={Class.selected_user_city}><strong>Город: </strong>{props.selected.address.city}</span>
          <span className={Class.selected_user_state}><strong>Штат: </strong>{props.selected.address.state}</span>
          <span className={Class.selected_user_zip}><strong>Индекс: </strong>{props.selected.address.zip}</span>
        </div>);

  }


export default SelectedUser;
