import React, { Component } from 'react'
import Navbar from '../components/Navbar';
import { connect } from 'react-redux';
import { addEditModalStateChange } from '../actions/movieActions';

class NavbarContainer extends Component {
    render() {
        const { addEditModalStateChange } = this.props;
        return (
            <Navbar buttonOnClick={addEditModalStateChange}/>
        )
    }
}

export default connect(null, { addEditModalStateChange })(NavbarContainer);