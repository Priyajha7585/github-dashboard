import React, { useState, useEffect } from 'react';

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
  }, [username]);

  return (
    <div style={{color:'black'}}>
      <h2>Latest Repositories</h2>
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Created Date</th>
            <th>Last Modified</th>
            <th>Number of Commits</th>
          </tr>
        </thead>
        <tbody>
          {latestRepos.map(repo => (
            <tr key={repo.id}>
              <td>{repo.name}</td>
              <td>{repo.created_at}</td>
              <td>{repo.updated_at}</td>
              <td>{repo.commits_url}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Repos;
