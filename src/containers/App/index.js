import React from 'react';
import Nav from '../../components/Nav';
import FlexBox from '../../components/FlexBox';
import GalleryList from '../GalleryList';
import './App.css';

const App = () => (
  <FlexBox direction="column" align="stretch" className="App">
    <Nav />
    <GalleryList />
  </FlexBox>
);

export default App;