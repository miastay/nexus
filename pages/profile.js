import React, { useState } from 'react'
import { useEffect } from 'react';

const ProfileSmall = ({data, switcher}) => {

    const switchPage = (page) => {
        switcher(page);
    }

    return (
      <div class="profile small">
          <button onClick={() => switchPage('profile')}>
            <img src={data.img}/>
            <div class="username">{data.user}</div>
          </button>
      </div>
    )
 }
  
export default ProfileSmall;