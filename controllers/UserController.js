import { UserService } from '../services';

const signUp = async (req, res) => {
  try {
    const { nickname, email, password } = req.body;

    //회원가입시 필요한 필수 키
    const requiredKeys = ['nickname', 'email', 'password'];

    for (let key of requiredKeys) {
      if (!req.body[key]) {
        let err = new Error(`KEY_ERROR: ${key}`);
        err.statusCode = 400;
        throw err;
      }
    }

    await UserService.signUp(nickname, email, password);
    res.status(201).json({ message: 'SIGNUP_SUCCESS', email });
  } catch (err) {
    console.log(err);
    res.status(err.statusCode || 500).json({ message: err.message });
  }
};

const logIn = async (req, res) => {
  try {
    const { email, password } = req.body;

    const requiredKeys = ['email', 'password'];

    for (let key of requiredKeys) {
      if (!req.body[key]) {
        let err = new Error(`KEY_ERROR: ${key}`);
        err.statusCode = 400;
        throw err;
      }
    }

    const accessToken = await UserService.logIn(email, password);

    res.status(200).json({ message: 'LOGIN_SUCCESS', accessToken });
  } catch (err) {
    res.status(err.statusCode || 500).json({ message: err.message });
  }
};

export default { signUp, logIn };
