import React, {Component} from 'react';
import {browserHistory} from 'react-router';


class TripForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      description: '',
    }
  }

  handleChange(e) {
    console.log(e.target.name);
    this.setState({
      [e.target.name]: e.target.value,
    })
  }

  handleSubmit(event) {
    this.props.addTrip(
      this.state.name,
      this.state.description
    );
    this.setStateOnSubmit()
    event.preventDefault();
    browserHistory.push('/trips');

  }

  setStateOnSubmit() {
    this.setState({
      name: '',
      description: '',
    });
    this.name.value = '';
    this.description.value = '';
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit.bind(this)}>
        <h1>Trip Creation</h1>
        <div className="trip-form">
          <input ref={(input) => this.name = input}
            name="name"
            onChange={this.handleChange.bind(this)}
            className="form-control" type="text" placeholder='Trip name'/>
          <input ref={(input) => this.description = input}
            name="description"
            onChange={this.handleChange.bind(this)}
            className="form-control" type="text" placeholder='Trip description'/>
          <input
            className="btn btn-default"
            type="submit"
            value="Submit"/>
        </div>
      </form>
    )
  }
}

export default TripForm;
