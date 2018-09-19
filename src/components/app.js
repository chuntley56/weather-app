import React, {Component} from 'react';
import ReactDOM from 'react-dom';

const weatherApiKey = 'c81c31cee9e7575095c11757a61f758b';
const unsplashAccessKey = '904f4b05d06170b6ddf1a3e6bc9e8b85c8aef8b3e2b6290fde8a674472854191';

class WeatherApp extends Component {
  constructor(props) {
    super(props);

    this.state = {
      location: '',
      tempMin: '',
      tempMax: '',
      imgSrc: ''
    };
  }

  handleSubmit = event => {
    const weatherUrl = `http://api.openweathermap.org/data/2.5/weather?q=${this.state.location}&units=imperial&APPID=${weatherApiKey}`;
    const unsplashUrl = `https://api.unsplash.com/photos/random?query=${this.state.location}%20downtown%20city&client_id=${unsplashAccessKey}`;
    fetch(weatherUrl)
     .then(data => {return data.json()})
     .then(results => this.setState({ tempMin: results.main.temp_min, tempMax: results.main.temp_max}))
     event.preventDefault();
     fetch(unsplashUrl)
     .then(data => {return data.json()})
     .then(results => this.setState({ imgSrc: results.urls.small }))
     event.preventDefault();
  }

  render() {
    const {tempMin, tempMax, location, imgSrc} = this.state;
    return (
      <div>
      <form onSubmit={this.handleSubmit}>
        <input
        name="location"
        id="location"
        placeholder="City"
        onChange={event => this.setState({ location: event.target.value })}
        />
        <button>Submit</button>
      </form>
      Temp min: {tempMin}<br />
      Temp max: {tempMax}
      <img src={imgSrc} />
      </div>

    );
  }


}

export default WeatherApp;
