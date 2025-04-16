import React from 'react'
import './fotter.css'
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import YouTubeIcon from '@mui/icons-material/YouTube';

const Footer = () => {
  return (
    <div className='Footer' >
      <div className='Footer__Container'>

        <div className='Footer__Icons' >
          <FacebookIcon />
          <InstagramIcon />
          <YouTubeIcon/>
        </div>

        <div className='Footer__Data'>
          <div>
            <ul>
               <li> Audio Description </li>
              <li> Investor Relations </li>
              <li> Legal Notice </li>
            </ul>
          </div>
        
          <div>
            <ul>
              <li>Help Center</li>
              <li>Jobs</li>
              <li>Cookie Preference</li>
            </ul>
          </div>

          <div>
            <ul>
                <li>Gift Cards</li>
                <li>Terms of Use</li>
                <li>Corporate Information</li>
            </ul>
        </div>

          <div>
            <ul>
              <li> Media Center</li>
              <li>Privacy</li>
              <li>Contact Us</li>
            </ul>
          </div> 
        </div>
 
         <div className='Service__Code'>
        <p>Service Code </p>
      </div>
      <div className='Copy__Right'>
          &copy; 1997-2024 Netflix, Inc. 
          </div>    
      </div>
    </div>
  )
}

export default Footer
