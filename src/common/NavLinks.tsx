 //NavLinks.js

 import './NavBar.css';
 import {Outlet,Link} from 'react-router-dom'
 import { NavLink } from 'react-router-dom';
 

 const NavLinks = () =>{
     return(
         <nav className="Hamburger-menu">
                  
                    {/* <ul>
                    <li><Link to="/businessInfo">BussinessInfo</Link></li>
                    <li><Link to="/chat">Chat</Link></li> 
                    <li><Link to="/landing_page">LandingPage</Link></li>
                    <li><Link to="/newsSection">NewsSection</Link></li>    
                    <li><Link to="/stockChart">StockChart</Link></li>     
                    </ul> */}
         
                <Outlet/>
     </nav>
     )
 }

 export default NavLinks;
