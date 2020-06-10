import React from 'react';
import {NavLink} from 'react-router-dom'

const NavBar = (props) => {

  let dynamicNavBar = () => {
    if(props.user.username === ""){
      return (
        <ul className="navBar">
          <li className="logo">
          <NavLink to="/">HOLLISTER</NavLink>
          </li>
          <li>
            <NavLink to="/">Home</NavLink>
          </li>
        <li>
          <NavLink to="/sign">Sign Up</NavLink>
        </li>
        <li>
        <NavLink to="/login">Login</NavLink>
        </li>
        <li>
          <input type="text" className="input" placeholder="search"/>
        </li>
      </ul>
      )
    }else {
      return(
        <ul className="navBar">
          <li>
            <NavLink to="/">Home</NavLink>
          </li>
          <li>
            <NavLink to="/logout">Log Out</NavLink>
          </li>
        <li>
        <NavLink to="/cart">cart</NavLink>
        </li>
      </ul>
      )
    }
      
  }


  return(
    <div>
      {dynamicNavBar()}
    </div>
    
  )
};

export default NavBar;