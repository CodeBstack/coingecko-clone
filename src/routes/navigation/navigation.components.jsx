import { Fragment } from 'react';
import { Link, Outlet } from 'react-router-dom';
import StatsHeader from '../../components/stats/stats.components';
import Logo from '../../assets/coingecko-logo.webp';
import Candy from '../../assets/candy_notification_web-a560ca6de9e0daaeb05eb6fe3dae7062684f63249dbf371568e7b062a3456e3e.webp';
// import {HiOutlineSearch} from 'react-icons/hi'

import './navigation.styles.scss';

const Navigation = () => {
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
          <Link to="/exchange">Exchange</Link>
          <Link to="/nft">NFT</Link>
          <Link to="/learn">Learn Crypto</Link>
          <Link to="/products">Products</Link>
        </div>
        <div className=" right-part">
          <Link to="/rewards">
            <img src={Candy} alt="candy-box" />
          </Link>
          <Link to="/portfolio">Portfolio</Link>
          <Link to="/login">Login</Link>
          <Link to="/sign-up">Sign Up</Link>
          <input
            placeholder='&#x1F50D; Search'
            type="search"
          />
        </div>
      </div>
      <Outlet />
    </Fragment>
  );
};

export default Navigation;
