import SearchCategories from '../search-categories/search-categories.components';

const TrendingSearchCategory = ({ heading, data }) => {
  if (data === undefined) return;
  return (
    <div className="search-category">
      <p className="heading">{heading}</p>
      <div className="search-category-lists">
        {data.map((data) => {
          const { item } = data;
          return (
            <SearchCategories
              key={item.id}
              data={item}
            />
          );
        })}
      </div>
    </div>
  );
};

export default TrendingSearchCategory;
