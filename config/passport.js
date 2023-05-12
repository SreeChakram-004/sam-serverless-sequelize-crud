const JwtStrategy = require('passport-jwt').Strategy,
    ExtractJwt = require('passport-jwt').ExtractJwt;

const User = require('../models').User;

module.exports = function(passport) {
    const opts = {
        jwtFromRequest: ExtractJwt.fromAuthHeaderWithScheme('JWT'),
        secretOrKey: 'nodeauthsecret'
    };
    passport.use('jwt',new JwtStrategy(opts, function(jwy_payload, done){
        User
            .findByPk(jwt_payload.id)
            .then((user)=>{return done(null, user)})
            .catch((error) =>{return done(error, false)} )
    }));
    
}