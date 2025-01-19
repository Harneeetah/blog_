const moogoose = require('mongoose');

//Define a schema
const Schema = moogoose.Schema;

//Define blog schema
const BlogSchema = new Schema({
    title: {
        type: String,
        required: true
    },
    Post: {
        type: String,
        required: false
    },
    username: {
        type: Schema.Types.String,
        ref:"User",
        required: true},
    createAt : {
        type: Date,
        default: Date.now
    },
    lastUpdateAt : {
        type: Date,
        default: Date.now
    },
});

// Export the model
module.exports = moogoose.model('Blogs', BlogSchema); //collection name is Books. This is the name of the collection in the database