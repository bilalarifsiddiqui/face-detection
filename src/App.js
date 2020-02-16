import React from 'react';
import './App.css';
import Clarifai from 'clarifai';
import Naviagtion from './components/Navigation/Navigation';
import FaceRecognition from './components/FaceRecognition/FaceRecognition';
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
      imageUrl: '',
      Box: {}
    }
  }

  calculateBoxPoints = (data) => {
    const Clarifai = data.outputs[0].data.regions[0].region_info.bounding_box;
    const image = document.getElementById('imageID');
    const height = Number(image.height);
    const width = image.width;
    return {
      left_col: Clarifai.left_col * width,
      top_row: Clarifai.topRow * height,
      right_col: width - (Clarifai.rightCol * width),
      bottom_row: height - (Clarifai.bottomRow * height)
    }
  }

  faceBoxDetection = (box) => {
    this.setState({ box });
  }

  onInputChange = (event) => {
    this.setState({ input: event.target.value });
  }

  OnButtonSubmit = () => {
    this.setState({ imageUrl: this.state.input })

    app.models.predict(Clarifai.FACE_DETECT_MODEL, this.state.input)
      .then(response => this.faceBoxDetection(this.calculateBoxPoints(response)))
      .catch(err => console.log(err));
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
        <FaceRecognition box={this.state.box} imageUrl={this.state.imageUrl} />

      </div>
    )
  }
}

export default App;