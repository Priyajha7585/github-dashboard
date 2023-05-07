import React, { useState, useEffect } from 'react';
import Chart from 'chart.js/auto';
import { Line } from 'react-chartjs-2';
import styles from './CommitsGraph.module.css';
import githubCommitData from '@/fetchApi/githubCommitData';

function CommitsGraph() {
  // const commitData = githubCommitData()
  const [commitData, setCommitData] = useState({
    thisYearCommits: [],
    lastYearCommits: [],
    labels: [],
  });

  useEffect(() => {
    // Generate random commit data for last year
    const lastYearCommits = [];
    for (let i = 1; i <= 12; i++) {
      const commits = Math.floor(Math.random() * 151) + 50;
      lastYearCommits.push(commits);
    }
    setCommitData(prevState => ({ ...prevState, lastYearCommits }));

    // Generate random commit data for this year
    const thisYearCommits = [];
    for (let i = 1; i <= 5; i++) {
      const commits = Math.floor(Math.random() * 151) + 50;
      thisYearCommits.push(commits);
    }
    setCommitData(prevState => ({ ...prevState, thisYearCommits }));
  }, []);

  return (
    <div className={styles.main}>
      <h2 className={styles.title}>Comparison of Commits This Year vs. Last Year</h2>
      <Line
        className={styles.graph}
        data={{
          labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
          datasets: [
            {
              label: 'This Year',
              data: commitData.thisYearCommits,
              borderColor: 'rgb(255, 99, 132)',
              backgroundColor: 'rgba(255, 99, 132, 0.2)',
              fill: false,
              tension: 0.4,
            },
            {
              label: 'Last Year',
              data: commitData.lastYearCommits,
              borderColor: 'rgb(54, 162, 235)',
              backgroundColor: 'rgba(54, 162, 235, 0.2)',
              fill: false,
              tension: 0.4,
            },
          ],
        }}
      />
    </div>
  );
}

export default CommitsGraph;
