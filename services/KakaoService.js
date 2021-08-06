import { KakaoDao } from '../models';
import axios from 'axios';
import jwt from 'jsonwebtoken';

const { JWT_SECRET_KEY } = process.env;

const getKakaoEmail = async (accessToken) => {
  try {
    const kakaoUserInfo = await axios({
      method: 'POST',
      url: 'https://kapi.kakao.com/v2/user/me',
      headers: {
        Authorization: `Bearer ${accessToken}`,
      },
      withCredentials: true,
    });

    const kakaoEmail = kakaoUserInfo.data.kakao_account.email
      ? kakaoUserInfo.data.kakao_account.email
      : null;

    return kakaoEmail;
  } catch (err) {
    console.log(err);
    throw new Error(err);
  }
};

const createToken = async (kakaoUserInfo) => {
  const token = jwt.sign({ kakaoUserInfo }, JWT_SECRET_KEY, {
    expiresIn: '1h',
  });
  return token;
};

const kakaoLogin = async (kakaoEmail) => {
  try {
    const existingKakaoUser = await KakaoDao.findUserByEmail(kakaoEmail);

    if (existingKakaoUser) {
      return await createToken(existingKakaoUser.email);
    }

    await KakaoDao.createKakaoUser(kakaoEmail);
    return await createToken(existingKakaoUser.email);
  } catch (err) {
    console.log(err);
    throw new Error(err);
  }
};

export default { getKakaoEmail, createToken, kakaoLogin };
