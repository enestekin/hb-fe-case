import Filters from './Filters';
import Products from './Products';
import Wrapper from '../assets/wrappers/ListWrapper';
import Pagination from './Pagination';

const List = () => {
  return (
    <div data-testid='list'>
      <Wrapper>
        <Filters />
        <Products />
      </Wrapper>
      <Pagination />
    </div>
  );
};
export default List;
