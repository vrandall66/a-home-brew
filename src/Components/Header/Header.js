import React from 'react';
import SearchForm from '../../Containers/SearchForm/SearchForm';
import './Header.scss';

export const Header = () => {
  return (
    <div className='Header'>
      <SearchForm />
    </div>
  );
};

export default Header;
