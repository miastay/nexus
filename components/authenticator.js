import React, { useState } from 'react'
import { useEffect } from 'react';
import { addUser, isUsernameUnique, trySignIn, tryCreate } from './query.js';
import cookieCutter from 'cookie-cutter';

const LogInModule = () => {

    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [passwordconf, setPasswordConf] = useState("");
    const [firstname, setFirstname] = useState("");
    const [lastname, setLastname] = useState("");
    const [error, setError] = useState("");
    const [confirmation, setConfirmation] = useState("");
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
                window.location.hash = "home";
                window.location.reload();
            }
        });
    }
    const submitCreate = () => {
        if(!username) { setError("Please enter a valid username."); return; }
        if(!password || password.length < 8) { setError("Please enter a valid password (min. 8 characters)"); return; }
        if(password !== passwordconf) { setError("Passwords do not match."); return; }
        if(!firstname) { setError("Please enter your first name."); return; }
        if(!lastname) { setError("Please enter your last name."); return; }
        tryCreate({username: username, password: password, firstname: firstname, lastname: lastname}).then((result) => {
            if(result === "username") { setError("Username already exists."); return; }
            else {
                // we have successfully created an account; log in and redirect to the home page.
                console.log("created account");
                setConfirmation("Account successfully created.")
                setIsCreate(false);
            }
        });
    }

    return (
        <div class="page">
            <div class="authpage">
                <div class="logo"><div class="image"/></div>
                    <div name={isCreate ? "signup" : "signin"} class={isCreate ? "chip tall" : "chip"}>
                        <h2 class="header">{isCreate ? "Create Account" : "Sign In"}</h2>
                        <br/>
                        {error && <div class="message error">{error}</div>}
                        <input name="username" type="text" placeholder="username" onChange={(evt) => setUsername(evt.target.value)}/>
                        <input name="password" type="password" placeholder="password" onChange={(evt) => setPassword(evt.target.value)}/>
                        { isCreate && 
                        <>
                            <input name="password" type="password" placeholder="confirm password" onChange={(evt) => setPasswordConf(evt.target.value)}/>
                            <input name="firstname" type="text" placeholder="first name" onChange={(evt) => setFirstname(evt.target.value)}/>
                            <input name="lastname" type="text" placeholder="last name" onChange={(evt) => setLastname(evt.target.value)}/>
                            <button onClick={() => submitCreate()}>create</button>
                            <button class="grayed" onClick={() => { setIsCreate(false); setError("")}}>switch to sign in</button>
                        </> }
                        { !isCreate && 
                        <>
                            <button onClick={() => submitSignin()}>sign in</button>
                            <button class="grayed" onClick={() => { setIsCreate(true); setError("")}}>create account</button>
                        </> }
                    </div>
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