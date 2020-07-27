import React from 'react';
import Class from './style/loading_page.module.scss';

const Loading = (props) => {


  return (

    <div className={Class.loading__animation_container}>
      <div className={Class.loading__animation_wrapper}>
        <span className={Class.loading__animation_text}>Loading... Please stand by</span>
      <div></div><div></div><div></div><div></div>
      </div>
    </div>

  );
}

export default Loading;
