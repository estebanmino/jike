import React, { Component } from 'react';

class Photo extends Component {

  render() {
    return (
      <table>

        <tbody>
          <tr className="photo">
            <td>{this.props.name}</td>
            <td>{this.props.lat}</td>
            <td>{this.props.lng}</td>
          </tr>
        </tbody>
      </table>
    );
  }
}

export default Photo;
