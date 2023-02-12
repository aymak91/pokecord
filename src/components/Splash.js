import React from 'react'
import Footer from './Footer'
import Header from './Header'
import Hero from './Hero'
import {useNavigate} from 'react-router-dom';
import {auth, provider} from "../firebase";
import {useAuthState} from "react-firebase-hooks/auth";


function Splash() {

  const [user] = useAuthState(auth)
  const navigate = useNavigate();

  const signIn = (e) => {
    e.preventDefault();

    auth.signInWithPopup(provider)
        .then(() => navigate("/Bug"))
        .catch((error) => alert(error.message));
}

  return (
    <div>
      <Header signIn={signIn} user={user} />
      <Hero signIn={signIn} user={user}/>
      <div className="absolute left-0 bottom-0 right-0 invisible md:visible md:h-10vh">
        <Footer />
      </div>
    </div>
  )
}

export default Splash
