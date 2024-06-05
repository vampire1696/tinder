
import { doc, serverTimestamp, setDoc } from "firebase/firestore";
import { useEffect } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import './App.css';
import Chats from "./components/Chats";
import ChatScreen from "./components/ChatScreen";
import Header from './components/Header';
import Login from "./components/Login";
import TinderCards from "./components/TinderCards";
import database from "./firebase";
import useAuth from "./useAuth";

function App() {
  const {user,logout} = useAuth();
  console.log("user o trang chu: ",user)
  
  useEffect(()=>{ //set doc user len firebase
    if(user)
    setDoc(doc(database,'users',user.uid),{ //set du lieu tu database
      id:user.uid,
      displayName:user.displayName,
      photoURL:user.photoURL,
      timestamp: serverTimestamp()
    }).then(()=>{
      console.log("Sucessful update users to users database firebase")
    }).catch(error=>console.log(error))

  },[user])
  return (
    <div >
      
      <BrowserRouter>
       {/* khong duoc de Header co chua Link o ben ngoai Router  */}
       {user ? (<Routes>
        <Route path="/" element={<div><Header /> <TinderCards/><button onClick={logout}>Sign Out</button></div>}/>
        <Route path="/chat/:person" element={<div><Header backButton="/chat"/><ChatScreen/></div>}/>
        <Route path="/chat" element={<div><Header backButton="/"/><Chats/> </div>}/>
      </Routes>) : (
        <Login/>
      )}
      
    </BrowserRouter>
    </div>
  );
}

export default App;
