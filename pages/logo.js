import React, { useState } from 'react'
import { useEffect } from 'react';

const Logo = ({switcher}) => {

    //this is horrible react practice, but it looks very nice
    const animScroll = () => {
        let id = setInterval(function() {
            document.scrollingElement.scrollTop *= 0.91;
            if(document.scrollingElement.scrollTop <= 0) { clearInterval(id); }
        }, 10);
    }

    const goHome = () => {
        switcher('home');
    }


    return (
        <div class="logo" onClick={() => goHome()}>
            <div class="image"/>
        </div>
    )
}

export default Logo;