import React, {Component} from 'react';
import FormValidation from './FormValidation.jsx';

class FormComponent extends Component{
	constructor(props){
		super(props)
		this.state={
			className:'active'
		}

		//this.handleClickedButton=this.handleClickedButton.bind(this);
	}

	render(){
		return(<FormValidation setActiveNav={this.state.className} />);
	}
	
}
export default FormComponent;



