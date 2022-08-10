// import {
//   createContext,
//   useState,
// } from 'react';

// import { useQuery } from '@tanstack/react-query';

// export const DataContext = createContext({
//   dataMap: [],
// });

// const fetchData = async () => {
//   const res = await fetch(
//     'https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1&sparkline=false&price_change_percentage=1h%2C24h'
//   );
//   return res.json();
// };


// export const DataProvider = ({
//   children,
// }) => {
//   const { data, status } = useQuery(
//     'coins',
//     fetchData
//   );

//   console.log(data);
//   const [dataMap, setDataMap] = useState([]);

// //   useEffect(() => {}, []);

//   const value = { dataMap };

//   return (
//     <DataContext.Provider value={value}>
//       {children}
//     </DataContext.Provider>
//   );
// };
