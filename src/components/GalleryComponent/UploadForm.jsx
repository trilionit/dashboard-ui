import React, {Component} from 'react';

import PlaceHolderComponent from "./PlaceHolderComponent.jsx";
const axios = require('axios');

class UploadForm extends Component{
	constructor(props){
		super(props)
		this.state={
			file:"",
			fieldName:"",
			imageUrl:'images/placeholder.png'
		}
		
	}

	handleFileUpload(event){
		event.preventDefault();
		let reader= new FileReader();
		let file=event.target.files[0];
		let image=event.target.name;
		this.setState({
			file: file,
			fieldName:image
		})

	}
	handleSubmit(event){
		event.preventDefault();
		this.handleFile(this.state.file).then((response)=>{
			let imageUrl= 'img/'+ response.data;
			this.setState({
				imageUrl:imageUrl
			})
		})
		//console.log(this.state.file);
	}
	handleFile(file){
		let url="/api/upload/";
		let formData= new FormData();

		formData.append("image", file);
		//formData.append("name", fieldName)

		let	config = {
        	headers: {
            	'content-type': 'multipart/form-data'
        	}
    	}
    	return  axios.post(url, formData, config)
	}
	render(){
		return(
			<div>
			<section>	
				<div className="container">					
					<div className="form-main-container">
						<div className="form-header">
							<h3>Add Photos</h3>
						</div>
						<form id="add-photos" onSubmit={this.handleSubmit.bind(this)}>
							<div className="form-container">								
								<div className="form-elements">
									<div className="column-40">
										<div className="Upload-form-container">
											<label htmlFor="fileName">Select Photo(s)</label>
											<input type="file" name="image" onChange={this.handleFileUpload.bind(this)} />
											<input type="submit" className="button-submit" value="Upload" />
										</div>
									</div>
									
									<div className="column-60">
										<img src={this.state.imageUrl} width="100%" id="place-holder" alt="placeholder" />
									</div>


								</div>							
							</div>
						</form>	
					</div>
				</div>
			</section>
			</div>
		);
	}
	
}
export default UploadForm;



