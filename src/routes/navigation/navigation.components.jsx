import { Fragment } from 'react';
import { Link, Outlet } from 'react-router-dom';
import StatsHeader from '../../components/stats/stats.components';
import Logo from '../../assets/coingecko-logo.webp';
import Candy from '../../assets/candy_notification_web-a560ca6de9e0daaeb05eb6fe3dae7062684f63249dbf371568e7b062a3456e3e.webp';
// import {HiOutlineSearch} from 'react-icons/hi'

import './navigation.styles.scss';

const Navigation = () => {
  // const [searchField, setSearchField] =
  //   useState('');
  // const [monsters, setMonster] = useState([]);
  // const [filteredMonsters, setfilteredMonsters] =
  //   useState(monsters);

  // useEffect(() => {
  //   const newFilteredMonsters = monsters.filter(
  //     (monster) => {
  //       return monster.name
  //         .toLocaleLowerCase()
  //         .includes(searchField);
  //     }
  //   );

  //   setfilteredMonsters(newFilteredMonsters);
  // }, [monsters, searchField]); // this means run the useEffect whenever the monsters array changes or searchField changes.

  // const onSearchChange = (event) => {
  //   const searchFieldString =
  //     event.target.value.toLocaleLowerCase();

  //   setSearchField(searchFieldString);
  // };

  return (
    <Fragment>
      <StatsHeader />
      <div className="nav-container">
        <div className="left-part">
          <Link to="/">
            <div className="img">
              <img src={Logo} alt="logo" />
            </div>
          </Link>
          <Link to="/cryptocurrencies">
            Cryptocurrencies
          </Link>
          <Link to="/#">Exchange</Link>
          <Link to="/#">NFT</Link>
          <Link to="/#">Learn Crypto</Link>
          <Link to="/#">Products</Link>
        </div>
        <div className=" right-part">
          <Link to="/#">
            <img src={Candy} alt="candy-box" />
          </Link>
          <Link to="/#">Portfolio</Link>
          <Link to="/#">Login</Link>
          <Link to="/#">Sign Up</Link>

          <input
            placeholder="&#x1F50D; Search"
            type="search"
          />
        </div>
      </div>
      <Outlet />
    </Fragment>
  );
};

export default Navigation;
