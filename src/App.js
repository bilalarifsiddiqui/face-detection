import React from 'react';
import './App.css';
import Naviagtion from './components/Navigation/Navigation';
import Logo from './components/Logo/Logo';
import ImgaeLinkForm from './components/ImageLinkForm/ImageLinkForm'

function App() {
  return (
    <div className="App">
      <Naviagtion />
      <Logo />
      <ImgaeLinkForm />
    </div>
  );
}

export default App;
