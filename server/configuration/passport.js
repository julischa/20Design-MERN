import { ExtractJwt, Strategy as JwtStrategy } from "passport-jwt";

const opts = {
  jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),

  secretOrKey: "secret",
};

const jwtStrategy = new JwtStrategy(opts, (jwt_payload, done) => {
  // Use the payload information to find the user in your database
  User.findById(jwt_payload.sub)
    .then((user) => {
      if (user) {
        // Authentication succeeded, call `done` with the user object
        done(null, user);
      } else {
        // Authentication failed, call `done` with `false`
        done(null, false);
      }
    })
    .catch((err) => done(err, false));
});
