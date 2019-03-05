let mongoose = require('mongoose');

let userSchema = new mongoose.Schema({
	name: {
		type: String,
		required: true
	},
	bio: {
		type: String,
		required: true,
		max: 1500
	},
	activityPreference: {
		type: Number,
		min: 0,
		max: 5
	},
	preferredCallDuration: {
		type: Number,
		min: 10
	},

	topicsOfInterest: {
		type: String,
		required: true,
		enum: ['Academics', 'Athletics', 'Hobbies', 'Sports', 'Random']
	}

})