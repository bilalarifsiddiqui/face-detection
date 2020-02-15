import React from 'react';
import './App.css';
import Clarifai from 'clarifai';
import Naviagtion from './components/Navigation/Navigation';
import Logo from './components/Logo/Logo';
import ImgaeLinkForm from './components/ImageLinkForm/ImageLinkForm'
import Rank from './components/Rank/Rank';
import Particles from '../node_modules/react-particles-js';


const app = new Clarifai.App({
  apiKey: '0299a2914d76475eb741dd115bd85809'
})

const particlesOption = {

  particles: {
    number: {
      value: 130,
      density: {
        enable: true,
        value_area: 800
      }
    }
  }

}

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      input: '',
    }
  }

  onInputChange = (event) => {
    console.log(event.target.value);
  }

  OnButtonSubmit = () => {
    app.models.predict("a403429f2ddf4b49b307e318f00e528b", "https://samples.clarifai.com/face-det.jpg").then(
      function (response) {
        console.log(response);
      },
      function (err) {
        // there was an error
      }
    );

  }

  render() {
    return (
      <div className="App">
        <Naviagtion />
        <Logo />
        <Rank />
        <ImgaeLinkForm onInputChange={this.onInputChange} OnButtonSubmit={this.OnButtonSubmit} />
        <Particles className='particles' params={particlesOption}>
        </Particles>

      </div>
    )
  }
}

export default App;