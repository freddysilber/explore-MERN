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

	handleSubmit(event) {
		console.log(event)
	}

	handleChange(event) {
		this.setState({
			[event.target.name]: event.target.value
		})
	}

	render() {
		return (
			<div>
				<div>Signup/ Login</div>
				<form onSubmit={this.handleSubmit}>
					<input type="text" value={this.state.username} onChange={this.handleChange} />

					<label>Username: <input type="text" name="username" /></label>
					<label>Email: <input type="email" name="email" /></label>
					<label>Password: <input type="password" name="password" /></label>
					<input type="submit" value="Submit" />
				</form>
			</div >
		)
	}
}