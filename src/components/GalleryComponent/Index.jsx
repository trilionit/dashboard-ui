import React, {Component} from 'react';
import UploadForm from './UploadForm.jsx';

class GalleryComponent extends Component{
	constructor(props){
		super(props)
		this.state={
			className:'active'
		}

		//this.handleClickedButton=this.handleClickedButton.bind(this);
	}

	render(){
		return(<UploadForm setActiveClass={this.state.className} />);
	}
	
}
export default GalleryComponent;



