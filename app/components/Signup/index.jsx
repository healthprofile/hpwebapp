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
       lastName: context.state.lastName,
       gender: this.state.gender,
       address: this.state.address,
       phoneNumber: this.state.phoneNumber
    })
    .then((response) => {
      window.location = '/dashboard';
    })
  }

      render() {
        return (  

  <div class="row header">
    <div class="col-md-7">
            <div>
          <nav className="navbar navbar-expand-sm bg-dark navbar-dark sticky-top">
            <a className="navbar-brand" href="#">Health Profile</a>
            <ul className="navbar-nav">
              <li className="nav-item">
                <a className="nav-link" href="/Login">Login</a>
              </li>
            </ul>
          </nav>
                <div>

                <form onSubmit={this.handleSubmit}>
                    <div className="form-inputs left-padding-50px fiftypx-left-padding container-fluid">
                        <input 
                            onChange={this.changeInput}
                            className="login-input formContentSmaller addMargin2percent"
                            type='text'
                            placeholder='email'
                            data-type='email'
                            />
                        <span id="email"></span>
                        <br />
                        <input 
                            onChange={this.changeInput}
                            className="login-input formContentSmaller addMargin2percent"
                            type='password' 
                            placeholder='password'
                            data-type='password'
                            />
                        <span id="password"></span>
                        <br />
                        <input 
                            onChange={this.changeInput}
                            className="login-input formContentSmaller addMargin2percent"
                            type='text' 
                            placeholder='first name'
                            data-type='firstName'
                            />
                        <span id="firstName"></span>
                        <br />
                        <input 
                            onChange={this.changeInput}
                            className="login-input formContentSmaller addMargin2percent"
                            type='text' 
                            placeholder='last name'
                            data-type='lastName'
                            />
                        <span id="lastName"></span>
                        <br />
                        <input 
                            onChange={this.changeInput}
                            className="login-input formContentSmaller addMargin2percent"
                            type='text' 
                            placeholder='gender'
                            data-type='gender'
                            />
                        <span id="gender"></span>
                        <br />
                        <input 
                            onChange={this.changeInput}
                            className="login-input formContentSmaller addMargin2percent"
                            type='text' 
                            placeholder='(604) 123 4567'
                            data-type='phoneNumber'
                            />
                        <span id="phoneNumber"></span>
                        <br />
                        <br />
                        <input 
                            onChange={this.changeInput}
                            className="login-input formContentSmaller addMargin2percent"
                            type='text' 
                            placeholder='MM/DD/YY'
                            data-type='birthday'
                            />
                        <span id="birthday"></span>
                        <br />
                        <br />
                        <input 
                            onChange={this.changeInput}
                            className="login-input formContentSmaller addMargin2percent"
                            type='text' 
                            placeholder='About Me'
                            data-type='bio'
                            />
                        <span id="bio"></span>
                        <br />
                        <div className="submit">
                            <button id="submit" type="submit" className="btn btn-success addMargin2percent">Sign Up</button>
                        </div>
                    </div>
                </form>
                </div>
                <div id="error">
                </div>
            </div>

    </div>
    <div class="col-md-5">
      <img  className="feed-img" src={"https://media.giphy.com/media/5V9vnOzlf6q2Y/giphy.gif"}/> 
    </div>
  </div>
        );
      }
    }


module.exports = Signup;  