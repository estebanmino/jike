import React, {Component} from 'react';

class Place extends Component {

  componentWillMount() {
    this.props.fetchPlace(this.props.params.placeId);
  }

  handleDeletePlace(id, index) {

    this.props.deletePlace(id, index);
    console.log('handleDeletePlace');

  }

  render() {
    return (
      <div className="place">
        <h1>Place</h1>
          {this.props.actual_place.map((place) => (
            <div key={place.id}>
              <h3>{place.name}</h3>
              <h4>{place.description}</h4>
              <button className="btn btn-danger" onClick={this.handleDeletePlace.bind(this, place.id, this.props.index)}>Delete</button>
            </div>
          ))}
      </div>
    )
  }
}

export default Place;
