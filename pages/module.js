import React, { useState } from 'react'
import { useEffect } from 'react';
import { useRouter } from 'next/router';

const Module = ({title, body, author, date, score, id, query}) => {

    const router = useRouter();
    const [time, setTime] = useState(new Date(date.seconds * 1000).toString());
    const charLim = 150;

    const matches = () => {
        return title.indexOf(query) != -1;
    }

    return (
        <div>
            {matches() && 
                <div class={"module large"} onClick={() => router.push(`posts?id=${id}`)}>
                    <h3 class={"title"}>{title}</h3>
                    <span class={"body"}>{body.length > charLim ? body.substr(0, charLim) + '...' : body}</span>
                    <br />
                    <div class={"info"}>
                        <p class={"score"}>{score[0]}</p>
                        <p class={"fingerprint"}>by {author} on {time}</p>
                    </div>
                </div>
            }
        </div>
    )
}

export default Module;