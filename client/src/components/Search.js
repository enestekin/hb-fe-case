import Icon from '../assets/images/search-icon.svg';
import Wrapper from '../assets/wrappers/SearchWrapper';

const Search = () => {
  return (
    <Wrapper>
      <img src={Icon} alt='search' />
      <input type='text' placeholder='25 milyondan fazla urun icerisinde ara' />
    </Wrapper>
  );
};
export default Search;
