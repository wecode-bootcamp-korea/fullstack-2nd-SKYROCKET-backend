import prisma from '../prisma';

const createKakaoUser = async (email) => {
  return await prisma.user.create({
    data: {
      email,
      socialPlatform: 'kakao',
    },
  });
};

const findUserByEmail = async (email) => {
  return await prisma.user.findUnique({
    where: {
      email,
    },
  });
};

export default { createKakaoUser, findUserByEmail };
