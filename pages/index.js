import React, { useState } from 'react'
import Navbar from './navbar';
import Home from './home';

function Index() {
  const [page, setPage] = useState('home')

  const switchPage = (page) => {
      setPage(page);
  }

return (
    <div class="main">
        <Navbar switcher={switchPage}/>
        <div class="page">
            {(page === 'home') && <Home layout={'abba'}/>}
            {(page === 'eheh') && <div>eheh</div>}
        </div>
    </div>
)
 }
  
export default Index