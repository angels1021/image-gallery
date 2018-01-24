/**
 * Nav component
 *
 * @module components/Nav
 * @component Nav
 * @typicalname Nav
 *
 * @requires [React]{@link https://facebook.github.io/react/docs/hello-world.html}
 * */
import React from 'react';
import SizeSelector from '../../containers/SizeSelector';
import ColorSelector from '../../containers/ColorSelector';

const Nav = () => (
  <nav className="top-bar flex-static">
    <ul className="menu">
      <li className="menu-text">Prominent Color: </li>
      <li><ColorSelector /></li>
      <li className="menu-text">Image Size: </li>
      <li><SizeSelector /></li>
    </ul>
  </nav>
);

export default Nav;
