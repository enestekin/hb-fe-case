import Wrapper from '../assets/wrappers/FilterItemWrapper';
import { useAppContext } from '../store/appContext';

const FilterItem = ({ filterData, filterOption, filterName }) => {
  const { handleFilterChange } = useAppContext();

  const handleClick = (e) => {
    e.currentTarget.classList.toggle('active');
    const filteredValue = e.target.innerText.split(' ')[0];
    handleFilterChange({ filterOption, filteredValue });
  };

  return (
    <Wrapper>
      <h4>{filterName}</h4>
      <ul>
        {filterData &&
          filterData.map((item, index) => {
            return (
              <li key={index} onClick={handleClick}>
                {item[filterOption]} ({item.quantity})
              </li>
            );
          })}
      </ul>
    </Wrapper>
  );
};
export default FilterItem;
