const API_URL = 'https://min-api.cryptocompare.com/data/';


export async function requestAPI (method, querry) {
  const res = await fetch(`${API_URL}${method}${querry}`);
  const data = await res.json();
  return data;
}

export async function getPriceNow (currencies = ['BTC', 'ETH', 'XRP']) {
  const method = 'pricemulti';
  const querry = `?fsyms=${currencies.join(',')}&tsyms=USD`;
  return await requestAPI(method, querry);
  //https://min-api.cryptocompare.com/data/pricemulti?fsyms=BTC,ETH&tsyms=USD
}

export async function getPricePeriod (currency = 'BTC', period = 'day') {
  const method = 'v2/histo';
  const unit = period !== 'day' ? 'day' : 'hour';
  let countUnits = 23;

  switch (period) {
  case 'week':
    countUnits = 6;
    break;
  case 'month':
    countUnits = 29;
    break;
  }
  const querry = `${unit}?fsym=${currency}&tsym=USD&limit=${countUnits}`;
  const { Data } = (await requestAPI(method, querry)).Data;
  return Data;
  //https://min-api.cryptocompare.com/data/v2/histoday?fsym=BTC&tsym=USD&limit=10
  //https://min-api.cryptocompare.com/data/v2/histohour?fsym=BTC&tsym=USD&limit=10
}
