import { Filters } from './index';
import { Products } from './index';
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
