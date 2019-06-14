const User = require('../../models/user.js');
const LocalStrategy = require('passport-local').Strategy;

const strategy = new LocalStrategy(
	{
		usernameField: 'email'
	},
	(email, password, done) => {
		email = email.toLowerCase();

		User.findOne({ 'email': email }, (err, userMatch) => {
			if (err) {
				return done(err)
			}
			if (!userMatch) {
				return done(null, false)
			}
			if (!userMatch.checkPassword(password)) {
				return done(null, false)
			}
			return done(null, userMatch)
		});
	}
);

module.exports = strategy;
