import React, { useState } from 'react'
import { useEffect } from 'react';

const Post = ({id, title, author, time, body, scores, vote}) => {

    return (
        <div>
            <div id={"post_section"}>
                <h1>{title}</h1>
                <span class={"infostr"}>by {author} on {new Date(time.seconds * 1000).toString()}</span>
                <br /><br />
                <span class={"body"}>{body}</span>
                <br /><br />
                <span>
                    <div>{`Score: ${scores['up'].length - scores['down'].length}`}</div><button onClick={() => vote(1)}>&uarr;</button><button onClick={() => vote(-1)}>&darr;</button>
                    <div class={'infostr'}>{`(${scores['up'].length} upvoted, ${scores['down'].length} downvoted)`}</div>
                </span>
            </div>
            <div id={"comment_section"}>
            </div>
        </div>
    )
}

export default Post;