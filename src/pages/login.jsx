import React from 'react'
import { useSession, signIn, signOut } from 'next-auth/react'
const login = () => {
    const {data: session} = useSession();
  if(session){
    return (
        <div>
            Welcome {session.user.name} 
            <button onClick={()=>signOut()}>Sign Out</button>
        </div>
      )
  }else{
    return (
        <div>
            <p>You are not signed in</p>
            <button onClick={()=>signIn()}>Sign In</button>
        </div>
      )
  }
}

export default login
