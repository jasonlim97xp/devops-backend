const jwt = require('jsonwebtoken');
const User = require('../models/user');
const {JWT_SECRET} = require('../configuration');

signToken = user => {
    return jwt.sign({
        iss: 'DevOpsApplicationAPI',
        sub: user._id,
        iat: new Date().getTime(),
        exp: new Date().setDate(new Date().getDate() + 1)
    }, JWT_SECRET);
}

module.exports = {
    root: async(req,res,next)=>{
        return res.send("Connected to root")
    },
    signUp: async (req, res, next) => {
        const { email, name, password } = req.value.body;

        //Check existing email
        const existingUser = await User.findOne({ email });
        if (existingUser) {
            return res.status(403).json({ error: 'Email exist!' })
        }

        //Create new user
        const newUser = new User({ email, name, password });
        await newUser.save();

        //Generate token
        const token = signToken(newUser);
        res.status(200).json({ token });
    },
    signIn: async (req, res, next) => {
        
        //Generate token
        const token = signToken(req.user);
        res.status(200).json({token});

    },
    secret: async (req, res, next) => {
        res.json({secret:"resource"});
        console.log('UserController.secret() called');
    },
    getAllName: async (req,res,next) => {
        console.log('Getting all user');
        try{
            const result = await User.find({},{_id: 0, name: 1});
            res.send(result);

        }catch(error){
            console.log(error.message)
        }
    }
}