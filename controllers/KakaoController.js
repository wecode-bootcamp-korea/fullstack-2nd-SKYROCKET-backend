import { KakaoService } from '../services';

const kakaoLogin = async (req, res) => {
  try {
    const auth = req.headers.authorization;
    const accessToken = auth.replace('Bearer ', '');
    const kakaoEmail = await KakaoService.getKakaoEmail(accessToken);

    if (!kakaoEmail) {
      return res.status(401).json({ message: 'INVALID_TOKEN' });
    }

    const token = await KakaoService.kakaoLogin(kakaoEmail);

    return res.status(200).json({ message: 'SUCCESS', token });
  } catch (err) {
    console.log(err);
    res.status(err.statusCode || 500).json({ message: err.message });
  }
};

export default { kakaoLogin };
