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
        <div>
            <div class="nav">
                <div class="left" onClick={() => { setPage('home') }}>
                    <Logo />
                </div>
                <div class="mid">
                    <Navpage page="home" setPage={setPage} currentPage={currentPage}/>
                    <Navpage page="post" setPage={setPage} currentPage={currentPage}/>
                    <Navpage page="leaderboard" setPage={setPage} currentPage={currentPage}/>
                
                </div>
                <div class="right">
                    <Navpage page="Profile" setPage={setPage} currentPage={currentPage}/>
                </div>
            </div>
        </div>
    )
 }
  
export default Navbar;