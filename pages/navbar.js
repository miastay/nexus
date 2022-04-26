import React, { useState } from 'react'
import { useEffect } from 'react';
import Logo from './logo';

const Navpage = ({page, switcher}) => {
    
    const switchPage = (page) => {
        switcher(page);
    }
    return (
        <button class="btn" onClick={() => switchPage(page)}>{page}</button>
    )
}

const Navbar = ({switcher}) => {

    return (
      <div class="nav">
        <div class="left">
            <Logo />
        </div>
        <div class="mid">
            <Navpage page="home" switcher={switcher}/>
            <Navpage page="eheh" switcher={switcher}/>
        </div>
        <div class="right">
            this is the right div
        </div>
      </div>
    )
 }
  
export default Navbar;