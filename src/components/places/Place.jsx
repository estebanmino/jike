import React, {Component} from 'react';
import ImageUpload from './ImageUploader';
import ImagePreview from './ImagePreview';

class Place extends Component {

  componentWillMount() {
    this.props.fetchPlace(this.props.params.placeId, this.props.params.tripId);
    this.props.fetchPlacePhotos(this.props.params.placeId, this.props.params.tripId);
  }

  handleDeletePlace(id, index, trip_id) {

    this.props.deletePlace(id, index, trip_id);
    console.log('handleDeletePlace');

  }

  handlePhoto()  {
    console.log('handlePhoto');
  }

  render() {
    return (
      <div className="place">
        <h1>Place</h1>
          {this.props.actual_place.map((place) => (

            <div key={place.id}>
              <h3>{place.name}</h3>
              <h4>{place.description}</h4>
                <button className="btn btn-danger" onClick={this.handleDeletePlace.bind(this, place.id, this.props.index, place.trip_id)}>Delete</button>
              <ImageUpload place={place} addImage={this.props.addImage.bind(this)}/>
              {this.props.actual_place_photos.map((photo, index) => (
                <ImagePreview photo={photo} key={index} place={place} editPhoto={this.props.editPhoto.bind(this)} />
              ))}
          </div>

          ))}

      </div>
    )
  }
}

export default Place;
