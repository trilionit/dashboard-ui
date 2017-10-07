import React, {Component} from 'react';
import UploadForm from './UploadForm.jsx';

class GalleryComponent extends Component{
	constructor(props){
		super(props)

		//this.handleClickedButton=this.handleClickedButton.bind(this);
	}

	render(){
		return(<UploadForm />);
	}
	
}
export default GalleryComponent;



