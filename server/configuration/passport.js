import { ExtractJwt, Strategy as JwtStrategy } from "passport-jwt";

const opts = {
  jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),

  secretOrKey: "secret",
};
