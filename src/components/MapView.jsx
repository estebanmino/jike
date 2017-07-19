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

  handleAddPlace(result, lat, lng, text) {
    this.state.places.push({
      name: text,
      lat: lat,
      lng:lng,
      id: this.state.places.lenght,
    });
    this.setState(this.state);
    this.props.addPlace(result, lat, lng, text);
  }

  componentDidMount() {
    console.log('componentDidMount',this.props.places)
    if (this.props.places.length === 0) {
      console.log('emopty');
    }
  }

  render() {
    return (
      <div className="App">
        <Locator addPlace={(result, lat, lng, text) =>  this.handleAddPlace(result, lat, lng, text) }/>
        <Map places={this.state.places}/>
      </div>

    );
  }
}

export default MapView;
