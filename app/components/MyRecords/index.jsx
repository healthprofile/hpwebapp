import React from "react";
import axios from "axios";

class MyRecords extends React.Component {
	constructor(props) {
		super(props);
	}

	render() {
		return (
			<div>
				<nav className="navbar navbar-expand-sm bg-dark navbar-dark sticky-top">
					<a className="navbar-brand" href="/dashboard">
						Health Profile
					</a>
					<ul className="navbar-nav">
						<li className="nav-item">
							<a className="nav-link" href="/signup">
								Sign Up
							</a>
						</li>
					</ul>
				</nav>

				<div className="container-fluid">
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
						<div className="collapse padding-bottom50px" id="allergies">
							<div className="card card-body">
								Anim pariatur cliche reprehenderit, enim eiusmod high life
								accusamus terry richardson ad squid. Nihil anim keffiyeh
								helvetica, craft beer labore wes anderson cred nesciunt sapiente
								ea proident.
							</div>
						</div>

						<div className="margin-bottom50px"><span><p></p></span></div>

						<p className="padding-top50px">
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
						<div className="collapse padding-bottom50px" id="immunization">
							<div className="card card-body">
								Anim pariatur cliche reprehenderit, enim eiusmod high life
								accusamus terry richardson ad squid. Nihil anim keffiyeh
								helvetica, craft beer labore wes anderson cred nesciunt sapiente
								ea proident.
							</div>
						</div>

						<div className="margin-bottom50px"><span><p></p></span></div>

						<p className="padding-top50px">
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
						<div className="collapse padding-bottom50px" id="Medications">
							<div className="card card-body">
								Anim pariatur cliche reprehenderit, enim eiusmod high life
								accusamus terry richardson ad squid. Nihil anim keffiyeh
								helvetica, craft beer labore wes anderson cred nesciunt sapiente
								ea proident.
							</div>
						</div>

					</div>


				</div>

		);
	}
}

module.exports = MyRecords;
