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
      <MyPosts message="get the fuck out of here"/>
    </div>
  );
}

export default Profile;