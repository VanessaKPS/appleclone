/*eslint no-unreachable: "error"*/

import React, {useState} from 'react';
import NavBarIcon from './NavBarIcon';
import './styles.css'
import {HiMenuAlt4, HiOutlineX} from 'react-icons/hi';

const NavBar = () => {
  const [isMenuIconClicked, setIsMenuIconClicked] = useState(false);
  const [isSearchIconClicked, setIsSearchIconClicked] = useState(false);
  
  const [query, setQuery] = useState('');
  
  const handleMenuClick = () => {
    setIsMenuIconClicked(!isMenuIconClicked);
  }
  const handleCloseClick = () => {
    setIsMenuIconClicked(!isMenuIconClicked);
  }

  const handleChange = (e)=> {
    setQuery(e.target.value);
  }

  const handleSearchClick = () => {
    setIsSearchIconClicked(!isSearchIconClicked);
    console.log(isSearchIconClicked);
  }
  const displayNavLinks = () => {
    setIsSearchIconClicked(!isSearchIconClicked);
  }

  return (
    <nav className='nav-bar'>
    <form className={isSearchIconClicked? 'show-search-wrapper':'search-wrapper'} method='post' action={`https://www.apple.com/uk/search/${query}`}>
            <input className='search-input' onChange={handleChange} placeholder="Search apple.com" name='q' value={query} /><HiOutlineX onClick={displayNavLinks} className='show-close-menu-icon'/>
    </form>
      <ul className={isSearchIconClicked? 'hide':'nav-links'}>
        <li className='apple-icon-wrapper'>
          <NavBarIcon className='apple-icon' href='https://www.apple.com/uk/'  width="14" height="44" viewBox="0 0 16 44">
            <path d="M8.02 16.23c-.73 0-1.86-.83-3.05-.8-1.57.02-3.01.91-3.82 2.32-1.63 2.83-.42 7.01 1.17 9.31.78 1.12 1.7 2.38 2.92 2.34 1.17-.05 1.61-.76 3.03-.76 1.41 0 1.81.76 3.05.73 1.26-.02 2.06-1.14 2.83-2.27.89-1.3 1.26-2.56 1.28-2.63-.03-.01-2.45-.94-2.48-3.74-.02-2.34 1.91-3.46 2-3.51-1.1-1.61-2.79-1.79-3.38-1.83-1.54-.12-2.83.84-3.55.84zm2.6-2.36c.65-.78 1.08-1.87.96-2.95-.93.04-2.05.62-2.72 1.4-.6.69-1.12 1.8-.98 2.86 1.03.08 2.09-.53 2.74-1.31" fill="#D6D6D6" />
          </NavBarIcon>
        </li>
        <HiMenuAlt4 onClick={handleMenuClick} className={isMenuIconClicked?'hide':'menu-icon'} />
        <div className={ !isMenuIconClicked?'menu-items-wrapper':'expandable-menu-items-wrapper'}>
          <HiOutlineX  onClick={handleCloseClick} className={isMenuIconClicked? 'close-menu-icon':'hide'}/>
          <form className={isMenuIconClicked? 'search-wrapper':'hide'} method='post' action={`https://www.apple.com/uk/search/${query}`}>
          <input className='search-input' onChange={handleChange} placeholder="Search apple.com" name='q' value={query} />
          </form>
          <a className='menu-item' href='https://www.apple.com/uk/mac/' target='_blank' rel="noopener noreferrer">Mac</a>
          <a className='menu-item' href='https://www.apple.com/uk/ipad/' target='_blank' rel="noopener noreferrer">iPad</a>
          <a className='menu-item' href='https://www.apple.com/uk/iphone/' target='_blank' rel="noopener noreferrer">iPhone</a>
          <a className='menu-item' href='https://www.apple.com/uk/watch/' target='_blank' rel="noopener noreferrer">Watch</a>
          <a className='menu-item' href='https://www.apple.com/uk/tv/' target='_blank' rel="noopener noreferrer">TV</a>
          <a className='menu-item' href='https://www.apple.com/uk/music/' target='_blank' rel="noopener noreferrer">Music</a>
          <a className='menu-item' href='https://support.apple.com/en-gb' target='_blank' rel="noopener noreferrer">Support</a>
        </div>
        
        <li className='search-icon-wrapper' onClick={handleSearchClick} ><NavBarIcon className='search-icon'   width="14" height="44" viewBox="0 0 16 44">
          <path d="M17.512,29.417l-4.786-4.788a7.068,7.068,0,1,0-.777.778l4.785,4.788a.55.55,0,1,0,.777-.777ZM1.427,20.054a5.946,5.946,0,1,1,5.946,5.954A5.957,5.957,0,0,1,1.427,20.054Z" fill='#D6D6D6' />
        </NavBarIcon></li>
        <li className='bag-icon-wrapper'><NavBarIcon className='bag-icon' href='https://www.apple.com/uk/shop/bag'  width="15" height="44" viewBox="0 0 17 44">
          <path d="M14.5,14H12.712a4.227,4.227,0,0,0-8.424,0H2.5A2.5,2.5,0,0,0,0,16.5v11A2.5,2.5,0,0,0,2.5,30h12A2.5,2.5,0,0,0,17,27.5v-11A2.5,2.5,0,0,0,14.5,14Zm-6-2.875A3.243,3.243,0,0,1,11.712,14H5.288A3.243,3.243,0,0,1,8.5,11.125ZM16,27.5A1.5,1.5,0,0,1,14.5,29H2.5A1.5,1.5,0,0,1,1,27.5v-11A1.5,1.5,0,0,1,2.5,15h12A1.5,1.5,0,0,1,16,16.5Z" fill='#D6D6D6' />
        </NavBarIcon>
        </li>
      </ul>
    </nav>
  );
}

export default NavBar;