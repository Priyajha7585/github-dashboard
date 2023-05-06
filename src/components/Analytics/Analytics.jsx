import React, { useEffect, useState } from 'react'
import styles from './Analystics.module.css'
import Card from '../Card/Card'
import {BsCurrencyBitcoin, BsCurrencyExchange} from 'react-icons/bs'
import {TbChartArrows} from 'react-icons/tb'
import {MdStackedBarChart} from 'react-icons/md'
import cryptoApi from '@/fetchApi/cryptoApi'
import CoinsGraph from '../Graph/CoinsGraph'
import PieChart from '../PieChart/PieChart'
import Repos from '../Repos/Repos'
import githubApi from '@/fetchApi/githubApi'

const Analytics = () => {
  const data = githubApi();
    console.log(data)
  return (
    <div className={styles.main}>
      <div className={styles.cardRow}>
        <Card title='Public Repos' value={data?.public_repos} component={<BsCurrencyBitcoin/>} />
        <Card title='Public Gists' value={data?.public_gists} component={<BsCurrencyExchange/>} />
        <Card title='Followers' value={data?.followers} component={<TbChartArrows/>} />
        <Card title='Following' value={data?.following} component={<MdStackedBarChart/>} />
      </div>
      <div className={styles.graph}>
        <CoinsGraph />
      </div>
      <div className={styles.pieChart}>
        <PieChart/>
        <Repos />
      </div>
    </div>
  )
}

export default Analytics
