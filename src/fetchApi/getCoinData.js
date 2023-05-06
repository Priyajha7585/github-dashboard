async function getCoinData() {
    const response = await fetch('https://coinranking1.p.rapidapi.com/coins', {
      method: 'GET',
      headers: {
        'X-RapidAPI-Key': '36797bd3bemshdca7885bc3ef41bp146813jsn1c853a2436b8',
        'X-RapidAPI-Host': 'coinranking1.p.rapidapi.com',
      }
    });
    const { data } = await response.json();
  
    const names = [];
    const prices = [];
    const volumes = [];
  
    data.coins.slice(0,10).forEach((coin) => {
      names.push(coin.name);
      prices.push(coin.price);
    //   volumes.push(coin['24hVolume']);
      volumes.push(coin.marketCap)
    });
  
    return { names, prices, volumes };
  };
export default getCoinData