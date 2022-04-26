import React, { useState } from 'react'
import { useEffect } from 'react';

const Logo = () => {

    //this is horrible react practice, but it looks very nice
    const animScroll = () => {
        let id = setInterval(function() {
            document.scrollingElement.scrollTop *= 0.91;
            if(document.scrollingElement.scrollTop <= 0) { clearInterval(id); }
        }, 10);
    }


    return (
        <div class="logo" onClick={() => animScroll()}>
            <div class="image"/>
        </div>
    )
}

export default Logo;