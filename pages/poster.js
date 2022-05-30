import React, { useState } from 'react'
import { useEffect } from 'react';
import SearchModule from './search';
import Container from './container';
import Module from './module';
import { useRouter } from 'next/router';
import { getPosts, addPost } from '../components/query.js';

const PostForm = ({submit, update}) => {

    const [title, setTitle] = useState("");
    const [body, setBody] = useState("");

    const handleSub = () => {
        submit({title: title, body: body})
    }

    return (
        <div class="postform">
            <div class="title"><input type="text" placeholder="title" onInput={(evt) => {setTitle(evt.target.value); update({title: title, body: body})}}></input></div>
            <div class="body"><textarea placeholder="body" maxlength="300" onInput={(evt) => {setBody(evt.target.value); update({title: title, body: body})}}></textarea></div>
            <input class="submit" type="button" value="Submit Post" onClick={() => handleSub()}></input>
        </div>
    )
}

const Poster = ({user}) => {

    const [posted, setPosted] = useState(-1);
    const [error, setError] = useState("");
    const router = useRouter();

    const validate = ({title, body}) => {
        return (title.length > 0 && body.length > 0);
    }

    const submitPost = ({title, body}) => {
        if(title.length < 1) {
            setError("Title text is required.")
            return;
        }
        if(body.length < 1) {
            setError("Body text is required.")
            return;
        }
        addPost({title: title, author: user.username, body: body, result: function(data) {console.log(data); setPosted(data.id)}});
    }

    const updateValues = ({title, body}) => {
        if(validate({title, body})) {
            setError("");
            return;
        }
    }

    const postForm = (<PostForm submit={submitPost} update={updateValues}/>);

    return (
        <div class={'grid poster'}>
            <div class={'container border'}>
                <h2>Create a Post</h2><br/><br/>
                {posted != -1 && <div class="message confirmation">Post submitted successfully. <a href={`/#posts?id=${posted}`}>{"Go to the post >>"}</a></div>}
                {error && <div class="message error">{error}</div>}
                {postForm}
            </div>
        </div>
    )
 }
  
export default Poster;