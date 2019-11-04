import React from 'react';
import { Link } from 'react-router-dom';
import { FaRegBookmark, FaPlus } from 'react-icons/fa';
import './Nav.scss';

export const Nav = () => {
  return (
    <div className='Nav'>
      <div className='Nav__div--container'>
        <div className='Nav__div--header'>
          <Link to='/' className='Nav__Link--home'>
            A Home Brew
          </Link>
        </div>
        <div className='Nav__div--your-brewery'>
          <h4 className='Nav__h4--your-brewery'>Your Brewery:</h4>
          <ul className='Nav__ul--your-brewery'>
            <Link to='/bookmarked'>
              <li className='Nav__li Nav__li--bookmarked'>
                Bookmarked
                <FaRegBookmark />
              </li>
            </Link>
            <Link to='/previously_brewed'>
              <li className='Nav__li Nav__li--previous-brews'>
                Previous Brews
                <FaPlus />
              </li>
            </Link>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Nav;
