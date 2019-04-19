import React            from 'react';
import axios            from 'axios';

class Login extends React.Component {
 constructor (props) {
   super (props);

   this.handleSubmit = this.handleSubmit.bind(this);
   this.changeInput = this.changeInput.bind(this);

   this.state = {
       email: '',
       password: ''
   }
 }

 changeInput(event) {
   const type = event.target.dataset.type;
   const value = event.target.value;

   this.setState({
     [type]: value
   });
 }

 handleSubmit(e) {
   e.preventDefault();
   const context = this;
   axios.post('/auth/login', {
      email: context.state.email,
      password: context.state.password,
   })
   .then((res) => {
     window.location = '/dashboard'
   })
   .catch((err) => {
     console.error('Wrong Password');
   })
 }

 render() {
   return (
     <div>
    <nav className="navbar navbar-expand-sm bg-dark navbar-dark sticky-top">
      <a className="navbar-brand" href="#">Health Profile</a>
      <ul className="navbar-nav">
        <li className="nav-item">
          <a className="nav-link" href="/signup">Sign Up</a>
        </li>
      </ul>
    </nav>

     <div className = "container-fluid">
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
           <div className="submit">
             <button id="submit" type="submit" className="btn btn-success">Login</button>
           </div>
         </div>
       </form>
       <div id="error">
       </div>
     </div>
    </div>
   );
 }
}

module.exports = Login;
