import React from "react";
import MyPosts from "./MyPosts";
import styles from './Profile.module.css';

const Profile = (props) => {
  return (
    <div>
      <img src={'./img/profilePhoto.png'} />
      <div className={styles.item}>
        ava + description
      </div>
      <MyPosts message="fileName"/>
    </div>
  );
}

export default Profile;