const router = require("express").Router();

const passport = require("passport");

const CLIENT_URL = "http://localhost:3000/";

router.get("/login/success", (request, response) => {
  if (request.user) {
    response.status(200).json({
      success: true,
      message: "Successful",
      user: request.user,
      //cookies: request.cookies
    });
  }
});

router.get("/login/failed", (request, response) => {
  response.status(401).json({
    success: false,
    message: "Failed to login",
  });
});

router.get("/logout", (request, response) => {
  request.logout();
  response.redirect(CLIENT_URL);
});

router.get("/google", passport.authenticate("google", { scope: ["profile"] }));

router.get(
  "/google/callback",
  passport.authenticate("google", {
    successRedirect: CLIENT_URL,
    failureRedirect: "/login/failed",
  })
);

router.get("/github", passport.authenticate("github", { scope: ["profile"] }));

router.get(
  "/github/callback",
  passport.authenticate("github", {
    successRedirect: CLIENT_URL,
    failureRedirect: "/login/failed",
  })
);

router.get("/facebook", passport.authenticate("facebook", { scope: ["profile"] }));

router.get(
  "/facebook/callback",
  passport.authenticate("facebook", {
    successRedirect: CLIENT_URL,
    failureRedirect: "/login/failed",
  })
);

module.exports = router;
