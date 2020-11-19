import React, { Component } from 'react';
import './ParkingLot.css';
import EntryStore from './components/EntryForm';
import AddForm from './components/AddForm';
import LotConsole from './components/LotConsole';
import Background from './images/bg.jpg';

const sectionStyle = {
	width: "100%",
	height: "100vh",
	backgroundImage: `url(${Background})`,
	backgroundPosition: 'center',
	backgroundSize: 'cover',
	backgroundRepeat: 'no-repeat'
  };
export default class ParkingLot extends Component {


	render() {

		// const EntryStore =  connect(this.mapFormState, this.mapFormActions)(EntryForm);
		//const AddStore = connect(this.addFormData, this.addFormActions)(AddForm);
		return (
			<div style={ sectionStyle }>
				<header className="nav navbar justify-content-center">
						<h1>Multi-storey parking lot</h1>
				</header>			
				<div className="main container-fluid" >
					<div className="content container">
						<EntryStore />
						<AddForm />
						<LotConsole />
					</div>
					
				</div>
			</div>		
		);
	}
}

