import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { Button } from '@material-ui/core'
import { Routes } from '../../utils/routes'

class Navbar extends Component {
	render() {
		return (
			<div className='navbar-fixed'>
				<nav className='z-depth-0'>
					<div className='nav-wrapper white'>
						<Button component={Link} to={Routes.home}>Home</Button>
					</div>
				</nav>
			</div>
		)
	}
}

export default Navbar