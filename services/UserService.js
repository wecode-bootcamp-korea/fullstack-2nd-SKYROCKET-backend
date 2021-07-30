import { UserDao } from '../models';
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';

const { JWT_SECRET_KEY } = process.env;

const signUp = async (nickname, email, password) => {
  const saltRounds = 10;
  const salt = await bcrypt.genSalt(saltRounds);
  const hashedPw = await bcrypt.hash(password, salt);

  const existingUser = await UserDao.findUserByEmail(email);

  if (existingUser) {
    const error = new Error('EMAIL_ALREADY_IN_USE');
    error.statusCode = 409;
    throw error;
  }
  return await UserDao.createUser(nickname, email, hashedPw);
};

const logIn = async (email, password) => {
  const userInfo = await UserDao.findUserByEmail(email);
  let err;

  if (userInfo === null) {
    err = new Error('INVALID_USER');
    err.statusCode = 400;
    throw err;
  }

  const { id, password: hashedPassword } = userInfo;
  const isMatch = await bcrypt.compare(password, hashedPassword);

  if (!isMatch) {
    err = new Error('INVALID_USER');
    err.statusCode = 400;
    throw err;
  }

  const accessToken = jwt.sign({ id }, JWT_SECRET_KEY, {
    expiresIn: '30m',
  });

  return accessToken;
};

export default { signUp, logIn };
