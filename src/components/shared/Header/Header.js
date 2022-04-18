import React, { useState } from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { Link, NavLink } from 'react-router-dom';
import useAuth from '../../../Hooks/useAuth';
import logo from '../../../img/white-logo.webp';
import blackLogo from '../../../img/travel_logo.webp';
import './Header.css';

const Header = () => {
   // use auth
   const { user, logout } = useAuth();
   // set sticky
   const [sticky, setSticky] = useState(false);
   // sticky condition
   const handleSticky = () => {
      if (window.scrollY > 50) {
         setSticky(true)
      }
      else {
         setSticky(false)
      }
   }
   window.addEventListener('scroll', handleSticky)
   return (
      <>
         <div className={sticky ? `sticky_nav navBar_container` : 'navBar_container'}>
            <Navbar collapseOnSelect expand="lg" variant="dark">
               <Container>
                  <Navbar.Brand href="/home">
                     {sticky ? <img src={blackLogo} alt="" /> : <img src={logo} alt="" />}
                  </Navbar.Brand>
                  <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                  <Navbar.Collapse id="responsive-navbar-nav">
                     <Nav className="ms-auto nav_menu">
                        <NavLink activeStyle={{ borderBottom: '1px solid #FF4A52' }} to="/home">Home</NavLink>
                        <NavLink activeStyle={{ borderBottom: '1px solid #FF4A52' }} to="/about">About</NavLink>
                        {user.email &&
                           <NavLink activeStyle={{ borderBottom: '1px solid #FF4A52' }} to="/myOrder">My Orders</NavLink>}
                        {user.email &&
                           <NavLink activeStyle={{ borderBottom: '1px solid #FF4A52' }} to="/manageAllOrders">All Orders</NavLink>}
                        {user.email &&
                           <NavLink activeStyle={{ borderBottom: '1px solid #FF4A52' }} to="/addDestination">
                              Add Destination</NavLink>}
                        <NavLink activeStyle={{ borderBottom: '1px solid #FF4A52' }} to="/contact">Blogs</NavLink>
                        {user.email ? <div>
                           <strong style={{ color: '#00D690' }}>Hi! {user?.displayName} </strong>
                           <button onClick={logout} className="regular_btn">Logout</button>
                        </div> :
                           <div className="login-btn">
                              <Link to="/login">
                                 <button className="regular_btn">Login</button>
                              </Link>
                           </div>}
                     </Nav>
                  </Navbar.Collapse>
               </Container>
            </Navbar>
         </div>
      </>
   );
};

export default Header;