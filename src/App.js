import MarkdownEditor from '@uiw/react-markdown-editor';
import { useState } from 'react'
import { initializeApp } from 'firebase/app';
import { getFirestore, collection, getDocs, addDoc, setDoc, doc } from "firebase/firestore"

const firebaseConfig = {
  apiKey: process.env.REACT_APP_APIKEY,
  authDomain: process.env.REACT_APP_APPDOMAIN,
  projectId: process.env.REACT_APP_PROJECTID,
  storageBucket: process.env.REACT_APP_STORAGEBUCKET,
  messagingSenderId: process.env.REACT_APP_MESSAGINGSENDERID,
  appId: process.env.REACT_APP_APPID
};
const app = initializeApp(firebaseConfig);
const db = getFirestore()

function App() {
  const [markdown, setMarkdown] = useState("")

  const addUser = async () => {
    try {
      const docRef = await setDoc(doc(db, "md", `${new Date()}`), {
        markdown
      });
    } catch (e) {
      console.error("Error adding document: ", e);
    }
  }

  const readUser = async () => {
    const querySnapshot = await getDocs(collection(db, "md"))
    querySnapshot.forEach((doc) => {
      console.log(doc.data());
    });
  }

  return (
    <>
      <button onClick={addUser}>add user</button>
      <button onClick={readUser}>read user</button>
      <MarkdownEditor
        height={1000}
        visible
        value="# This is a H1  \n## This is a H2  \n###### This is a H6"
        onChange={(editor, data, value) => setMarkdown(value)}
      />
    </>
  );
}

export default App;
