import React from 'react';
import s from './MyPosts.module.css';
import Post from './Post/Post';


const MyPosts = (props) => {




  return (
    <div className={s.postsBlock}>
      My posts
      <div>
        <div><textarea></textarea></div>
        <div><button>Add post</button></div>
      </div>
      <div className={s.posts}> 
      {props.posts.map(el => <Post message={el.message} likesCount={el.likesCount} />)}
      </div>
    </div>
  )
}

export default MyPosts;