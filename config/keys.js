const DB_NAME = 'explore-mern' // Name of the database to use
// Info for our test user (admin) Mongo requires at least one user in order to connect to the DB
const TEST_USER = {
	username: 'test-user-666',
	password: 'JNc55seNGFXe3wlW'
}

module.exports = {
	mongoURI: `mongodb+srv://${TEST_USER.username}:${TEST_USER.password}@cluster0.pmzhk.mongodb.net/${DB_NAME}?retryWrites=true&w=majority`,
	secretOrKey: 'secret'
}