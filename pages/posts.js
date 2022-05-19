import React, { useState, useEffect } from 'react'
import Navbar from './navbar';
import Home from './home';
import Post from './post';
import Container from './container';
import { useRouter } from 'next/router';
import { getPost, tryVote } from '../components/query';
import Authenticator from '../components/authenticator';

function Posts({id, user, setPage}) {

    const router = useRouter();

    //put the correct post on the page according to the path name
    const [postID, setPostID] = useState(id);
    const [profile, setProfile] = useState({'user':'person', 'img': 'https://e7.pngegg.com/pngimages/439/554/png-clipart-ghost-emoji-emoticon-ghost-smiley-emoji-sticker-fictional-character-thumbnail.png'});
    const [post, setPost] = useState(null);

    const generatePostFromID = (id) => {
        getPost({id: id}).then((data) => {
            try {
                setPost(<Post title={data.title} body={data.body} author={data.author} time={data.date} scores={data.score} id={id} vote={voteOnPost}/>);
            } catch(err) {
                console.log(`Error retrieving post '${id}'`)
                setPage(`/#home`);
            }
        });
    }

    const voteOnPost = (id, vote) => {
        tryVote({id: id, delta: vote}).then((data) => {
            console.log(data);
        })
    }

    return (
        <div class={'grid post'}>
            <Container type={'back-sidebar'} />
                <div class={'container border'}>
                    {post == null ? generatePostFromID(postID) : null}
                    {post}
                </div>
            <Container type={'comments'} />
        </div>
    )
 }
  
export default Posts