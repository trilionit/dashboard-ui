import React, {Component} from 'react';
//const axios = require('axios');

class PlaceHolderComponent extends Component{
	constructor(props){
		super(props)
		this.state=({
			imageUrl:'images/placeholder.png'
		})
		this.changePlaceHolder=this.changePlaceHolder.bind(this);

	}
	changePlaceHolder(fileName){
		let imageUrl= '../img/'+ this.props.fileName;
		this.setState({
			imageUrl:imageUrl
		})
		console.log(this.state.imageUrl);
	}
		
	render(){
		return(
			<div className="column-60">
				<img src={this.state.imageUrl} width="100%" id="place-holder" alt="placeholder" />
			</div>									
		);
	}
	
}
export default PlaceHolderComponent;



