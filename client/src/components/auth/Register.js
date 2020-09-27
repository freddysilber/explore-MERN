import React, { Component } from 'react'
import { Link, withRouter } from 'react-router-dom'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { registerUser } from '../../actions/authActions'
import classnames from 'classnames'
import { Button } from '@material-ui/core'
import { Routes } from '../../utils/routes'

class Register extends Component {
	constructor() {
		super()
		this.state = {
			name: '',
			email: '',
			password: '',
			password2: '',
			errors: {}
		}
	}

	componentDidMount() {
		// If logged in and user navigates to Register page, should redirect them to dashboard
		if (this.props.auth.isAuthenticated) {
			this.props.history.push(Routes.dashboard)
		}
	}

	componentWillReceiveProps(nextProps) {
		if (nextProps.errors) {
			this.setState({
				errors: nextProps.errors
			})
		}
	}
	// Change event from form inputs
	onChange = event => this.setState({ [event.target.id]: event.target.value })

	onSubmit = event => {
		event.preventDefault()
		const newUser = {
			name: this.state.name,
			email: this.state.email,
			password: this.state.password,
			password2: this.state.password2
		}
		this.props.registerUser(newUser, this.props.history)
	}

	render() {
		const { errors } = this.state

		return (
			<div className='container'>
				<div className='row'>
					<div className='col s8 offset-s2'>
						<div className='col s12' style={{ paddingLeft: '11.250px' }}>
							<h4><b>Register</b></h4>
							<p className='grey-text text-darken-1'>
								Already have an account? <Button component={Link} to={Routes.login}>Login</Button>
							</p>
						</div>
						<form noValidate onSubmit={this.onSubmit}>
							<div className='input-field col s12'>
								<input
									onChange={this.onChange}
									value={this.state.name}
									error={errors.name}
									id='name'
									type='text'
									className={classnames('', { invalid: errors.name })}
								/>
								<label htmlFor='name'>Name</label>
								<span className='red-text'>{errors.name}</span>
							</div>
							<div className='input-field col s12'>
								<input
									onChange={this.onChange}
									value={this.state.email}
									error={errors.email}
									id='email'
									type='email'
									className={classnames('', { invalid: errors.email })} />
								<label htmlFor='email'>Email</label>
								<span className='red-text'>{errors.email}</span>
							</div>
							<div className='input-field col s12'>
								<input
									onChange={this.onChange}
									value={this.state.password}
									error={errors.password}
									id='password'
									type='password'
									className={classnames('', { invalid: errors.password })} />
								<label htmlFor='password'>Password</label>
								<span className='red-text'>{errors.password}</span>
							</div>
							<div className='input-field col s12'>
								<input
									onChange={this.onChange}
									value={this.state.password2}
									error={errors.password2}
									id='password2'
									type='password'
									className={classnames('', { invalid: errors.password2 })} />
								<label htmlFor='password2'>Confirm Password</label>
								<span className='red-text'>{errors.password2}</span>
							</div>
							<br />
							<Button variant="contained" color="primary" type="submit">Sign up</Button>
						</form>
					</div>
				</div>
			</div>
		)
	}
}

Register.propTypes = {
	registerUser: PropTypes.func.isRequired,
	auth: PropTypes.object.isRequired,
	errors: PropTypes.object.isRequired
}

const mapStateToProps = state => ({
	auth: state.auth,
	errors: state.errors
})

export default connect(mapStateToProps, { registerUser })(withRouter(Register))