import './coins.style.scss';
import CoinCategories from '../coin-categories/coin-categories.components';
import Load from '../onLoad/onLoad.component';
import { useQuery } from '@tanstack/react-query';
import { useState } from 'react';
import axios from 'axios';
// import { GetCoins } from '../../Apis/userApis';

const fetchCoinData = async (page = 0) => {
  //   const res = await fetch(
  //       `https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=${page}&sparkline=false&price_change_percentage=1h%2C24h%2C7d`
  //     // `https://api.coingecko.com/api/v3/coins//markets?vs_currency=usd&order=market_cap_desc&per_page=50&page=${page}&sparkline=false&price_change_percentage=1h%2C24h`
  //     );

  const { data } = await axios.get(
    `https://api.coingecko.com/api/v3/coins//markets?vs_currency=usd&order=market_cap_desc&per_page=250&page=${page}&sparkline=false&price_change_percentage=1h%2C24h%2C7d`
  );

  return data;

  //   return res.json();
};

const Coins = ({ fdvDisp }) => {
  const [page, setPage] = useState(0);
  const {
    isLoading,
    isError,
    error,
    data,
    isFetching,
    isPreviousData,
  } = useQuery(
    ['coins', page],
    () => fetchCoinData(page),
    {
      keepPreviousData: true,
    }
  );
//   console.log(data);

  return (
    <div className="coin-container">
      <div className="coins-heading">
        <div className="count">
          <p>#</p>
        </div>
        <div className="coin">
          <h3>Coin</h3>
        </div>
        <div className="price">
          <h3>Price</h3>
        </div>
        <div className="hour">
          <h3>1h</h3>
        </div>
        <div className="day">
          <h3>24h</h3>
        </div>
        <div className="week">
          <h3>7d</h3>
        </div>
        <div className="volume">
          <h3>24h Volume</h3>
        </div>
        <div className="mktcap">
          <h3>Mkt Cap</h3>
        </div>
        <div
          className={fdvDisp ? 'fdv' : 'fdv-none'}
        >
          <h3>FDV</h3>
        </div>
        <div className="last-week">
          <h3>Last 7 Days</h3>
        </div>
      </div>

      <div className="coin-lists">
        {isLoading ? (
          <div className="loader-container">
            <Load />
          </div>
        ) : isError ? (
          <div>Error: {error.message}</div>
        ) : (
          data.map((coin, ind) => {
            // console.log(ind+1,coin);
            return (
              <CoinCategories
                key={coin.id}
                fdvDisplay={fdvDisp}
                coin={coin}
                index={ind}
              />
            );
          })
        )}
        <span>Current Page: {page + 1}</span>
        <button
          onClick={() =>
            setPage((old) => Math.max(old - 1, 0))
          }
          disabled={page === 0}
        >
          Previous Page
        </button>{' '}
        <button
          onClick={() => {
            if (!isPreviousData && data.hasMore) {
              setPage((old) => old + 1);
            }
          }}
          // Disable the Next Page button until we know a next page is available
          disabled={
            isPreviousData || !data?.hasMore
          }
        >
          Next Page
        </button>
        {isFetching ? (
          <span> Loading...</span>
        ) : null}{' '}
      </div>
    </div>
  );
};
export default Coins;
