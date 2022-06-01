import React, { useState } from 'react'
import { useEffect } from 'react';
import SearchModule from './search';
import Container from './container';
import Module from './module';
import { useRouter } from 'next/router';
import { getPosts, getUser, getUsers, isSignedIn, trySignIn, signOut, getPost } from '../components/query.js';


const Leaderboard = () => {
    const [ret, setReturn] = useState(null);
    const getAllUsers = async () => {//temp
        return(getUsers());
    }
    const idsToRatings = async (users) =>{
        for(let index in users){
            let postrating = 0;
            let numPosts = 0;
            for(let post in users[index]['posts']){
                let p = await getPost({id:post});
                let score = p['score']['up'].length - p['score']['down'].length;
                numPosts += 1;
                postrating += score;
            }
            if(numPosts === 0){
                users[index]['postrating'] = "N/A";
            }
            else{
                users[index]['postrating'] = postrating;
            }
            users[index]['commentrating'] = Math.floor(Math.random() * 10) + 1;
        }
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
                            <p class="name">{users[index]["firstname"]} {users[index]["lastname"]}</p>
                            <p class="ratingvalue">Average Rating: {users[index]["postrating"] === "N/A"? "N/A" : users[index]["postrating"]}</p>
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
                            <p class="name">{users[index]["firstname"]} {users[index]["lastname"]}</p>
                            <p class="ratingvalue">Average Rating: {users[index]["commentrating"] === "N/A"? "N/A" :users[index]["commentrating"]}</p>
                        </div>
                    </div>
                </li>
                );
            }
        }
        
        return(listItems);
    }
    const generateReturns = () => { 

        if(ret != null){
            return;
        }
        getAllUsers().then((res)=>{
            const users = [];
            for(let index in res){
                users.push(res[index]['data']);
            }
            //users is a list of dictionaries of user data
            idsToRatings(users).then(() =>{
                console.log(users);
            
            //each user data now has a postrating and commentrating field
    
            const postSortedUsers = users.sort((a, b) => b["postrating"] - a["postrating"]);
    
            const postLeaderboard = 
            <div class='leaderboard'>
                <h1 class='leadertitle'>Post Leaderboard</h1>
                <ul>
                    {renderList(postSortedUsers, true)}
                </ul>
            </div>
    
            const commentSortedUsers = users.sort((a, b) => b["commentrating"] - a["commentrating"]);
    
            const commentLeaderboard = 
            <div class='leaderboard'>
                <h1 class='leadertitle'>Comment Leaderboard</h1>
                <ul>
                    {renderList(commentSortedUsers, false)}
                </ul>
            </div>
            let retVal = 
            <div class={'leaderwrapper'}>
                <div className='leaderpagetitle'> Leaderboards</div>
                {postLeaderboard}
                {commentLeaderboard}
            </div>
            setReturn(retVal);
            });
        })
    }
    generateReturns();
    return(ret);
 }
  
export default Leaderboard;