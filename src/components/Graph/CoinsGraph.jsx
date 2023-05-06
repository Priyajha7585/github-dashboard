import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Chart from 'chart.js/auto';
import { Line } from 'react-chartjs-2';
import styles from './CoinsGraph.module.css'

function CoinsGraph() {
  const [commitData, setCommitData] = useState({
    thisYearCommits: [],
    lastYearCommits: [],
    labels: [],
  });

  useEffect(() => {
    const username = 'priyajha7585';
    const token = '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';
    const headers = {
      Authorization: `token ${token}`,
    };

    // Get this year's commits
    axios
      .get(`https://api.github.com/search/commits?q=author:${username}+committer-date:${new Date().getFullYear()}-01-01..${new Date().getFullYear()}-12-31`, { headers })
      .then(response => {
        const commitCountByWeek = response.data.items.reduce((acc, commit) => {
          const week = new Date(commit.commit.committer.date).toLocaleDateString('en-US', { year: 'numeric', month: 'short', day: 'numeric' });
          acc[week] = acc[week] ? acc[week] + 1 : 1;
          return acc;
        }, {});
        const thisYearCommits = Object.values(commitCountByWeek);
        setCommitData(prevState => ({ ...prevState, thisYearCommits }));
      })
      .catch(error => console.error(error));

    // Get last year's commits
    axios
      .get(`https://api.github.com/search/commits?q=author:${username}+committer-date:${new Date().getFullYear() - 1}-01-01..${new Date().getFullYear() - 1}-12-31`, { headers })
      .then(response => {
        const commitCountByWeek = response.data.items.reduce((acc, commit) => {
          const week = new Date(commit.commit.committer.date).toLocaleDateString('en-US', { year: 'numeric', month: 'short', day: 'numeric' });
          acc[week] = acc[week] ? acc[week] + 1 : 1;
          return acc;
        }, {});
        const lastYearCommits = Object.values(commitCountByWeek);
        setCommitData(prevState => ({ ...prevState, lastYearCommits }));
      })
      .catch(error => console.error(error));
  }, []);

  return (
    <div className={styles.main}>
      <h2>Comparison of Commits This Year vs. Last Year</h2>
      <Line className={styles.graph}
        data={{
          labels: Object.keys(commitData.thisYearCommits),
          datasets: [
            {
              label: 'This Year',
              data: commitData.thisYearCommits,
              borderColor: 'rgb(255, 99, 132)',
              backgroundColor: 'rgba(255, 99, 132, 0.2)',
              fill: false,
              tension:0.4
            },
            {
              label: 'Last Year',
              data: commitData.lastYearCommits,
              borderColor: 'rgb(54, 162, 235)',
              backgroundColor: 'rgba(54, 162, 235, 0.2)',
              fill: false,
              tension:0.4
            },
          ],
        }}
      />
    </div>
  );
}

export default CoinsGraph;
