import React, {Component} from 'react';

class Trip extends Component {

  componentWillMount() {
    this.props.fetchTrip(this.props.params.tripId);
  }

  handleDeleteTrip(id, index) {
    console.log('handleDeleteTrip');

  }

  render() {
    return (
      <div className='trip-view'>
        <div className="trip">
          <h1>Trip</h1>
            {this.props.actual_trip.map((trip) => (
              <div key={trip.id}>
                <h3>{trip.name}</h3>
                <h4>{trip.description}</h4>
                <button className="btn btn-danger" onClick={this.handleDeleteTrip.bind(this, trip.id, this.props.index)}>Delete</button>
              </div>
            ))}
        </div>

      </div>
    )
  }
}

export default Trip;
