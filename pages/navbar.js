import React, { useState } from 'react'
import { useEffect } from 'react';
import Logo from './logo';
import ProfileSmall from './profile';

const Navpage = ({page, switcher, currentPage}) => {
    
    const switchPage = (page) => {
        switcher(page);
    }
    return (
        <button class={`btn ${currentPage == page ? 'on' : ''}`} onClick={() => switchPage(page)}>{page}</button>
    )
}

const Navbar = ({switcher, profile, currentPage}) => {

    return (
      <div class="nav">
        <div class="left">
            <Logo switcher={switcher}/>
        </div>
        <div class="mid">
            <Navpage page="home" switcher={switcher} currentPage={currentPage}/>
            <Navpage page="eheh" switcher={switcher} currentPage={currentPage}/>
            <Navpage page="page" switcher={switcher} currentPage={currentPage}/>
            <Navpage page="last one" switcher={switcher} currentPage={currentPage}/>
        </div>
        <div class="right">
            <ProfileSmall data={profile} switcher={switcher}/>
        </div>
      </div>
    )
 }
  
export default Navbar;