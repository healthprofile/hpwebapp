import React            from 'react';
import axios            from 'axios';

class NewAppointment extends React.Component {
 constructor (props) {
   super (props);

   this.handleSubmit = this.handleSubmit.bind(this);
   this.changeInput = this.changeInput.bind(this);

   this.state = {
       date: '',
       description: '',
       type: '',
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

   // TODO add a new event
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
             placeholder='date'
             data-type='date'
             />
           <span id="date"></span>
           <input
             onChange={this.changeInput}
             className="login-input"
             type='description'
             placeholder='description'
             data-type='description'
             />
           <span id="description"></span>
           <input
             onChange={this.changeInput}
             className="login-input"
             type='type'
             placeholder='type'
             data-type='type'
             />
           <span id="type"></span>
           <div className="submit">
             <button id="submit" type="submit" className="btn btn-success">Login</button>
           </div>
         </div>
       </form>
       <div id="error">
       </div>
     </div>
   );
 }
}

module.exports = NewAppointment;
