import React, { useState } from 'react'
import { useEffect } from 'react';
import { addUser, isUsernameUnique, trySignIn } from './query.js';
import cookieCutter from 'cookie-cutter';

const LogInModule = () => {

    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");
    const [isCreate, setIsCreate] = useState(false);

    const submitSignin = () => {
        if(!username) { setError("Username not found. Try again, or create an account."); return; }
        if(!password) { setError("Password incorrect."); return; }
        trySignIn({username: username, password: password}).then((result) => {
            if(result === "username") { setError("Username not found. Try again, or create an account."); return; }
            else if(result === "password") { setError("Password incorrect."); return; }
            else {
                // we have successfully logged in; redirect to the home page.
                console.log("signed in")
                window.location.reload();
            }
        });
    }
    const submitCreate = () => {
        if(!username) { setError("Username not found. Try again, or create an account."); return; }
        if(!password) { setError("Password incorrect."); return; }
        trySignIn({username: username, password: password}).then((result) => {
            if(result === "username") { setError("Username not found. Try again, or create an account."); return; }
            else if(result === "password") { setError("Password incorrect."); return; }
            else {
                // we have successfully logged in; redirect to the home page.
                console.log("signed in")
                window.location.reload();
            }
        });
    }

    return (
        <div class="page">
            <div class="authpage">
                <div class="logo"><div class="image"/></div>
                {!isCreate && 
                    <div name="signin" class="chip">
                        <h2 class="header">Sign In</h2>
                        <br/>
                        {error && <div class="message error">{error}</div>}
                        <input name="username" type="text" placeholder="username" onChange={(evt) => setUsername(evt.target.value)}/>
                        <input name="password" type="password" placeholder="password" onChange={(evt) => setPassword(evt.target.value)}/>

                        <button onClick={() => submitSignin()}>sign in</button>
                        <button class="grayed" onClick={() => setIsCreate(true)}>create account</button>
                    </div>
                }
                {isCreate &&
                    <div name="signup" class="chip tall">
                        <h2 class="header">Create Account</h2>
                        <br/>
                        {error && <div class="message error">{error}</div>}
                        <input name="username" type="text" placeholder="username" onChange={(evt) => setUsername(evt.target.value)}/>
                        <input name="password" type="password" placeholder="password" onChange={(evt) => setPassword(evt.target.value)}/>
                        <input name="password" type="password" placeholder="confirm password" onChange={(evt) => setPassword(evt.target.value)}/>
                        <button onClick={() => submitCreate()}>create</button>
                        <button class="grayed" onClick={() => setIsCreate(false)}>switch to sign in</button>
                    </div>
                }
            </div>
        </div>
    )
}

const Authenticator = () => {

    return (
        <div>
            <LogInModule/>
        </div>
    )
}

export default Authenticator;