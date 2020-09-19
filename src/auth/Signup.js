import React from 'react'
import axios from 'axios'

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

		axios.post(`${process.env.REACT_APP_SERVER_BASE}/create-user`, this.state)
			.then(data => {
				console.log(data)
			})
			.catch(error => {
				console.error(error)
			})
	}

	render() {
		return (
			<div>
				<div><u>Signup/ Login</u></div>

				<form onSubmit={this.handleSubmit} className="signupUp">
					<label>Username:
						<input type="text" name="username" value={this.state.username} onChange={this.handleChange} placeholder="Username" />
					</label>
					<label>Email:
						<input type="email" name="email" value={this.state.email} onChange={this.handleChange} placeholder="Email" />
					</label>
					<label>Password:
						<input type="password" name="password" value={this.state.password} onChange={this.handleChange} placeholder="Password" />
					</label>

					<input type="submit" value="Submit" />
				</form>
			</div >
		)
	}
}

// function notFound(req, res, next) {
// 	res.status(404).send({error: 'Not found!', status: 404, url: req.originalUrl})
//   }

//   // eslint-disable-next-line
//   function errorHandler(err, req, res, next) {
// 	console.error('ERROR', err)
// 	const stack =  process.env.NODE_ENV !== 'production' ? err.stack : undefined
// 	res.status(500).send({error: err.message, stack, url: req.originalUrl})
//   }