import React from 'react';
import logo from './img/instagramLogo.PNG'
import links from './img/instagramSearchBarLinks.PNG'
import './header.css'

const SearchBar = props => {
    return (
        <div className='searchBarDiv'>
            <img className='instaLogo' src={logo} alt='instagram logo' />
            <form>
                <input
                 className='searchField'
                 type='text' 
                 placeholder='username'
                 name='search' 
                 value={props.search} 
                 onChange={props.handleChange} 
                  />
            </form>
            <img className='searchBarLinks'src={links} alt='search bar links' />
        </div>
    )
}

export default SearchBar;