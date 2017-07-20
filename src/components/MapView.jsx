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

  handleAddPlace(result, lat, lng, description) {
    this.state.places.push({
      name: result,
      lat: lat,
      lng:lng,
      id: this.state.places.lenght,
    });
    this.setState(this.state);
    this.props.addPlace(result, lat, lng, description);
  }

  componentDidMount() {
    console.log('componentDidMount',this.props.places)
    if (this.props.places.length === 0) {
      console.log('emopty');
    }
  }

  render() {
    return (
      <div className="map-view">
        <div className="add-place">
          <h3>Add Place</h3>
          <Locator addPlace={(result, lat, lng, description) =>  this.handleAddPlace(result, lat, lng, description) }/>
        </div>
        <div className="map">
          <Map places={this.state.places}/>
        </div>
      </div>

    );
  }
}

export default MapView;
