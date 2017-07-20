import React, { Component } from 'react';
import MapboxAutocomplete from 'react-mapbox-autocomplete';

class Locator extends Component {
  constructor(props) {
    super(props);
    this.state = {
      result: '',
      lat: 0,
      lng:  0,
      text: '',
      description: '',
      mapbox_message: 'Travelling to...'
    }
  }

  handleOnSuggestionSelect(result, lat, lng, text) {
    this.setState({
      result: result,
      lat: lat,
      lng: lng,
      text: text,
    });
  }

  handleChange(e) {
    this.setState({
      description: e.target.value
    })
  }

  handleSubmit(event) {
    this.props.addPlace(
      this.state.result,
      this.state.lat,
      this.state.lng,
      this.state.description
    );
    this.setStateOnSubmit()
    event.preventDefault();
  }

  setStateOnSubmit() {
    this.setState({
      result: '',
      lat: 0,
      lng:  0,
      text: '',
      description: '',
      mapbox_message: 'Travelling to...',
    });
    this.mapbox.state.query = '';
    this.description.value = '';
  }



  render() {
    return (
      <form onSubmit={this.handleSubmit.bind(this)} >
        <MapboxAutocomplete
          className="form-control"
          publicKey="pk.eyJ1IjoiZWZtaW5vIiwiYSI6ImNqMWJpY3UzMTA5amcycXFza3hoZ251eHAifQ.U_W44o3HEmTLraHrl0pHCg"
          inputClass='form-control search'
          onSuggestionSelect={ this.handleOnSuggestionSelect.bind(this) }
          resetSearch={ false }
          placeholder={this.state.mapbox_message}
          ref={(input) => this.mapbox = input}
        />
      <input
        className="form-control"
        type="text"
        value={this.state.value}
        onChange={this.handleChange.bind(this)}
        placeholder="Description..."
        ref={(input) => this.description = input}
        />

      <input
        className="btn btn-default"
        type="submit"
        value="Submit"/>
    </form>
    );
  }
}

export default Locator;
