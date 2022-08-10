import { BsStar } from 'react-icons/bs';
import Bitcoin from '../../assets/bitcoin.webp';
import Chart from '../../assets/sparkline.svg';
import './coin-categories.styles.scss';

const CoinCategories = ({ fdvDisplay }) => {
  return (
    <div className="coin-list">
      <div className="count">
        <p>
          <BsStar />
          &nbsp;1
        </p>
      </div>
      <div className="coin">
        <div className="image">
          <img src={Bitcoin} alt="bitcoin" />
        </div>
        <h4>
          {' '}
          Bitcoin &nbsp;{' '}
          <span className="abbr">btc </span>
        </h4>
      </div>
      <div className="price">
        <h4>$23,126.55</h4>
      </div>
      <div className="hour">
        <h4>0.3%</h4>
      </div>
      <div className="day">
        <h4>-2.5%</h4>
      </div>
      <div className="week">
        <h4>-0.5%</h4>
      </div>
      <div className="volume">
        <h4>$29,429,091,991</h4>
      </div>
      <div className="mktcap">
        <h4> $443,802,894,880</h4>
      </div>
      <div
        className={
          fdvDisplay ? 'fdv' : 'fdv-none'
        }
      >
        <h4>$488,493,684,000</h4>
      </div>
      <div className="last-week">
        <img src={Chart} alt="chart" />
      </div>
    </div>
  );
};

export default CoinCategories;
