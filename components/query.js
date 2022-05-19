import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { collection, doc, setDoc, addDoc, getDoc, getDocs, Timestamp } from "firebase/firestore"; 
import { getFirestore } from "firebase/firestore";
import { DBCONF } from "./config";
import { createHash } from 'crypto';

let app, db;

try {
    let firebaseConfig = DBCONF();
    app = initializeApp(firebaseConfig);
    db = getFirestore(app);
} catch(err) {
    console.log(err)
    console.log('///////////////')
    console.log("You most likely don't have the database config file downloaded. Ask Ryan for a copy! rtaylor7@g.ucla.edu")
}

//////////////////
/*  Post Logic  */

export async function addPost({title, author, body, result}) {
    console.log('adding post')
    const docRef = await addDoc(collection(db, "posts"), 
        {
            title: title,
            author: author,
            body: body,
            date: Timestamp.fromDate(new Date()),
            score: {'up': [], 'down': []}
        }
    ).then((data) => {result(data)});
}

export async function getPost({id}) {
    console.log("get one");
    try {
        const docRef = doc(db, 'posts', id);
        const docSnap = await getDoc(docRef);
        if (docSnap.exists()) {
            return docSnap.data();
        } else {
            console.log(`Error retrieving post ${id}`);
        }
    } catch(err) {
        console.log(err);
    }
}

export async function getPosts() {
    console.log("get all");
    const querySnapshot = await getDocs(collection(db, "posts"));
    let docs = [];
    querySnapshot.forEach((doc) => {
        docs.push({'id': doc.id, 'data': doc.data()});
    });
    return docs;
}

//////////////////
/*  User Logic  */

let sessions = {};

function generateSha256Hex(input) {
    const hash = createHash('sha256');
    hash.update(input);
    return hash.digest('hex');
}

export function getSessions() {
    return sessions;
}

export async function addUser({username, firstname, lastname, password, result}) {
    console.log('adding user')

    // create password hash to store securely:

    const passhash = generateSha256Hex(password);

    // now that our hash is ready, POST the user
    // and return the object:
    
    const docRef = await addDoc(collection(db, "users", username), 
    {
        firstname: firstname,
        lastname: lastname,
        password: passhash,
        interactions: {
            'posts': [],
            'comments': []
        }
    }
    ).then((data) => {result(data)}); 
    
}

export async function getUser({username}) {
    console.log("get one user");
    try {
        const docRef = doc(db, 'users', username);
        const docSnap = await getDoc(docRef);
        if (docSnap.exists()) {
            return docSnap.data();
        } else {
            console.log(`Error retrieving user ${username}`);
        }
    } catch(err) {
        console.log(err);
    }
}

export async function getUsers() {
    console.log("get all users");
    const querySnapshot = await getDocs(collection(db, "users"));
    let docs = [];
    querySnapshot.forEach((doc) => {
        docs.push({'id': doc.id, 'data': doc.data()});
    });
    return docs;
}

export async function isUsernameUnique({username}) {
    console.log("get all users");
    const querySnapshot = await getDocs(collection(db, "users"));
    querySnapshot.forEach((doc) => {
        if(doc.id === username) {
            return false;
        }
    });
    return true;
}


/**
 * trySignIn
 * 
 * attempts to authenticate a user, given a username string
 * and a password string
 * 
 * @param {username: string, password: string} param0 
 * @returns "username" or "password" if one was incorrect; else, the user object
 */

export async function trySignIn({username, password}) {
    console.log("get one user");
    console.log(generateSha256Hex(password));
    try {
        const docRef = doc(db, 'users', username);
        const docSnap = await getDoc(docRef);
        if (docSnap.exists()) {
            
            // our username exists, now check if their password matches:

            if(generateSha256Hex(password) != docSnap.data().password) {
                return "password";
            }

            // the password matches -- set the environment user to this user
            // and return a good value

            const data = docSnap.data();
            const user = {
                username: username,
                firstname: data.firstname,
                lastname: data.lastname,
                interactions: data.interactions,
                session: generateSha256Hex(data.password)
            };
            sessions[username] = user;
            return user;

        } else {
            return "username";
        }
    } catch(err) {
        console.log(err);
    }
}