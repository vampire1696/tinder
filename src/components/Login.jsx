import React from 'react'
import useAuth from '../useAuth'
import { getAuth, signInWithPopup, GoogleAuthProvider } from "firebase/auth";





const Login = () => {
    const {user,SetUser} = useAuth();
    console.log(user);
    function handleSignIn(){
        const provider = new GoogleAuthProvider();
        const auth = getAuth();
        signInWithPopup(auth, provider)
            .then((result) => {
    // This gives you a Google Access Token. You can use it to access the Google API.
        const credential = GoogleAuthProvider.credentialFromResult(result);
        const token = credential.accessToken;
    // The signed-in user info.
        const user2 = result.user;
        SetUser(user2);
    // IdP data available using getAdditionalUserInfo(result)
    // ...
    }).catch((error) => {
    // Handle Errors here.
        const errorCode = error.code;
        const errorMessage = error.message;
    // The email of the user's account used.
        const email = error.customData.email;
    // The AuthCredential type that was used.
        const credential = GoogleAuthProvider.credentialFromError(error);
    // ...
  });
    }
  return (
    <div style={{width:"100vw",justifyContent:"center",display:"flex"}} >
        <div style={{display:"flex",width:"60vw",justifyContent:"center",backgroundImage:`url("https://tinder.com/static/tinder.png")`,height:"100vh",backgroundSize:"cover",backgroundRepeat:"no-repeat"}}>
        <div style={{alignContent:"center"}}>
        <button style={{bottom:"0",padding:"15px",textAlign:"center",backgroundColor:"black",color:"white",borderRadius:"25px",marginTop:"552px"}} onClick={handleSignIn}>Sign in With Google</button>
        </div>
        </div>
    </div>
  )
}

export default Login