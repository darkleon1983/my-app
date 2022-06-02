import React from "react";

const Profile = () => {
  return (
    <div className='content'>
      <img src={require('../../profilePhoto.png')} />
      <div>
        ava + description
      </div>
      <div>
        My posts
        <div>
          New post
        </div>
        <div>
          <div>Post 1</div>
          <div>Post 2</div>
        </div>
      </div>
    </div>
  );
}

export default Profile;