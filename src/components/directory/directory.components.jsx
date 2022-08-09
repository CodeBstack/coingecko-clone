import { Link } from 'react-router-dom';

import './directory.styles.scss';
import { ImArrowUp2 } from 'react-icons/im';
import { BsStar } from 'react-icons/bs';
import ToggleSwitch from '../toggleSwitch/toggleSwitch.components';
import Coins from '../coins/coins.component';

const Directory = () => {
  return (
    <div className="directory-container">
      <div className="directory-nav">
        <Link to="/portfolio">
          {' '}
          <span className="star">
            <BsStar />
          </span>{' '}
          &nbsp; Portfolio
        </Link>
        <Link className="isActive" to="/coins">
          Coins
        </Link>
        <Link to="/new-cryptocurrencies">
          New Cryptocurrencies
        </Link>
        <Link to="/gainerslosers">
          Gainers &#x26; Losers
        </Link>
        <Link to="/categories">Categories</Link>
      </div>

      <div className="heading">
        <h1>
          Cryptocurrency Prices by Market Caps{' '}
          &nbsp;
          <span>
            {' '}
            <ToggleSwitch
              label={'Show stats'}
            />{' '}
          </span>
        </h1>
        <p>
          The global cryptocurrency market cap
          today is $1.13 Trillion, a{' '}
          <span>
            0.2% <ImArrowUp2 />
          </span>{' '}
          change in the last 24 hours.
          <Link
            className="readmore"
            to="/readmore"
          >
            Read more.
          </Link>
        </p>
        <div className="validation">
          <button className="all-categories">
            All Categories
          </button>

          <h3>
            {' '}
            <ToggleSwitch
              label={
                'Show Fully Diluted Valuation'
              }
            />
          </h3>
        </div>
          </div>
          
         <Coins/>
    </div>
  );
};
export default Directory;
