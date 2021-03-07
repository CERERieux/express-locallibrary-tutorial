var mongoose = require('mongoose');

var Schema = mongoose.Schema;

var GenreSchema = new Schema(
	/*
	Declare a virtual for the genre's URL, named url.
	Export the model.*/
	{
		name: {type: String, required:true, minLength:3, maxLength:100},
	}
);

//Virtual for genre's URL
GenreSchema
.virtual('url')
.get(function(){
	return '/catalog/genre/'+ this.id;
});

module.exports = mongoose.model('Genre', GenreSchema);