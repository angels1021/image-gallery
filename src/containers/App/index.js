import React from 'react';
import Nav from '../../components/Nav';
import FlexBox from '../../components/FlexBox';
import GalleryView from '../GalleryView';
import './App.css';

const App = () => (
  <FlexBox direction="column" align="stretch" className="App">
    <Nav />
    <GalleryView />
  </FlexBox>
);

export default App;