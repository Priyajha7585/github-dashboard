import React from 'react'
import { useSession, signOut, getSession } from 'next-auth/react'

function Dashboard() {
  const {data:session, status} = useSession({required:true});
  if(status==='authenticated')
  {
    return(
      <div><p>Welcome {session.user.name}! Dashboard Page</p>
      <button onClick={()=>signOut()}>Sign Out</button>
      </div>
    )
  }
  else
  {
    return (
      <div>
        You are not signed in
      </div>
    )
  }
}

export default Dashboard

export const getServerSideProps = async(context) => {
  const session = await getSession(context);
  if(!session){
    return{
      redirect:{
        destination:'/login'
      }
    }
  }
  return {
    props:{session},
  }
}