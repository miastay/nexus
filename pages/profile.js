import React, { useState } from 'react'
import { useEffect } from 'react';

const ProfileSmall = ({user, setPage}) => {

    return (
      <div class="profile small">
          <button onClick={() => setPage('profile')}>
            <img src={'ghost.png'}/>
            <div class="username">{user.username}</div>
          </button>
      </div>
    )
 }
  
export default ProfileSmall;