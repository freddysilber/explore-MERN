import React from 'react'

export default class Signup extends React.Component {
	constructor() {
		super()
		this.state = {
			username: '',
			email: '',
			password: ''
		}
	}

	handleChange = event => {
		const { value, name } = event.target
		this.setState({
			[name]: value
		})
	}

	handleSubmit = event => {
		event.preventDefault()
		console.log(this.state)
		// handle auth and then log user in
	}

	render() {
		return (
			<div>
				<div>Signup/ Login</div>
				<form onSubmit={this.handleSubmit}>
					<label>Username: <input type="text" name="username" value={this.state.username} onChange={this.handleChange} /></label>
					<label>Email: <input type="email" name="email" value={this.state.email} onChange={this.handleChange} /></label>
					<label>Password: <input type="password" name="password" value={this.state.password} onChange={this.handleChange} /></label>
					<input type="submit" value="Submit" />
				</form>
			</div >
		)
	}
}