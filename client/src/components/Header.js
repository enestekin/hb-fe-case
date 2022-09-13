import Logo from '../assets/images/logo.svg';
import Search from './Search';
import Basket from './Basket';
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
