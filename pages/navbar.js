import React, { useState } from 'react'
import { useEffect } from 'react';
import Logo from './logo';
import ProfileSmall from './profile';

const Navpage = ({page, setPage, currentPage}) => {
    return (
        <button class={`btn ${currentPage == page ? 'on' : ''}`} onClick={() => { setPage(page) }}>{page}</button>
    )
}

const Navbar = ({user, setPage, currentPage}) => {

    return (
      <div class="nav">
        <div class="left">
            <Logo />
        </div>
        <div class="mid">
            <Navpage page="home" switcher={switcher} currentPage={currentPage}/>
            <Navpage page="post" switcher={switcher} currentPage={currentPage}/>
            <Navpage page="page" switcher={switcher} currentPage={currentPage}/>
            <Navpage page="leaderboard" switcher={switcher} currentPage={currentPage}/>
        </div>
        <div class="right">
            <ProfileSmall user={user} />
        </div>
      </div>
    )
 }
  
export default Navbar;