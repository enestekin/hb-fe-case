import Logo from '../assets/images/logo.svg';
import { Search } from './index';
import { Basket } from './index';
import Wrapper from '../assets/wrappers/HeaderWrapper';

const Header = () => {
  return (
    <Wrapper>
      <div>
        <img src={Logo} alt='hepsiburada' />
      </div>
      <Search />
      <Basket />
    </Wrapper>
  );
};
export default Header;
