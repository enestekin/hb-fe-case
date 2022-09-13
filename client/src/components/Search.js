import Icon from '../assets/images/search-icon.svg';
import Wrapper from '../assets/wrappers/SearchWrapper';
import { useAppContext } from '../store/appContext';
import { useState } from 'react';

const Search = () => {
  const [searchText, setSearchText] = useState('');
  const { handleSearchChange } = useAppContext();

  const handleChange = (e) => {
    setSearchText(e.target.value);
    if (searchText.length > 0) {
      handleSearchChange(e.target.value);
    }
  };

  return (
    <Wrapper>
      <img src={Icon} alt='search' />
      <input
        type='text'
        placeholder='25 milyondan fazla urun icerisinde ara'
        value={searchText}
        onChange={(e) => handleChange(e)}
      />
    </Wrapper>
  );
};
export default Search;
