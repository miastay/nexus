import React, { useState } from 'react'
import Navbar from './navbar';
import Home from './home';
import Post from './post';
import { useRouter } from 'next/router';

function Posts() {

    const router = useRouter();

    //put the correct post on the page according to the path name
    const [postID, setPostID] = useState(router.asPath.substring(router.asPath.indexOf('id=')+3));
    const [profile, setProfile] = useState({'user':'person', 'img': 'https://e7.pngegg.com/pngimages/439/554/png-clipart-ghost-emoji-emoticon-ghost-smiley-emoji-sticker-fictional-character-thumbnail.png'});

    const switchPage = (page) => {
        router.push(`/#${page}`);
    }

    return (
        <div class="main">
            <Navbar switcher={switchPage} profile={profile} currentPage={'posts'}/>
            <div class="page" onClick={() => console.log(postID)}>
                <Post id={postID} title={'posttitle' + postID} author={'name'} category={'category'} text={'body text lorem ipsum'} />
            </div>
        </div>
    )
 }
  
export default Posts