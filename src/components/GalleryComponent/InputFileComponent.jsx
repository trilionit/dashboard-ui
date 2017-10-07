import React, {Component} from 'react';
//const axios = require('axios');

class InputFileComponent extends Component{
	constructor(props){
		super(props)
	}
	handleFileUpload(event){
		event.preventDefault();
		let name=event.target.name;
		let value=event.target.value;
		this.setState({
			[name]:value
		})

	}
	handleSubmit(event){
		event.preventDefault();
		console.log(this.state.fileName)
	}
	render(){
		return(
			<form id="add-photos" onSubmit={this.handleSubmit.bind(this)}>
				<div className="form-container">								
					<div className="form-elements">
						<div className="column-40">
							<div className="Upload-form-container">
								<label for="fileName">Select Photo(s)</label>
								<input type="file" name="fileName" onChange={this.handleFileUpload.bind(this)} />
								<input type="submit" className="button-submit" value="Upload" />
							</div>
						</div>
					</div>
				</div>
			</form>

		);
	}
	
}
export default InputFileComponent;



