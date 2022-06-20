import React from "react";
import styles from './Post.module.css';

const Post = (props) => {
  return (
    <div className={styles.item}>
      <img alt="img" src={'./img/ava.jpg'} />
      {props.message}
      <div>
        <span>Like   </span> 
        {props.likeCounter}
      </div>
    </div>
  );
}
export default Post;