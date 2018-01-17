import React from 'react';
import Nav from '../../components/Nav';
import Gallery from '../Gallery';
import './App.css';

const App = () => (
  <div className="App">
    <Nav />
    <Gallery />
  </div>
);

export default App;

/**
 *
 * <Nav>
 *   <ul>
 *     <li>
 *       prominentColor: <Picker />
 *     </li>
 *     <li>
 *       size: <SizeSelector />
 *     </li>
 *   </ul>
 * </Nav>
 * <Gallery />
 *
 * **/