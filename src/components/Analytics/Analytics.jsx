import React from 'react'
import styles from './Analystics.module.css'
import Card from '../Card/Card'
import {RiGitRepositoryFill} from 'react-icons/ri'
import {VscRepo} from 'react-icons/vsc'
import {SlUserFollow, SlUserFollowing} from 'react-icons/sl'
import CommitsGraph from '../Graph/CommitsGraph'
import PieChart from '../PieChart/PieChart'
import Repos from '../Repos/Repos'
import githubApi from '@/fetchApi/githubApi'

const Analytics = () => {
  const data = githubApi();
    // console.log(data)
  return (
    <div className={styles.main}>
      <div className={styles.cardRow}>
        <Card title='Public Repos' value={data?.public_repos} component={<RiGitRepositoryFill/>} color='#DDEFE0'/>
        <Card title='Public Gists' value={data?.public_gists} component={<VscRepo/>} color='#F4ECDD'/>
        <Card title='Followers' value={data?.followers} component={<SlUserFollow/>} color='#EFDADA'/>
        <Card title='Following' value={data?.following} component={<SlUserFollowing/>} color='#DEE0EF'/>
      </div>
      <div className={styles.graph}>
        <CommitsGraph />
      </div>
      <div className={styles.pieChart}>
        <PieChart/>
        <Repos />
      </div>
    </div>
  )
}

export default Analytics
