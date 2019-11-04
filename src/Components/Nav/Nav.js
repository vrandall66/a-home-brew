import React from 'react';
import { Link } from 'react-router-dom';
import './Nav.scss';

export const Nav = () => {
  return (
    <div className='Nav'>
      <h1 className="Nav__h1--title">A Home Brew</h1>
      <div className="Nav__div--container">
      <Link to='/'>Home</Link>
      <h4 className="Nav__h4--your-brewery">Your Brewery:</h4>
      <ul className='Nav__ul--your-brewery'>
        <Link to='/bookmarked'>
          <li className='Nav__li Nav__li--bookmarked'>Bookmarked</li>
        </Link>
        <Link to='/previously_brewed'>
          <li className='Nav__li Nav__li--previous-brews'>Previous Brews</li>
        </Link>
      </ul>
      </div>
    </div>
  );
};

export default Nav;
