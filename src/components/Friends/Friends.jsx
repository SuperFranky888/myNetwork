import React from 'react';
import styles from './Friends.module.css';


const Friends = (props) => {
  console.log(props);
  return (
      <h2 className={styles.haha}>{props.name} <img src={props.imgLink} alt="" /></h2>
      
  )
}

export default Friends;