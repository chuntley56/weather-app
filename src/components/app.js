import React, {Component} from 'react';
import ReactDOM from 'react-dom';

const weatherApiKey = 'c81c31cee9e7575095c11757a61f758b';


class WeatherApp extends Component {
  constructor(props) {
    super(props);

    this.state = {
      location: '',
      tempMin: '',
      tempMax: ''
    };

  }

  componentDidMount() {
    const location = this.state.location;
    const weatherUrl = `http://api.openweathermap.org/data/2.5/weather?q=${location}&units=imperial&APPID=${weatherApiKey}`;
    fetch(weatherUrl)
    .then(data => {return data.json()})
    .then(results => this.setState({ tempMin: results.main.temp_min, tempMax: results.main.temp_max}))
  }


  componentDidUpdate() {
    const location = this.state.location;
    const weatherUrl = `http://api.openweathermap.org/data/2.5/weather?q=${location}&units=imperial&APPID=${weatherApiKey}`;
    fetch(weatherUrl)
    .then(data => {return data.json()})
    .then(results => this.setState({ tempMin: results.main.temp_min, tempMax: results.main.temp_max}))
  }


  // handleSubmit(event) {
  //   const location = this.state.location;
  //   const weatherUrl = `http://api.openweathermap.org/data/2.5/weather?q=${location}&units=imperial&APPID=${weatherApiKey}`;
  //
  //   fetch(weatherUrl)
  //   .then(data => {return data.json()})
  //   .then(results => this.setState({ tempMin: results.main.temp_min, tempMax: results.main.temp_max}))
  // }

  render() {
    const tempMin = this.state.tempMin;
    const tempMax = this.state.tempMax;
    const location = this.state.location;

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
      </div>

    );
  }


}

export default WeatherApp;
