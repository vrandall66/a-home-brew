import React from 'react';
import { Link } from 'react-router-dom';
import './Nav.scss';

export const Nav = () => {
  return (
    <div className='Nav'>
      <h4>Search beers by:</h4>
      <Link to='/beers/by_name'>
        <li className='Nav__li Nav__li--bookmarked'>By Name</li>
      </Link>
      <Link to='/beers/by_hops'>
        <li className='Nav__li Nav__li--bookmarked'>By Hops</li>
      </Link>
      <Link to='/beers/by_malt'>
        <li className='Nav__li Nav__li--bookmarked'>By Malt</li>
      </Link>
      <Link to='/beers/by_yeast'>
        <li className='Nav__li Nav__li--bookmarked'>By Yeast</li>
      </Link>
      <h4>Your Brewery:</h4>
      <ul className='Nav__ul--your-brewery'>
        <Link to='/bookmarked'>
          <li className='Nav__li Nav__li--bookmarked'>Bookmarked</li>
        </Link>
        <Link to='/currently_brewing'>
          <li className='Nav__li Nav__li--currently-brewing'>
            Currently Brewing
          </li>
        </Link>
        <Link to='/previous_brews'>
          <li className='Nav__li Nav__li--previous-brews'>Previous Brews</li>
        </Link>
      </ul>
    </div>
  );
};

export default Nav;
