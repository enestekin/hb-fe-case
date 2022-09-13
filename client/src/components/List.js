import Filters from './Filters';
import Products from './Products';
import Wrapper from '../assets/wrappers/ListWrapper';

const List = () => {
  return (
    <Wrapper>
      <Filters />
      <Products />
    </Wrapper>
  );
};
export default List;
