const passport = require('passport');
const JwtStrategy = require('passport-jwt').Strategy;
const { ExtractJwt } = require('passport-jwt');
const LocalStrategy = require('passport-local').Strategy;
const { JWT_SECRET } = require('./configuration');
const User = require('./models/user');

//JWT Strategy
passport.use(new JwtStrategy({
    jwtFromRequest: ExtractJwt.fromHeader('authorization'),
    secretOrKey: JWT_SECRET
}, async (payload, done) => {
    try {
        const user = await User.findById(payload.sub);  //Find user specified in token

        if (!user) {  //If user doesn't exist
            return done(null, false);
        }

        done(null, user);   //Return user   

    } catch (error) {
        done(error, false);
    }
}));

//Local Strategy
passport.use(new LocalStrategy({
    usernameField: 'email'
}, async (email, password, done) => {
    try {
        //Check if user exist
        const user = await User.findOne({ email });

        if (!user) {
            return done(null, false);
        }

        //Check if password matches
        const isMatch = await user.isValidPassword(password);

        if (!isMatch) {
            return done(null, false);
        }

        done(null, user);
        
    } catch (error) {
        done(error, false);
    }

}))