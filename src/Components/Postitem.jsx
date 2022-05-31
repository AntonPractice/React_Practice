import React from'react';


const Postitem = function(props){
   // console.log(props);
    return( 
<div className='post'>
        <div className='post__content'>
          <strong>{props.post.id}.{props.post.title}</strong>
          <div>
          {props.post.desc}
          </div>
        </div>
        <div className='post__buttons'>
          <button>Удалить</button>
        </div>
      </div>
      );
};
export default Postitem;