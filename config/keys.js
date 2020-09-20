const DB_NAME = 'explore-mern'
const TEST_USER = {
	username: 'test-user-666',
	password: 'JNc55seNGFXe3wlW'
}

module.exports = {
	mongoURI: `mongodb+srv://${TEST_USER.username}:${TEST_USER.password}@cluster0.pmzhk.mongodb.net/${DB_NAME}?retryWrites=true&w=majority`,
	secretOrKey: 'secret'
}