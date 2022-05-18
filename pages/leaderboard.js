import React, { useState } from 'react'
import { useEffect } from 'react';
import SearchModule from './search';
import Container from './container';
import Module from './module';
import { useRouter } from 'next/router';
import { getPosts } from './query.js';


const Leaderboard = () => {

    const getUsers = () => {//temp
        let users =
        [{"firstname":"john", "lastname": "judah", "interactions": {"comments": [1, 2, 3, 4, 5], "posts": [1, 2, 3, 4, 5]}, "password": "temp", "session": "hassed_session"}, 
        {"firstname":"larry", "lastname": "byrd", "interactions": {"comments": [1, 2, 3, 4, 5], "posts": [1, 2, 3, 4, 0]}, "password": "temp", "session": "hassed_session"},
        {"firstname":"alistar", "lastname": "smith", "interactions": {"comments": [1, 0, 3, 4, 5], "posts": [0, 2, 3, 4, 5]}, "password": "temp", "session": "hassed_session"},
        {"firstname":"samantha", "lastname": "green", "interactions": {"comments": [1, 2, 0, 0, 5], "posts": [1, 2, 0, 4, 5]}, "password": "temp", "session": "hassed_session"},
        {"firstname":"emma", "lastname": "wingdale", "interactions": {"comments": [1, 2, 3, 4, 0], "posts": [1, 0, 3, 4, 5]}, "password": "temp", "session": "hassed_session"},
        {"firstname":"joe", "lastname": "bruin", "interactions": {"comments": [0, 0, 0, 0, 0], "posts": [1, 2, 3, 0, 5]}, "password": "temp", "session": "hassed_session"}];
        //method to get users
        return(users);
    }
    const usersToRatings = (users) =>{//temp
        for(let user in users){
            let ratings = []
        }
        return(users)
    }
    const generateAverageRatings = (users) => {
        for(let index in users){
            const user = users[index];
            let sum = 0;
            let count = 0;
            const posts = user["interactions"]["posts"]
            for (let index in posts){
                sum += posts[index];
                count += 1;
            }
            if(count == 0){
                users[index]["rating"] = "N/A";
            }
            else{
                users[index]["rating"] = sum/count;
            }
        }
        for(let index in users){
            const user = users[index];
            let sum = 0;
            let count = 0;
            const comments = user["interactions"]["comments"]
            for (let index in comments){
                sum += comments[index];
                count += 1;
            }
            if(count == 0){
                users[index]["commentrating"] = "N/A";
            }
            else{
                users[index]["commentrating"] = sum/count;
            }
        }
        
    }
    const capitalize = (str) =>{
        return(str[0].toUpperCase() + str.substring(1));
    }

    const generateRatingBar = (rating) =>{
        let percentage = (rating/5)*100;
        console.log(percentage)
        return(
        <div class="ratingbarwrapper">
        <div class="innerratingbar" style={"width:" + percentage +"%"+ ";"}></div>
        </div>
        )
    }

    const renderList = (users, type) => {
        const listItems = []
        if(type){
            for(let index in users){
                listItems.push(
                <li>
                    <div class="leaderentry">
                        <img src="https://e7.pngegg.com/pngimages/439/554/png-clipart-ghost-emoji-emoticon-ghost-smiley-emoji-sticker-fictional-character-thumbnail.png" />
                        <div className='description'>
                            <p class="name">{capitalize(users[index]["firstname"])} {capitalize(users[index]["lastname"])}</p>
                            <div class="ratingbar">
                                <p>0</p>
                                {generateRatingBar(users[index]["rating"])}
                                <p>5</p>
                            </div>
                            <p class="ratingvalue">Post Rating: {users[index]["rating"]}/5</p>
                        </div>
                    </div>
                </li>
                );
            }
        }
        else{
            for(let index in users){
                listItems.push(
                <li>
                    <div class="leaderentry">
                        <img src="https://e7.pngegg.com/pngimages/439/554/png-clipart-ghost-emoji-emoticon-ghost-smiley-emoji-sticker-fictional-character-thumbnail.png" />
                        <div className='description'>
                            <p class="name">{capitalize(users[index]["firstname"])} {capitalize(users[index]["lastname"])}</p>
                            <div class="ratingbar">
                                <p>0</p>
                                {generateRatingBar(users[index]["commentrating"])}
                                <p>5</p>
                            </div>
                            <p class="ratingvalue">Comment Rating: {users[index]["commentrating"]}/5</p>
                        </div>
                    </div>
                </li>
                );
            }
        }
        
        return(listItems);
    }

    const sortUsers = (users) => {
        return(users)
    }

    const usersRatingFormat = usersToRatings(getUsers());
    generateAverageRatings(usersRatingFormat);//adds the ratings to each user

    const postSortedUsers = usersRatingFormat.sort((a, b) => b["rating"] - a["rating"]);

    const postLeaderboard = 
    <div class='leaderboard'>
        <h1 class='leadertitle'>Post Leaderboard</h1>
        <ul>
            {renderList(postSortedUsers, true)}
        </ul>
    </div>

    const commentSortedUsers = usersRatingFormat.sort((a, b) => b["commentrating"] - a["commentrating"]);   

    const commentLeaderboard = 
    <div class='leaderboard'>
        <h1 class='leadertitle'>Comment Leaderboard</h1>
        <ul>
            {renderList(commentSortedUsers, false)}
        </ul>
    </div>

    return (
      <div class={'leaderwrapper'}>
          <div className='leaderpagetitle'> Leaderboards</div>
          {postLeaderboard}
          {commentLeaderboard}
      </div>
    )
 }
  
export default Leaderboard;