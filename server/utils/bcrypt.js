import bcrypt from "bcrypt";

const saltRounds = 10;
const salt = await bcrypt.genSalt(saltRounds);
const hashedPasword = async (userPassword) => {
  let hashedPassword = await bcrypt.hash(userPassword, salt);
  return hashedPassword;
};

export { hashedPasword };
