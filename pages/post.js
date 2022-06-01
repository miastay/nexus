import React, { useState } from 'react'
import { useEffect } from 'react';
import { isSignedIn } from '../components/query';

const Post = ({id, title, author, time, body, scores, vote}) => {

    const [upvoted, setUpvoted] = useState(false)
    const [downvoted, setDownvoted] = useState(false)
    const [upvotes, setUpvotes] = useState(scores['up'].length)
    const [downvotes, setDownvotes] = useState(scores['down'].length)

    if(scores.up.includes(isSignedIn().username)) {
        setUpvoted(true)
    }
    if(scores.down.includes(isSignedIn().username)) {
        setDownvoted(true)
    }

    const doVote = (delta) => {
        if(delta == 1 && !upvoted) { setUpvotes(upvotes + 1) }
        if(delta == -1 && !downvoted) { setDownvotes(downvotes + 1) }
        delta == 1 ? setUpvoted(!upvoted) : setDownvoted(!downvoted)
        console.log(`${upvotes}u, ${downvotes}d`)
        vote(id, delta)
    }

    return (
        <div>
            <div id={"post_section"}>
                <h1>{title}</h1>
                <span class={"infostr"}>by {author} on {new Date(time.seconds * 1000).toString()}</span>
                <br /><br />
                <span class={"body"}>{body}</span>
                <br /><br />
                <span class={"votes"}>
                    <div>{`Score: ${upvotes - downvotes}`}</div>
                    <button class={`vote${upvoted ? ' upvoted' : ''}`} onClick={() => {if(!downvoted) {doVote(1)}}}>&uarr;</button>
                    <button class={`vote${downvoted ? ' downvoted' : ''}`}onClick={() => {if(!upvoted) {doVote(-1)}}}>&darr;</button>
                    <div class={'infostr'}>{`(${upvotes} upvoted, ${downvotes} downvoted)`}</div>
                </span>
            </div>
            <div id={"comment_section"}>
            </div>
        </div>
    )
}

export default Post;