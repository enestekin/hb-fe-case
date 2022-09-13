import Wrapper from '../assets/wrappers/FiltersWrapper';
import FilterItem from './FilterItem';
import Sort from './Sort';
import { useAppContext } from '../store/appContext';

const Filters = () => {
  const { colorOptions, brandOptions } = useAppContext();

  return (
    <Wrapper>
      <FilterItem
        filterData={colorOptions}
        filterOption='color'
        filterName='Renk'
      />
      <Sort />
      <FilterItem
        filterData={brandOptions}
        filterOption='brand'
        filterName='Marka'
      />
    </Wrapper>
  );
};
export default Filters;
