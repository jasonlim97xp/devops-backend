const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');
const Schema = mongoose.Schema;

// Create a schema
const userSchema = new Schema({
  email: {
    type: String,
    required: true,
    unique: true,
    lowercase: true
  },
  name:{
    type:String,
    required:true
  },
  password: { 
    type: String,
    required: true
  }
});

userSchema.pre('save', async function(next){
    try{
        const salt = await bcrypt.genSalt(10);
        //Hash the password
        const saltedPassword = await bcrypt.hash(this.password, salt);
        this.password = saltedPassword;
        next();
    }catch(error){
        next(error);
    }
})

userSchema.methods.isValidPassword = async function(newPassword){
    try{
        return await bcrypt.compare(newPassword, this.password);
    }catch(error){
        throw new Error(error);
    }
}
// Create a model
const User = mongoose.model('user', userSchema);

// Export the model
module.exports = User;