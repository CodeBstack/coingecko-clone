import './search-box.styles.scss';
import { HiOutlineSearch } from 'react-icons/hi';
import { FaTimes } from 'react-icons/fa';
import SearchCategory from '../searchCategory/searchCategory.components';
import { useState } from 'react';

import axios from 'axios';
import TrendingSearchCategory from '../trending-search/trending-search.component';

const fetchSearchData = async (query) => {
  const { data } = await axios.get(
    `   https://api.coingecko.com/api/v3/search?query=${query}`
  );
  return data;
};
const fetchTrendingSearchData = async () => {
  const { data } = await axios.get(
    'https://api.coingecko.com/api/v3/search/trending'
  );
  return data;
};

const SearchBox = () => {
  //  state to toggle search modal display
  const [isDisp, setDisp] = useState(false);

  // state of the searched data
  const [searchData, setSearchData] = useState(
    []
  );

  // state of the trending search data
  const [
    trendingSearchData,
    setTrendingSearchData,
  ] = useState([]);

  // state for the string to add or remove the trending search bar
  const [
    searchFieldString,
    setSearchFieldString,
  ] = useState('');

  // to handle the showing the search modal and also to set the state of trending search data
  const onHandleClick = async () => {
    setDisp(!isDisp);

    //   awaiting the trending search data
    const data = await fetchTrendingSearchData();
    setTrendingSearchData(data.coins);
  };

  // to get the search input
  const onSearchChange = async (e) => {
    const searchField =
      e.target.value.toLocaleLowerCase();

    //   done so we can remove or add the trending search bar
    setSearchFieldString(searchField);

    //   to await the search data itself
    const data = await fetchSearchData(
      searchField
    );
    setSearchData(data);
  };

  // destructuring the searchData object
  const { coins, exchanges, categories, nfts } =
    searchData;

  return (
    <div className="search-box-container">
      <input
        className="first-search-box"
        type="text"
        placeholder="&#x1F50D; Search"
        onClick={onHandleClick}
      />

      <div
        className={
          isDisp
            ? ' search-box-modal'
            : 'no-display'
        }>
            
        <div className="search-input">
          <span>
            <HiOutlineSearch />
          </span>

          <input
            type="text"
            placeholder="Search token name or exchange"
            className="second-search-box"
            onChange={onSearchChange}
            autoFocus
          />
          <span onClick={onHandleClick}>
            <FaTimes />
          </span>
        </div>

        {searchFieldString !== '' &&
        searchData !== undefined ? null : (
          <TrendingSearchCategory
            heading={'Trending Search 🔥 '}
            data={trendingSearchData}
          />
        )}

        {searchFieldString === '' ? null : (
          <>
            <SearchCategory
              heading={'Cryptocurrencies'}
              data={coins}
            />{' '}
            <SearchCategory
              heading={'Exchanges'}
              data={exchanges}
            />{' '}
            <SearchCategory
              heading={'Categories'}
              data={categories}
            />
            <SearchCategory
              heading={'NFT'}
              data={nfts}
            />{' '}
          </>
        )}
      </div>
    </div>
  );
};

export default SearchBox;
