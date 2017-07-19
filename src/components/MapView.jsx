import React, { Component } from 'react';
import '../App.css';
import Locator from './Locator';
import Map from './Map';

class MapView extends Component {
  constructor(props)  {
    super(props);
    this.state = {
      places: []
    }
  }

  
  componentWillMount() {
    console.log('componentWillMount');
    this.props.fetchPlaces();
    this.setState({
      places: this.props.places,
    })
  }

  componentDidMount() {
    this.setState(this.state);
    console.log(this.state.places);
  }

  render() {
    return (
      <div className="App">
        <Locator addPlace={(result, lat, lng, text) =>  this.props.addPlace(result, lat, lng, text) }/>
        <Map places={this.state.places}/>
      </div>

    );
  }
}

export default MapView;
