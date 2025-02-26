import React, { useState, useEffect } from 'react';
import {useAppStore} from '../Store/store';
// import { useNavigate } from 'react-router-dom';
// create a store folder for globalstate
// create routes for react router
//

export function Login() {
 
    const [localemail, setlocalEmail] = useState<string>("");
    const [password, setPassword] = useState<string>("");
  
    const setEmail = useAppStore((state)=>state.setUserEmail);

    // const navigate = useNavigate(); // For redirecting after login

    const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    
   
    console.log("Email:", localemail);//making sure my stuff is working
    

    setEmail(localemail);
    localStorage.setItem('userEmail',localemail);  //not sure if it matters to set local storage since we have global state set

    // navigate('/user-profile');
   
  };

 

  return (
    <div className='login-container'>
      <h2>Login</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label >Email</label>
          <input
            value={localemail}
            onChange={(e) => setlocalEmail(e.target.value)}
            required
          />
        </div>

        <div>
          <label>Password</label>
          <input

            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>

        <button type="submit">Login</button>
      </form>
    </div>
  );
}