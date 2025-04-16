import React from 'react'
import './header.css'
import NetflixLogo from '../../Images/netflix_logo_real_png.png'
import SearchIcon from '@mui/icons-material/Search';
import NotificationsNoneIcon from '@mui/icons-material/NotificationsNone';
import AccountBoxIcon from '@mui/icons-material/AccountBox';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown'


const Header = () => {
  return (
    <div className='Header'>
          <div className='Header__Container'>
              <div className='Header__LeftSide'>
                  <ul>
                      <li> <img src={NetflixLogo} alt="net logo" width={100}/></li>

                      <li> Home </li>
                      <li> TvShow </li>
                      <li> Movies </li>
                      <li> Latest </li>
                      <li> My List </li>
                      <li> Browser By Languages </li>
                  </ul>    
              </div>

              <div className='Header__RightSide'> 
                  <ul>
                      <li> <SearchIcon/> </li>
                      <li> <NotificationsNoneIcon/> </li>
                      <li> <AccountBoxIcon/> </li>
                      <li> <ArrowDropDownIcon/> </li>
                  </ul>
              </div>

          </div>
          


    </div>
  )
}

export default Header
