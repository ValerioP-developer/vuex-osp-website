const Profile = require('../models/profile');
const logger = require("../../utils/logger");


const addUser = async (req, res) => {
    try {
      const {fullname,email} =  req.body;
      const profile = new Profile({fullname,email})
      //console.log("CONTROLLERS-GET-HELLOWORLD   save profile"  +profile)
    
      await profile.save()
      .then(function(profile) {
          // Log the successful
          logger.info("Profile Saved successfully into the DB:", {
            profile: profile
          });
           res.json({ status: 200, profile: profile });
      })
    }catch (error) {
      // Handle errors and send an error response
      res.status(500).json({
        status: error.statusCode || 500,
        error: error.message,
      });
    }
};


module.exports = {
    addUser
}