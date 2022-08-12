import './search-categories.styles.scss';

const SearchCategories = ({ data }) => {
  if (data === undefined) return;

  const { name, symbol, thumb, market_cap_rank } =
    data;
  return (
    <div className="search-category-list">
      <div className="div">
        <img src={thumb} alt="" />
        <h4>
          {name}{' '}
          {symbol === undefined || symbol === ''
            ? ''
            : `(${symbol})`}
        </h4>
      </div>
      <p>
        {market_cap_rank === undefined ||
        market_cap_rank === ''
          ? ''
          : `#${market_cap_rank}`}
      </p>
    </div>
  );
};

export default SearchCategories;
