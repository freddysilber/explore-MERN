import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import classnames from 'classnames'
import { Button } from '@material-ui/core'
import { loginUser } from '../../actions/authActions'
import { Routes } from '../../utils/routes'

class Login extends Component {
	constructor() {
		super()
		this.state = {
			email: '',
			password: '',
			errors: {}
		}
	}

	componentDidMount() {
		// If logged in and user navigates to Login page, should redirect them to dashboard
		if (this.props.auth.isAuthenticated) {
			this.props.history.push(Routes.dashboard)
		}
	}

	componentWillReceiveProps(nextProps) {
		if (nextProps.auth.isAuthenticated) {
			this.props.history.push(Routes.dashboard)
		}
		if (nextProps.errors) {
			this.setState({
				errors: nextProps.errors
			})
		}
	}

	onChange = event => this.setState({ [event.target.id]: event.target.value })

	onSubmit = event => {
		event.preventDefault()
		const userData = {
			email: this.state.email,
			password: this.state.password
		}
		this.props.loginUser(userData)
	}

	render() {
		const { errors } = this.state

		return (
			<div className='container'>
				<div style={{ marginTop: '1rem' }} className='row'>
					<div className='col s8 offset-s2'>
						<div className='col s12' style={{ paddingLeft: '11.250px' }}>
							<h4>
								<b>Login</b>
							</h4>
							<p className='grey-text text-darken-1'>
								Don't have an account? <Button component={Link} to={Routes.register}>Register</Button>
							</p>
						</div>
						<form noValidate onSubmit={this.onSubmit}>
							<div className='input-field col s12'>
								<input
									onChange={this.onChange}
									value={this.state.email}
									error={errors.email}
									id='email'
									type='email'
									className={classnames('', { invalid: errors.email || errors.emailnotfound })}
								/>
								<label htmlFor='email'>Email</label>
								<span className='red-text'>
									{errors.email}
									{errors.emailnotfound}
								</span>
							</div>
							<div className='input-field col s12'>
								<input
									onChange={this.onChange}
									value={this.state.password}
									error={errors.password}
									id='password'
									type='password'
									className={classnames('', { invalid: errors.password || errors.passwordincorrect })}
								/>
								<label htmlFor='password'>Password</label>
								<span className='red-text'>
									{errors.password}
									{errors.passwordincorrect}
								</span>
							</div>
							<div className='col s12' style={{ paddingLeft: '11.250px' }}>
								<Button variant="contained" color="primary" type="submit">Login</Button>
							</div>
						</form>
					</div>
				</div>
			</div>
		)
	}
}

Login.propTypes = {
	loginUser: PropTypes.func.isRequired,
	auth: PropTypes.object.isRequired,
	errors: PropTypes.object.isRequired
}

const mapStateToProps = state => ({
	auth: state.auth,
	errors: state.errors
})

export default connect(mapStateToProps, { loginUser })(Login)