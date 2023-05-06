import React from 'react'
import { useSession, signOut, getSession } from 'next-auth/react'
import SideNav from '@/components/SideNav';
import styles from './Dashboard.module.css'
import Header from '@/components/Header/Header';

function Dashboard() {
  const {data:session, status} = useSession({required:true});
  if(status==='authenticated')
  {
    return(
      <div className={styles.dashboard}>
        {/* <p>Welcome {session.user.name}! Dashboard Page</p>
      <button onClick={()=>signOut()}>Sign Out</button> */}
      <SideNav />
      <Header/>
      </div>
    )
  }
    return (
      <div>
        You are not signed in 
      </div>
    )
}

export default Dashboard

export const getServerSideProps = async(context) => {
  const session = await getSession(context);
  if(!session){
    return{
      redirect:{
        destination:'/auth/login'
      }
    }
  }
  return {
    props:{session},
  }
}