import React from 'react';
import {NavLink} from 'react-router-dom'

const ItemSideBar = () => {
  return(
    <ul className="sideBar">
      <li>
        <NavLink to="/navbar">Category</NavLink>
      </li>
      <li>
        <NavLink to="/shirt">T-Shirts</NavLink>
      </li>
      <li>
        <NavLink to="/short">Shorts</NavLink>
      </li>
      <li>
        <NavLink to="/polo">Polos</NavLink>
      </li>
      <li>
        <NavLink to="/hoodie">Hoodies</NavLink>
      </li>
    </ul>
  )
};

export default ItemSideBar;