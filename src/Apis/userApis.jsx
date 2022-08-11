import axios from 'axios';
import { useQuery } from '@tanstack/react-query';


const GetCoins = async () => {
  const { data } = await axios.get(
    'https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1&sparkline=false&price_change_percentage=1h%2C24h'
  );

  // console.log(data);
  return data;
};

const SearchFunc = () => {

  // const { data } = useQuery(['coins'], () =>
  //   GetCoins()
  // );

  return (
    <input
      type="search"
      // onChange={onSearchChange}
    />
  );
};

export default SearchFunc;
