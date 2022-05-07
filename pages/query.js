import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { collection, doc, setDoc, addDoc, getDoc, getDocs, Timestamp } from "firebase/firestore"; 
import { getFirestore } from "firebase/firestore";
import { DBCONF } from "./config";

let app, db;

try {
    let firebaseConfig = DBCONF();
    app = initializeApp(firebaseConfig);
    db = getFirestore(app);
} catch(err) {
    console.log(err)
}

export async function addPost({title, author, body}) {
    console.log('adding post')
    const docRef = await addDoc(collection(db, "posts"), 
        {
            title: title,
            author: author,
            body: body,
            date: Timestamp.fromDate(new Date()),
            score: [0, 0]
        }
    );
}

export async function getPost({id}) {
    const docRef = doc(db, 'posts', id);
    const docSnap = await getDoc(docRef);
    if (docSnap.exists()) {
        return docSnap.data();
    } else {
        console.log(`Error retrieving post ${id}`);
    }
}

export async function getPosts() {
    const querySnapshot = await getDocs(collection(db, "posts"));
    let docs = [];
    querySnapshot.forEach((doc) => {
        docs.push({'id': doc.id, 'data': doc.data()});
    });
    return docs;
}

