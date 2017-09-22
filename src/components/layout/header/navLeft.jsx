import React, {Component} from 'react';
class NavLeft extends Component{
	constructor(props){
		super(props);
		this.state={
			className:''
		}
	}
	setActiveNav(props){
		this.setState({className:this.props.setActiveNav})
	}
	render(){
		return(
			<div className="nav-left">
				<ul>
					<li className={this.state.className}><a href="/"><i className="fa fa-area-chart fa-1x"></i> Dashboard</a></li>
					<li className={this.state.className}><a href="/forms"><i className="fa fa-pencil-square-o fa-1x"></i> Forms</a></li>
					<li className={this.state.className}><a href="/gallery"><i className="fa fa-camera fa-1x"></i> Gallery</a></li>
					<li className={this.state.className}><a href="/stats"><i className="fa fa-bar-chart fa-1x"></i> Stats and Charts </a></li>
					<li className={this.state.className}><a href="/invoicing"><i className="fa fa-credit-card fa-1x"></i> Invoicing</a></li>
					<li className={this.state.className}><a href="/login"><i className="fa fa-sign-in fa-1x" aria-hidden="true"></i> Login Page</a></li>
					<li className={this.state.className}><a href="/tables"><i className="fa fa-table fa-1x" aria-hidden="true"> </i> 
					 Tables</a></li>
				</ul>
			</div>
		);
	}
}
export default NavLeft;
