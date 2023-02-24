import bcrypt from "bcrypt";

const saltRounds = 10;
const salt = await bcrypt.genSalt(saltRounds);
const hashedPasword = async (userPassword) => {
  let hashedPassword = await bcrypt.hash(userPassword, salt);
  return hashedPassword;
};

const comparePasswords = async (loginPassword, userPassword) => {
  const result = await bcrypt.compare(loginPassword, userPassword);
  return result;
};

export { hashedPasword, comparePasswords };
