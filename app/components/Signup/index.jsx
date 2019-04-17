import React            from 'react';
import axios            from 'axios';

class Signup extends React.Component {
  constructor (props) {
    super (props);

    this.handleSubmit = this.handleSubmit.bind(this);
    this.changeInput = this.changeInput.bind(this);

    this.state = {
        email: '',
        password: '',
        firstName: '',
        lastName: '',
        phoneNumber: '',
        gender: '',
        address: '',
    };
  }

  changeInput(event) {
    const type = event.target.dataset.type;
    const value = event.target.value;

    this.setState({
      [type]: value
    });
  }

  handleSubmit(e) {
    const context = this;
    e.preventDefault();
    axios.post('/auth/signup', {
       email: context.state.email,
       password: context.state.password,
       firstName: context.state.firstName,
       lastName: context.state.lastName
    })
    .then((response) => {
      window.location = '/dashboard';
    })
  }

  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <div className="form-inputs">
            <input 
              onChange={this.changeInput}
              className="login-input"
              type='text' 
              placeholder='email'
              data-type='email'
              />
            <span id="email"></span>
            <input 
              onChange={this.changeInput}
              className="login-input"
              type='password' 
              placeholder='password'
              data-type='password'
              />
            <span id="password"></span>
            <input 
              onChange={this.changeInput}
              className="login-input"
              type='text' 
              placeholder='firstName'
              data-type='firstName'
              />
            <span id="firstName"></span>
            <input 
              onChange={this.changeInput}
              className="login-input"
              type='text' 
              placeholder='lastName'
              data-type='lastName'
              />
            <span id="lastName"></span>
            <input 
              onChange={this.changeInput}
              className="login-input"
              type='text' 
              placeholder='gender'
              data-type='gender'
              />
            <span id="gender"></span>
            <input 
              onChange={this.changeInput}
              className="login-input"
              type='text' 
              placeholder='(604) 111-1111'
              data-type='phoneNumber'
              />
            <span id="phoneNumber"></span>
            <div className="submit">
              <button id="submit" className="btn btn-success">Sign Up</button>
            </div>
          </div>
        </form>
        <div id="error">
        </div>
      </div>
    );
  }
}

module.exports = Signup;  