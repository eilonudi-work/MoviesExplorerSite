import React, { Component } from 'react';
import NavbarContainer from './NavbarContainer';
import MoviesContainer from '../containers/MoviesContainer';
import DeleteMovie from './DeleteMovie';
import AddEditMovie from './AddEditMovie';

import './style.css';


class Layout extends Component {
  	render() {
    	return (
			<React.Fragment>
				<NavbarContainer/>
				<MoviesContainer/>
				<DeleteMovie/>
				<AddEditMovie/>
			</React.Fragment> 
    	);
  	};
};

export default Layout;

