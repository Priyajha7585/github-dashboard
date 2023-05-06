import { useState, useEffect } from 'react';

const githubApi = () => {
  const [data, setData] = useState(null);
  const baseUrl = 'https://api.github.com/users';
//   const cryptoApiHeaders = {
//     'X-RapidAPI-Key': '36797bd3bemshdca7885bc3ef41bp146813jsn1c853a2436b8',
//     'X-RapidAPI-Host': 'coinranking1.p.rapidapi.com',
//   };

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(`${baseUrl}/priyajha7585`, {
        //   headers: cryptoApiHeaders,
        });
        const responseData = await response.json();
        setData(responseData);
      } catch (error) {
        console.error(error);
      }
    };
    fetchData();
  }, []);

  return data;
};

export default githubApi;
