import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { logoutUser } from '../../actions/authActions'
import { Button } from '@material-ui/core'

class Dashboard extends Component {
	onLogoutClick = event => {
		event.preventDefault()
		this.props.logoutUser()
	}

	render() {
		const { user } = this.props.auth
		return (
			<div style={{ height: '75vh' }} className='container valign-wrapper'>
				<div className='row'>
					<div className='landing-copy col s12 center-align'>
						<h4>
							<b>Hey there,</b> {user.name.split(' ')[0]}
							<p className='flow-text grey-text text-darken-1'>
								You are logged into a full-stack{' '}
								<span style={{ fontFamily: 'monospace' }}>MERN</span> app 👏
              				</p>
						</h4>
						<Button variant="contained" color="secondary" onClick={this.onLogoutClick}>Logout</Button>
					</div>
				</div>
			</div>
		)
	}
}

Dashboard.propTypes = {
	logoutUser: PropTypes.func.isRequired,
	auth: PropTypes.object.isRequired
}

const mapStateToProps = state => ({
	auth: state.auth
})

export default connect(mapStateToProps, { logoutUser })(Dashboard)