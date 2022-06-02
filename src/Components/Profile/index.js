import React from "react";
import styles from './Profile.module.css';

const Profile = () => {
  return (
    <div className={styles.content}>
      <img src={require('../../profilePhoto.png')} />
      <div className={styles.item}>
        ava + description
      </div>
      <div className={styles.item}>
        My posts
        <div className={styles.item}>
          New post
        </div>
        <div>
          <div className={styles.item}>Post 1</div>
          <div className={styles.item}>Post 2</div>
        </div>
      </div>
    </div>
  );
}

export default Profile;