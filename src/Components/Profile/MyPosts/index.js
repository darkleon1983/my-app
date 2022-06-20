import React from "react";
import styles from './MyPosts.module.css';
import Post from './Post/index.js';

const MyPosts = (props) => {
  return (
    <div className={styles.item}>
      {props.message}
      <div className={styles.item}>
        <textarea></textarea>
        <button>Add post</button>
        <button>Remove post</button>
      </div>
      <div>
        <Post message="Hi, how are you?" likeCounter="15"/>
        <Post message="It's my first post" likeCounter="20"/>
        <Post message="I'll find new job in IT!" likeCounter="4325"/>
      </div>
    </div>
  );
}

export default MyPosts;