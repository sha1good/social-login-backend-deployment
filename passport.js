const GoogleStrategy = require("passport-google-oauth20").Strategy;
const GithubStrategy = require("passport-github2").Strategy;
const FacebookStrategy = require("passport-facebook").Strategy;

const passport = require("passport")


const GOOGLE_CLIENT_ID =
  "222359955544-v4q42d5k3jfk360ahjn90crnelpfh000.apps.googleusercontent.com";

const GOOGLE_CLIENT_SECRET = "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";


const GITHUB_CLIENT_ID = "3207229ca9ff046ff404";
 const GITHUB_CLIENT_SECRET = "10c97350da77fe8f3c7413ae216e6a44ec8b1162";

 
 
const FACEBOOK_APP_ID = "635364548275883";
const FACEBOOK_APP_SECRET = "c15a00e4cd775042b831c95ff2e6aa81";

passport.use(new GoogleStrategy({
    clientID: GOOGLE_CLIENT_ID,
    clientSecret: GOOGLE_CLIENT_SECRET,
    callbackURL: "/auth/google/callback"
  },
  function(accessToken, refreshToken, profile, done) {
    // User.findOrCreate({ googleId: profile.id }, function (err, user) {
    //   return cb(err, user);
    // }); //Use this when you are connecting to maybe MongoDB database
    done(null,profile)
  }
));

passport.use(
    new GithubStrategy(
      {
        clientID: GITHUB_CLIENT_ID,
        clientSecret: GITHUB_CLIENT_SECRET,
        callbackURL: "/auth/github/callback",
      },
      function (accessToken, refreshToken, profile, done) {
        done(null, profile);
      }
    )
  );

  passport.use(
    new FacebookStrategy(
      {
        clientID: FACEBOOK_APP_ID,
        clientSecret: FACEBOOK_APP_SECRET,
        callbackURL: "/auth/facebook/callback",
      },
      function (accessToken, refreshToken, profile, done) {
        done(null, profile);
      }
    )
  );

passport.serializeUser((user,done) =>{
    done(null, user)
})

passport.deserializeUser((user,done)=>{
    done(null, user)
})