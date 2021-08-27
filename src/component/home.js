import React from 'react';
import { Redirect } from 'react-router-dom';

const Home=()=>{
    return(
        <div>
            {localStorage.getItem("login")=="x"?<div>Welcome to home Page</div>:<Redirect to="/registration" />}
            <button
            onClick={()=>{
                localStorage.setItem("login","y");
                window.location.href="/registration"
            }}
            >Log out</button>
            

            
        </div>
    )
}
export default Home;