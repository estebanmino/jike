import React, {Component} from 'react';

class SignInForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      email: '',
    }
  }

  handleChange(e) {
    console.log(e.target.name);
    this.setState({
      [e.target.name]: e.target.value,
    })
  }

  handleSubmit(event) {
    console.log('handleSubmit');
    this.setStateOnSubmit()
    event.preventDefault();

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
      <form onSubmit={this.handleSubmit.bind(this)} className="sign-in-form">
        <h1>Sign In</h1>
        <div className="trip-form">
          <input ref={(input) => this.name = input}
            name="name"
            onChange={this.handleChange.bind(this)}
            className="form-control" type="text" placeholder='Name'/>
          <input ref={(input) => this.description = input}
            name="email"
            onChange={this.handleChange.bind(this)}
            className="form-control" type="text" placeholder='Email'/>
          <input
            className="btn btn-default"
            type="submit"
            value="Submit"/>
        </div>
      </form>
    )
  }
}

export default SignInForm;
