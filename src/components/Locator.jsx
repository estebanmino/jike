import React, { Component } from 'react';
import MapboxAutocomplete from 'react-mapbox-autocomplete';

class Locator extends Component {



  render() {
    return (
      <div className="form-inline">
        <div className="form-group trip-form">
          <MapboxAutocomplete
            publicKey="pk.eyJ1IjoiZWZtaW5vIiwiYSI6ImNqMWJpY3UzMTA5amcycXFza3hoZ251eHAifQ.U_W44o3HEmTLraHrl0pHCg"
            inputClass='form-control search'
            onSuggestionSelect={ this.props.addPlace }
            resetSearch={ true }
            placeholder="Travelling to..."
          />
        </div>
      </div>
    );
  }
}

export default Locator;
