import request from 'supertest';
import app from '../app';
import prisma from '../prisma';
import { users } from './data/user';

describe('testUserSignUp', () => {
  test('testUserSignUpSuccess', (done) => {
    request(app)
      .post('/user/join')
      .send({
        nickname: '헬로퓨처',
        email: 'hello',
        password: 'future',
      })
      .expect(201, { message: 'SIGNUP_SUCCESS', email: 'hello' })
      .end(done);
  });

  test('testUserSignUpNicknameKeyError', (done) => {
    request(app)
      .post('/user/join')
      .send({
        email: 'hello',
        password: 'future',
      })
      .expect(400, { message: 'KEY_ERROR: nickname' })
      .end(done);
  });

  test('testUserSignUpDuplicatedEmailError', (done) => {
    request(app)
      .post('/user/join')
      .send({
        nickname: '눈물줄줄',
        email: 'hello',
        password: 'future',
      })
      .expect(409, { message: 'EMAIL_ALREADY_IN_USE' })
      .end(done);
  });

  afterAll(async () => {
    await prisma.user.deleteMany();
  });
});

describe('testUserLogIn', () => {
  beforeAll(async () => {
    await Promise.all(
      users.map(async (user) => {
        await prisma.user.create({
          data: user,
        });
      })
    );
  });

  test('testLogInAndGetRightToken', async () => {
    const res = await request(app).post('/user/login').send({
      email: 'nakha',
      password: 'future',
    });
    expect(res.status).toBe(200);
    expect(res.body.accessToken).toMatch('eyJhbGci');
    expect(res.body.message).toBe('LOGIN_SUCCESS');
  });

  test('testUserLogInPasswordKeyError', (done) => {
    request(app)
      .post('/user/login')
      .set('Accept', 'application/json')
      .send({
        email: 'hello',
      })
      .expect(400, { message: 'KEY_ERROR: password' })
      .end(done);
  });

  test('testUserLogInInvalidUser', (done) => {
    request(app)
      .post('/user/login')
      .send({
        email: 'hello',
        password: '12345',
      })
      .set('Accept', 'application/json')
      .expect(400, { message: 'INVALID_USER' })
      .end(done);
  });
  afterAll(async () => {
    await prisma.user.deleteMany();
    prisma.$disconnect();
  });
});
