import React, { Component } from 'react';
import ReactMapboxGl, { Popup, Layer, Feature } from "react-mapbox-gl";

const ReactMap = ReactMapboxGl({
  accessToken: "pk.eyJ1IjoiZWZtaW5vIiwiYSI6ImNqMWJpY3UzMTA5amcycXFza3hoZ251eHAifQ.U_W44o3HEmTLraHrl0pHCg",
})



class Map extends Component {

  render() {
    return (
      <ReactMap
        // eslint-disable-next-line
        style="mapbox://styles/efmino/cj4xl8mqa2yu32sr4nle2rk9g"
        zoom = "1"
        containerStyle={{
          height: "80vh",
          width: "60vw",
          center: [30.493971,-17.226562],

        }}>

        <Layer
          type="symbol"
          id="marker"
          layout={{ "icon-image": "marker-15" }}>
          <Feature coordinates={[-30.493971,-17.226562]}/>
        </Layer>
        {this.props.places.map((place, index) =>
          <Popup coordinates={[place.lng, place.lat]} key={index} />
        )}
      </ReactMap>
    );
  }
}

export default Map;
