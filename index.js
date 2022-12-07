const cookieSession = require("cookie-session");
const express = require("express");
const cors = require("cors");
const passportSetup = require("./passport")
const authRoute =  require("./routes/auth")
const passport = require("passport");
const app = express();
//Now let us handle the cookie session from google, facebook and  the like

app.use(
  cookieSession({
    name: "session",
    keys: ["sheriff"],
    maxAge: 24 * 60 * 60 * 1000,
  })
);

app.use(passport.initialize());
app.use(passport.session());

app.use(
  cors({
    origin: "https://social-login-frontend.netlify.app",
    methods: "GET,POST,PUT,DELETE",
    credentials: true,
  })
);

app.use("/auth", authRoute)

app.listen("5000", () => {
  console.log("Server is running!");
});
