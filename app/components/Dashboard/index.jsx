import React             from 'react';
import axios            from 'axios';

export default class Dashboard extends React.Component {
	constructor(props) {
		super(props);
   this.handleSubmit = this.handleSubmit.bind(this);
   this.changeInput = this.changeInput.bind(this);

   this.state = {
       allergen: '',
       riskPercent: '',
       appointmentDate: '',
       appointmentTitle: '',
       appointmentDetails: '',
       appointmentType: '',

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
   axios.post('/index/addAllergen', {
      allergen: context.state.allergen,
      riskPercent: context.state.riskPercent,
   })
   .then((res) => {
   	console.log(res);
     // window.location = '/dashboard'
   })
   .catch((err) => {
     console.error("There's an error");
   })
 }

 handleAddAppointment(e){
 	 e.preventDefault();
 	 const context = this;
   axios.post('/appts/addAppointment', {
      appointmentTitle: context.state.appointmentTitle,
      appointmentType: context.state.appointmentType,
      appointmentDate: context.state.appointmentDate,
      appointmentDetails: context.state.appointmentDetails,
   })
   .then((res) => {
   	console.log(res);
     // window.location = '/dashboard'
   })
   .catch((err) => {
     console.error("There's an error");
   })
 }

//  componentDidMount () {
//     const script = document.createElement("script");

//     script.src = "dashboard-js.js";
//     script.async = true;

//     document.body.appendChild(script);

//     axios.get('/appts/all')
//     .then((res) => {
//     	console.log(res);
//     });
// }

	render() {
		return (
			<div>
				<nav className="navbar navbar-expand-sm bg-dark navbar-dark sticky-top">
					<a className="navbar-brand" href="/dashboard">
						Health Profile
					</a>
					<ul className="navbar-nav">
						<li className="nav-item">
							<a className="nav-link" href="/myprofile">
								My Profile
							</a>
							<a className="nav-link" href="#">
								Account Settings
							</a>
						</li>
					</ul>
				</nav>

				<div className="container-fluid">
										<div className="margin-bottom50px"><span><p></p></span></div>
					<h1 className="text-center margin-top100px"> MY HEALTH PROFILE </h1>
						<div className="margin-bottom50px"><span><p></p></span></div>


	<div className="container">
	<div className="row">
		<div className="col">
			<h3> OVERVIEW </h3>
		</div>
		<div className="col">
			<h3> UPCOMING APPOINTMENTS </h3>
      <form onClick={this.handleAddAppointment.bind(this)}>
         <div className="form-inputs">
          	Appointment Title: 
           <input
             onChange={this.changeInput}
             className=""
             type='text'
             placeholder='appointment title'
             data-type='text'
             />
           <span id="appointmentTitle"></span>
           <br/>

            Appointment Type:  
           <input
             onChange={this.changeInput}
             className=""
             type='text'
             placeholder='appointment type'
             data-type='text'
             />
           <span id="appointmentType"></span>
						<br/>

           Appointment Date: 
           <input
             onChange={this.changeInput}
             className=""
             type='date'
             placeholder='appointment date'
             data-type='date'
             />
           <span id="appointmentDate"></span>
           <br/>
          	Details: 
           <input
             onChange={this.changeInput}
             className=""
             type='text'
             placeholder='appointment details'
             data-type='text'
             />
           <span id="appointmentDetails"></span>
						<br/>

           <div className="submit">
           		<button id="submit" type="submit" className="btn btn-primary">Add Appointment</button>
           </div>
         </div>
       </form>

		</div>
	</div>
	</div>
	<div className="margin-bottom50px"><span><p></p></span></div>
<div className="margin-bottom50px"><span><p></p></span></div>
<div className="margin-bottom50px"><span><p></p></span></div>
						<div className="margin-bottom50px"><span><p></p></span></div>
						<div className="margin-bottom50px"><span><p></p></span></div>
					<div className="container-fluid">
											<div className="margin-bottom50px"><span><p></p></span></div>
					<h1 className="text-center margin-top100px"> MY RECORDS </h1>


					
						<p>
							<button
								className="btn btn-outline-danger btn-lg btn-block"
								type="button"
								data-toggle="collapse"
								data-target="#allergies"
								aria-expanded="false"
								aria-controls="collapseExample"
							>
								Allergies
							</button>
						</p>
						<div className="collapse" id="allergies">
							<div className="card card-body">
								Anim pariatur cliche reprehenderit, enim eiusmod high life
								accusamus terry richardson ad squid. Nihil anim keffiyeh
								helvetica, craft beer labore wes anderson cred nesciunt sapiente
								ea proident.

							<div className="container">
								<table className="table">
							  <thead className="thead-dark">
							    <tr>
							      <th scope="col">#</th>
							      <th scope="col">ALLERGIC TO</th>
							      <th scope="col">RISK %</th>
							    </tr>
							  </thead>
							  <tbody>
							    <tr>
							      <th scope="row">1</th>
							      <td>KIWI</td>
							      <td>12%</td>
							    </tr>
							    <tr>
							      <th scope="row">2</th>
							      <td>STRAWBERRY</td>
							      <td>50%</td>
							    </tr>
							    <tr>
							      <th scope="row">3</th>
							      <td>NUTS</td>
							      <td>80%</td>
							    </tr>
							  </tbody>

							</table>
							</div>
							</div>
							  
							  {/*<div className="margin-bottom50px"><span><p></p></span></div>*/}
							  <button 
							  type="button" 
							  className="btn btn-danger"
							  data-toggle="collapse"
								data-target="#saveallergy"
								aria-expanded="false"
								aria-controls="collapseExample"
							  >Add Allergy</button>

								<button type="button" className="collapse btn btn-outline-danger" id="saveallergy">Save Allergy</button>
						</div>

						<div className="margin-bottom50px"><span><p></p></span></div>

						<p>
							<button
								className="btn btn-outline-info btn-lg btn-block"
								type="button"
								data-toggle="collapse"
								data-target="#immunization"
								aria-expanded="false"
								aria-controls="collapseExample"
							>
								Immunization
							</button>
						</p>

						<div className="collapse" id="immunization">
							<div className="card card-body">
								Anim pariatur cliche reprehenderit, enim eiusmod high life
								accusamus terry richardson ad squid. Nihil anim keffiyeh
								helvetica, craft beer labore wes anderson cred nesciunt sapiente
								ea proident.
														{/*<div className="margin-bottom50px"><span><p></p></span></div>*/}
	<div className="container">
	<table className="table">
  <thead className="thead-dark">
    <tr>
      <th scope="col">#</th>
      <th scope="col">VACCINATION</th>
      <th scope="col">DATE</th>
      <th scope="col">DOCTOR</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th scope="row">1</th>
      <td>MEASLES</td>
      <td>APRIL 10, 2016</td>
      <td>DR. OZ</td>
    </tr>
    <tr>
      <th scope="row">2</th>
      <td>CHICKEN POX</td>
      <td>MAY 10, 2016</td>
      <td>DR. PHIL</td>
    </tr>
    <tr>
      <th scope="row">3</th>
      <td>ANTI-RABIES</td>
      <td>JUNE 10, 2016</td>
      <td>DR. STRANGE</td>
    </tr>
  </tbody>
</table>
</div>

							</div>
						</div>

						<div className="margin-bottom50px"><span><p></p></span></div>

						<p>
							<button
								className="btn btn-outline-success btn-lg btn-block"
								type="button"
								data-toggle="collapse"
								data-target="#Medications"
								aria-expanded="false"
								aria-controls="collapseExample"
							>
								Medications
							</button>
						</p>
						<div className="collapse" id="Medications">
							<div className="card card-body">
								Anim pariatur cliche reprehenderit, enim eiusmod high life
								accusamus terry richardson ad squid. Nihil anim keffiyeh
								helvetica, craft beer labore wes anderson cred nesciunt sapiente
								ea proident.
								<img src="https://www.dailyarthub.com/wp-content/uploads/2018/04/DAH_Medicines.jpg" className="img-150x150"></img>

							</div>
						</div>

					</div>

	</div>


				</div>

		)
	}
} 