import React, { useState, useEffect } from 'react';
import styles from './Repos.module.css'

const Repos = ({ username="Priyajha7585" }) => {
  const [latestRepos, setLatestRepos] = useState([]);

  useEffect(() => {
    // Set the API endpoint URL
    const apiUrl = `https://api.github.com/users/${username}/repos?sort=created&per_page=5`;

    // Call the API using the fetch function
    fetch(apiUrl)
      .then(response => response.json())
      .then(data => {
        setLatestRepos(data);
      })
      .catch(error => console.error(error));
  }, []);
  // console.log(latestRepos)
  return (
    <div className={styles.main} style={{color:'black'}}>
      <h2 className={styles.title}>Latest Repositories</h2>
      <div className={styles.point}>
        <div className={styles.colorDiv1}></div>
        <div className={styles.content}>
          <h4>Repository Name : {latestRepos[0]?.name}</h4>
          <p>Created At : {latestRepos[0]?.created_at}</p>
          <p>Updated At : {latestRepos[0]?.updated_at}</p>
        </div>
      </div>
      <div className={styles.point}>
        <div className={styles.colorDiv2}></div>
        <div className={styles.content}>
          <h4>Repository Name : {latestRepos[1]?.name}</h4>
          <p>Created At : {latestRepos[1]?.created_at}</p>
          <p>Updated At : {latestRepos[1]?.updated_at}</p>
        </div>
      </div>
      {/* <div className={styles.point}>
        <div className={styles.colorDiv1}></div>
        <div className={styles.content}>
          <h4>Repository Name : {latestRepos[2].name}</h4>
          <p>Created At : {latestRepos[2].created_at}</p>
          <p>Updated At : {latestRepos[2].updated_at}</p>
        </div>
      </div> */}
      {/* <div className={styles.point}>
        <div className={styles.colorDiv2}></div>
        <div className={styles.content}>
          <h4>Repository Name : {latestRepos[3].name}</h4>
          <p>Created At : {latestRepos[3].created_at}</p>
          <p>Updated At : {latestRepos[3].updated_at}</p>
        </div>
      </div>
      <div className={styles.point}>
        <div className={styles.colorDiv1}></div>
        <div className={styles.content}>
          <h4>Repository Name : {latestRepos[4].name}</h4>
          <p>Created At : {latestRepos[4].created_at}</p>
          <p>Updated At : {latestRepos[4].updated_at}</p>
        </div>
      </div> */}
    </div>
  );
};

export default Repos;
