import './stats.styles.scss';
import { MdOutlineArrowDropDown } from 'react-icons/md';
import { MdNightlight } from 'react-icons/md';
import { ImArrowUp2 } from 'react-icons/im';

const StatsHeader = () => {
  return (
    <div className="stats-container">
      <div className="left-part">
        <div className="lists">
          <li>
            Coins: <span>13067</span>
          </li>
          <li>
            Exchanges: <span>539</span>
          </li>
          <li>
            Market Cap:{' '}
            <span>
              $1,171,301,046,139{' '}
              <span className="rise">
                0.2% <ImArrowUp2 />
              </span>
            </span>
          </li>
          <li>
            24h Vol: <span>$113,714,479,443</span>
          </li>
          <li>
            Dominance:{' '}
            <span>BTC 38.9% &nbsp; ETH 18.2%</span>
          </li>
          <li>
            Gas: <span> 6 GWEI</span>
          </li>
        </div>
      </div>
      <div className="right-part">
        <div>
          <h3>
            EN
            <MdOutlineArrowDropDown />
          </h3>
        </div>

        <div>
          <h3>
            USD
            <MdOutlineArrowDropDown />
          </h3>
        </div>

        <div className="theme">
          <MdNightlight />
        </div>

        <div>
          <button className="subscribe">
            Subscribe
          </button>
        </div>
      </div>
    </div>
  );
};
export default StatsHeader;
