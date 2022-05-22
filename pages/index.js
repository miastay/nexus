import React, { useState } from 'react'
import Navbar from './navbar';
import Home from './home';
import Poster from './poster';
import Leaderboard from './leaderboard';
import Posts from './posts';
import { useEffect } from 'react';
import { isSignedIn } from '../components/query.js';
import Authenticator from '../components/authenticator';

function Index() {
  const [page, setPage] = useState('home');
  const [user, setUser] = useState(null);

  useEffect(() => {
      if(!user) { setUser(isSignedIn()) };
  });

  const changePage = (page) => {
      setPage(page);
      window.location.hash = page;
  }

return (
    <div class="main">
        <Navbar switcher={switchPage} profile={profile} currentPage={page}/>
        <div class="page">
            {(page === 'home') && <Home layout={'abba'}/>}
            {(page === 'post') && <Poster />}
            {(page === 'leaderboard') && <Leaderboard />}
        </div>
    </div>
)
 }
  
export default Index