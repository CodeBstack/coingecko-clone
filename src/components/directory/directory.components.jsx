import { Link } from 'react-router-dom';

import './directory.styles.scss';
import { ImArrowUp2 } from 'react-icons/im';
import { BsStar } from 'react-icons/bs';
import ToggleSwitch from '../toggleSwitch/toggleSwitch.components';
import Coins from '../coins/coins.component';
import { useState } from 'react';
import {
  QueryClient,
  QueryClientProvider,
} from '@tanstack/react-query';

const Directory = () => {
  const [showFDV, setShowFDV] = useState(false);

  const handleChange = () => {
    setShowFDV(!showFDV);
  };

  const queryClient = new QueryClient();

  return (
    <div className="directory-container">
      <div className="directory-nav">
        <Link to="/#">
          {' '}
          <span className="star">
            <BsStar />
          </span>{' '}
          &nbsp; Portfolio
        </Link>
        <Link className="isActive" to="/">
          Coins
        </Link>
        <Link to="/#">New Cryptocurrencies</Link>
        <Link to="/#">Gainers &#x26; Losers</Link>
        <Link to="/#">Categories</Link>
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
          <Link className="readmore" to="/#">
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
              onHandleChange={handleChange}
            />
          </h3>
        </div>
          </div>
          
      <QueryClientProvider client={queryClient}>
        <Coins fdvDisp={showFDV} />
      </QueryClientProvider>
    </div>
  );
};
export default Directory;
