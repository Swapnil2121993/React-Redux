import React,{Component} from 'react';
import {Link} from 'react-router';


class Header extends Component{
	render(){
		return(
			<nav>
			<div>
			<Link to="admin" activeClassName="active">Admin</Link>
			{" | "}
			<Link to="student" activeClassName="active">Student</Link>
			</div>
			</nav>

			);
	}
}

export default Header;