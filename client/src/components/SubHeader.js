import Wrapper from '../assets/wrappers/SubHeaderWrapper.js';
import Dropdown from './Dropdown';
import { useAppContext } from '../store/appContext';

const SubHeader = () => {
  const { search } = useAppContext();
  return (
    <Wrapper>
      <div>
        <h2>iPhone iOS cep telefonu</h2>
        <p>
          <span className='searched-value'>Aranan kelime:</span> {search}
        </p>
      </div>
      <Dropdown />
    </Wrapper>
  );
};
export default SubHeader;
