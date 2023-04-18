var mongoose = require("mongoose");
// Get the Schema constructor
var Schema = mongoose.Schema;

// Using Schema constructor, create a ArtSchema
var postSchema = new Schema({
  title: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  content: {
    type: String,
    required: true,
  },
  date: {
    type: String,
    required: true,
  },
});

// Create model from the schema
var Post = mongoose.model("Post", postSchema);

// Export model
module.exports = Post;
