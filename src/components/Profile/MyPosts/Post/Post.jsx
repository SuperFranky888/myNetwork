import React from 'react';
import s from './Post.module.css';

// let a = 0;

// function h () {
//  ;
// }


const Post = (props) => {
  // a = +props.likesCount;
  // let y = document.querySelector('.haha');

  return (
    <div className={s.item}>
      <img src='https://www.meme-arsenal.com/memes/76c8a1ebf2c8070d7983a4f7eb5887c3.jpg' alt='' />
      {props.message}
      <div>
        <span  className = 'cli'>like</span>  <div className = 'haha'>{+props.likesCount}</div>
    
      </div>
    </div>

  )
}

export default Post;