import React from 'react';
import './App.css';
import Clarifai from 'clarifai';
import Naviagtion from './components/Navigation/Navigation';
import FaceRecognition from './components/FaceRecognition/FaceRecognition';
import Logo from './components/Logo/Logo';
import ImgaeLinkForm from './components/ImageLinkForm/ImageLinkForm'
import Rank from './components/Rank/Rank';
import Signin from './components/Signin/Signin';
import Register from './components/Register/Register'
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
      box: {},
      route: 'signin',
      isSignedIn: false,
      user: {
        id: '',
        name: '',
        email: '',
        JoinDate: '',
        Rank: 0,
      }
    }
  }


  loadUser = (data) => {
    this.setState({
      user: {
        id: data.id,
        name: data.name,
        email: data.email,
        JoinDate: data.JoinDate,
        Rank: data.Rank
      }
    })

  }


  calculateBoxPoints = (data) => {
    const image = document.getElementById('imageID');
    const height = Number(image.height);
    const width = image.width;
    const Clarifai = data.outputs[0].data.regions[0].region_info.bounding_box;
    return {
      left_col: Clarifai.left_col * width,
      top_row: Clarifai.top_row * height,
      right_col: width - (Clarifai.right_col * width),
      bottom_row: height - (Clarifai.bottom_row * height)
    }
  }

  faceBoxDetection = (box) => {
    this.setState({ box: box });
  }

  onInputChange = (event) => {
    this.setState({ input: event.target.value });
  }

  OnButtonSubmit = () => {
    this.setState({ imageUrl: this.state.input })
    console.log(Clarifai.FACE_DETECT_MODEL);
    app.models.predict(Clarifai.FACE_DETECT_MODEL, this.state.input)
      .then(response => {
        console.log(response);
        if (response) {

          fetch('http://localhost:3000/image', {
            method: 'put',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
              id: this.state.user.id
            })

          })
          .then(response => response.json())
          .then(count => {
            this.setState(Object.assign(this.state.user, {Rank : count}))
          })
          
        }

        this.faceBoxDetection(this.calculateBoxPoints(response))
      })
      .catch(err => console.log(err));
  }

  routeChanged = (route) => {
    if (route === 'signout') {
      this.setState({ isSignedIn: false })
    } else if (route === 'home') {
      this.setState({ isSignedIn: true })
    }
    this.setState({ route: route })
  }

  render() {
    console.log("this.state.user", this.state.user);
    return (
      <div className="App">
      


        <Particles className='particles' params={particlesOption} />
        <Naviagtion isSignedIn={this.state.isSignedIn} routeChanged={this.routeChanged} />


        {this.state.route === 'home' ?
          <div>
            <Logo />
            <Rank name={this.state.user.name} Rank={this.state.user.Rank} />
            <ImgaeLinkForm onInputChange={this.onInputChange} OnButtonSubmit={this.OnButtonSubmit} />
            <Particles className='particles' params={particlesOption} />
            <FaceRecognition box={this.state.box} imageUrl={this.state.imageUrl} />
          </div>
          : (
            this.state.route === 'signin'
              ? <Signin routeChanged={this.routeChanged} loadUser={this.loadUser} />
              : <Register loadUser={this.loadUser} routeChanged={this.routeChanged} />
          )
        }
      </div>
    )
  }
}

export default App;