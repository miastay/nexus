import React, { useState } from 'react'
import { useEffect } from 'react';

const Post = ({id, title, author, time, body, scores}) => {

    return (
        <div>
            <div id={"post_section"}>
                <h1>{title}</h1>
                <span class={"infostr"}>by {author} on {new Date(time.seconds * 1000).toString()}</span>
                <br /><br />
                <span class={"body"}>{body}</span>
                <br /><br />
                <span>
                    <div>{`Score: ${scores[0] - scores[1]}`}</div>
                    <div class={'infostr'}>{`(${scores[0]} upvoted, ${scores[1]} downvoted)`}</div>
                </span>
            </div>
            <div id={"comment_section"}>
            </div>
        </div>
    )
}

export default Post;