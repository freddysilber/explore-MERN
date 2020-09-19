import axios from 'axios'
import React from 'react'

const createUser = user => {
	console.log(user)
	axios.post(`${process.env.SERVER_BASE}/create-user`)
		.then(data => {
			console.log(data)
		})
		.catch(error => {
			console.error(error)
		})
}

export default createUser