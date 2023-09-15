var mongoose = require("mongoose");
// Get the Schema constructor
var Schema = mongoose.Schema;

// Using Schema constructor, create a ArtSchema
var profileSchema = new Schema({
      fullname:{
        type: String,
        required: true
      },
      email: {
        type: String,
        required: true
      }
});

// Create model from the schema
var Profile = mongoose.model("Profile", profileSchema);

// Export model
module.exports = Profile;