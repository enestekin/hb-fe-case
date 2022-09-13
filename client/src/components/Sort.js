import Wrapper from '../assets/wrappers/FilterItemWrapper';
import { useAppContext } from '../store/appContext';

const Sort = () => {
  const { sort, sortOptions, handleSortChange } = useAppContext();

  const handleClick = (sortName) => {
    handleSortChange(sortName);
  };

  return (
    <Wrapper>
      <h4>Sıralama</h4>
      <ul>
        {sortOptions.map((item, index) => {
          return (
            <li
              key={index}
              className={sort === item.name ? 'active' : ''}
              onClick={() => handleClick(item.name)}
            >
              {item.text}
            </li>
          );
        })}
      </ul>
    </Wrapper>
  );
};
export default Sort;
