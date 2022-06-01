import React, { useState } from 'react'
import { useEffect } from 'react';
import SearchModule from './search';
import Container from './container';
import Module from './module';
import { useRouter } from 'next/router';
import { getPosts, getUser, getUsers, isSignedIn, trySignIn, signOut } from '../components/query.js';


const Practice = ({user}) => {
    const [ret, setReturn] = useState(null);

    const getAllPosts = async () => {//temp
        return(getPosts());
    }
   

    const renderList = (posts,body) => {
        const listItems = []
  

            for(let index in posts){
                listItems.push(
                <li>
                    <div class="postentry">
                        <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/1/18/Five-pointed_star.svg/1200px-Five-pointed_star.svg.png" />
                        <div className='description'>
                            <p class="name">Title: {posts[index]}</p>
                            <p class="ratingvalue">{body[index]}</p>
                        </div>
                    </div>
                </li>
                );
            }
        return(listItems);
    }
    const filterPosts=(posts)=>{
	for (let index in posts){
		
	}
    }
    const generate = () => { 
	let numPosts=0;
	let netVotes=0;
        if(ret != null){
            return;
        }
        getAllPosts().then((res)=>{
            const posts = [];
	    const bodies=[];
	    console.log('MAN');
	    console.log(res);
            for(let index in res){
		if(res[index].data.author==user.username){
                posts.push(res[index].data.title);
		bodies.push(res[index].data.body);
		numPosts++;
		if(res[index].data.score.up!=0){
			netVotes+=res[index].data.score.up;
			
		}
		if(res[index].data.score.down!=0){
			netVotes-=res[index].data.score.down;
		}
		}
            }
            console.log(posts);
        
	    console.log(netVotes);
            const postLeaderboard = 
            <div class='postboard'>
                <h1 class='posttitle'></h1>
                <ul>
                    {renderList(posts, bodies)}
                </ul>
            </div>
    
    	let retVal = 
            <div class={'postwrapper'}>
	<div class={'grid top'}>
   <div>
     <h1>Profile Picture</h1>
     <button onClick={()=> window.location.hash = 'Profile'}> <img src={'ghost.png'} />
       <div class="username">{user.username}</div>
     </button>
   </div>
   <div>
     <center><h1>About Me</h1></center>
     <div class={'container border'}> Username: {user.username} <br></br> Name: {user.firstname} {user.lastname} <br></br> Number of Posts: {numPosts}<br></br> Net Post Votes: {netVotes}
	<ul>
                </ul>
     </div>
   </div>
 </div>

                <div className='postpagetitle'> My Posts</div>
                {postLeaderboard}
            </div>
 
            setReturn(retVal);
        })
    }
    generate();
    return(ret);
 }
  
export default Practice;