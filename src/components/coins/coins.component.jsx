import './coins.style.scss';
import { BsStar } from 'react-icons/bs';


const Coins = () => {
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
        <div className="last-week">
          <h3>Last 7 Days</h3>
        </div>
      </div>

      <div className="coin-lists">
        <div className="coin-list">
          <div className="count">
            <p><BsStar/>&nbsp;1</p>
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
          <div className="last-week">
            <h3>Last 7 Days</h3>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Coins;
