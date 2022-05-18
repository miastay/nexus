import React, { useState } from 'react'
import { useEffect } from 'react';
import SearchModule from './search';
import Container from './container';
import Module from './module';
import { useRouter } from 'next/router';
import { getPosts } from './query.js';


const Leaderboard = () => {

    const getUsers = () => {
        let users =
        [{"firstname":"john", "lastname": "judah", "interactions": {"comments": [1, 2, 3, 4, 5], "posts": [1, 2, 3, 4, 5]}, "password": "temp", "session": "hassed_session"}, 
        {"firstname":"larry", "lastname": "byrd", "interactions": {"comments": [1, 2, 3, 4, 5], "posts": [1, 2, 3, 4, 5]}, "password": "temp", "session": "hassed_session"},
        {"firstname":"larry", "lastname": "byrd", "interactions": {"comments": [1, 2, 3, 4, 5], "posts": [1, 2, 3, 4, 5]}, "password": "temp", "session": "hassed_session"},
        {"firstname":"larry", "lastname": "byrd", "interactions": {"comments": [1, 2, 3, 4, 5], "posts": [1, 2, 3, 4, 5]}, "password": "temp", "session": "hassed_session"},
        {"firstname":"larry", "lastname": "byrd", "interactions": {"comments": [1, 2, 3, 4, 5], "posts": [1, 2, 3, 4, 5]}, "password": "temp", "session": "hassed_session"},
        {"firstname":"larry", "lastname": "byrd", "interactions": {"comments": [1, 2, 3, 4, 5], "posts": [1, 2, 3, 4, 5]}, "password": "temp", "session": "hassed_session"}];
        //method to get users
        return(users);
        console.log("here")
    }

    const renderList = (users) => {
        const listItems = []
        for(let user in users){
            listItems.push(
            <li>
                <div class="leaderentry">
                    <img src="https://e7.pngegg.com/pngimages/439/554/png-clipart-ghost-emoji-emoticon-ghost-smiley-emoji-sticker-fictional-character-thumbnail.png" />
                    test
                </div>
            </li>
            );
        }
        return(listItems);
    }

    return (
      <div class={'leaderwrapper'}>
          <div class='leaderboard'>
            <h1 class='leadertitle'>Leaderboard</h1>
            <ul>
                {renderList(getUsers())}
            </ul>
          </div>
      </div>
    )
 }
  
export default Leaderboard;