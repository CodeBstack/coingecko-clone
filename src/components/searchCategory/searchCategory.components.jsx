import SearchCategories from '../search-categories/search-categories.components';
import './searchCategory.styles.scss';

const SearchCategory = ({ heading, data }) => {
  if (data === undefined) return;

  const filterData = data.filter((_, i) => i < 7);
//   console.log(filterData);
  return (
    <div className="search-category">
      <p className="heading">{heading}</p>
      <div className="search-category-lists">
        {filterData.map((data) => {
        //   console.log(data);
          return (
            <SearchCategories
              key={data.name}
              data={data}
            />
          );
        })}
      </div>
    </div>
  );
};

export default SearchCategory;
