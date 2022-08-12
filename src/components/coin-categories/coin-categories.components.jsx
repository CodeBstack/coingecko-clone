import { BsStar } from 'react-icons/bs';
import Chart from '../../assets/sparkline.svg';
import './coin-categories.styles.scss';

const CoinCategories = ({
  fdvDisplay,
  coin,
 
}) => {
  const {
    name,
    symbol,
    image,
    current_price,
    fully_diluted_valuation,
    market_cap,
    price_change_percentage_1h_in_currency,
    price_change_percentage_24h,
    price_change_percentage_7d_in_currency,
    total_volume,
    market_cap_rank
  } = coin;

  const formatNumbers = (num) => {
    if (num === null) return;
    const newNumber = +num.toFixed(1);

    return newNumber;
  };

  return (
    <div className="coin-list">
      <div className="count">
        <p>
          <BsStar />
          &nbsp;{market_cap_rank}
        </p>
      </div>
      <div className="coin">
        <div className="image">
          <img src={image} alt={name} />
        </div>
        <h4>
          {' '}
          {name} &nbsp;{' '}
          <span className="abbr">{symbol} </span>
        </h4>
      </div>
      <div className="price">
        <h4>${current_price}</h4>
      </div>

      <div
        className={
          price_change_percentage_1h_in_currency <
          0
            ? 'fall'
            : 'hour'
        }
      >
        <h4>
          {formatNumbers(
            price_change_percentage_1h_in_currency
          )}
          %
        </h4>
      </div>
      <div
        className={
          price_change_percentage_24h < 0
            ? 'fall'
            : 'hour'
        }
      >
        <h4>
          {' '}
          {formatNumbers(
            price_change_percentage_24h
          )}
          %
        </h4>
      </div>
      <div
        className={
          price_change_percentage_7d_in_currency <
          0
            ? 'fall'
            : 'hour'
        }
      >
        <h4>
          {' '}
          {formatNumbers(
            price_change_percentage_7d_in_currency
          )}
          %
        </h4>
      </div>
      <div className="volume">
        <h4>${total_volume}</h4>
      </div>
      <div className="mktcap">
        <h4> ${market_cap}</h4>
      </div>
      <div
        className={
          fdvDisplay ? 'fdv' : 'fdv-none'
        }
      >
        <h4>
          {fully_diluted_valuation !== null
            ? `$${fully_diluted_valuation}`
            : ''}
        </h4>
      </div>
      <div className="last-week">
        <img src={Chart} alt="chart" />
      </div>
    </div>
  );
};

export default CoinCategories;
