import {instanceCoinGecko} from '../config/axios';

export const getCoinsMarket = (holdings = [], currency = 'usd', page = 1) => {
  const ids = holdings.map(item => item.id).join(',');

  const API_COIN_GECKO = `/coins/markets?vs_currency=${currency}&order=market_cap_desc&per_page=10&page=${page}&sparkline=true&price_change_percentage=7d&ids=${ids}`;

  return API_COIN_GECKO;
};

export const getRates = () => '/rates/';
