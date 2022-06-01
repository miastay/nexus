import React, { useState } from 'react'
import Navbar from './navbar';
import Home from './home';
import Poster from './poster';
import Leaderboard from './leaderboard';
import Posts from './posts';
import Leaderboard from './leaderboard';
import Practice from './practice';
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
        {user && 
            <>
                <Navbar user={user} setPage={changePage} currentPage={page}/>
                <div class="page">
                    {(page === 'home') && <Home setPage={changePage} layout={'abba'}/>}
                    {(page === 'post') && <Poster user={user} setPage={changePage} />}
                    {(page.startsWith('posts')) && <Posts id={window.location.hash.substring(window.location.hash.indexOf("id=")+3)} user={user} setPage={changePage}/>}
                    {(page === 'leaderboard') && <Leaderboard />}
                    {(page==='Profile') && <Practice user={user}/>}
               </div>
            </>
        }
        {!user && 
            <Authenticator />
        }
    </div>
)
 }
  
export default Index