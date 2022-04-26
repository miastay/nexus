import React, { useState } from 'react'
import Navbar from './navbar';
import Home from './home';

function Index() {
  const [page, setPage] = useState('home');
  const [profile, setProfile] = useState({'user':'person', 'img': 'https://e7.pngegg.com/pngimages/439/554/png-clipart-ghost-emoji-emoticon-ghost-smiley-emoji-sticker-fictional-character-thumbnail.png'});

  const switchPage = (page) => {
      setPage(page);
  }

return (
    <div class="main">
        <Navbar switcher={switchPage} profile={profile} currentPage={page}/>
        <div class="page">
            {(page === 'home') && <Home layout={'abba'}/>}
            {(page === 'eheh') && <div>eheh</div>}
        </div>
    </div>
)
 }
  
export default Index