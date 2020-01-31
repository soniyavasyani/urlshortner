import React from 'react';
import {logo} from '../images/logo.svg';
 const Footer = () =>(
     <>
         <footer className="footer_container">
            <div>
                <h2>Shortly</h2>
                <img src={logo}/>
            </div>
            
            <div className="ul_4">
                <ul>
                    <li>Features</li>
                    <li>Link Shortening</li>
                    <li>Branded Links</li>
                    <li>Analytics</li>
                </ul>
                <ul>
                    <li>Resources</li>
                    <li>Blog</li>
                    <li>Developers</li>
                    <li>Support</li>
                </ul>
                <ul>
                    <li>Company</li>
                    <li>About</li>
                    <li>Our Teams</li>
                    <li>Careers</li>
                    <li>Contact</li>
                </ul>
            </div>
            <div>
                <h6>Logo</h6>
            </div>
            
         </footer>
     </>

 )
 export default Footer