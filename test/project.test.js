import request from 'supertest';
import prisma from '../prisma';
import app from '../app';
import {
  categories,
  creators,
  users,
  statuses,
  images,
  projects,
} from './data/project';

describe('TestListAPI', () => {
  beforeAll(async () => {
    await Promise.all(
      categories.map(async (category) => {
        await prisma.category.create({
          data: category,
        });
      })
    );

    await Promise.all(
      users.map(async (user) => {
        await prisma.user.create({
          data: user,
        });
      })
    );

    await Promise.all(
      creators.map(async (creator) => {
        await prisma.creator.create({
          data: creator,
        });
      })
    );

    await Promise.all(
      statuses.map(async (status) => {
        await prisma.status.create({
          data: status,
        });
      })
    );

    await Promise.all(
      projects.map(async (project) => {
        await prisma.project.create({
          data: project,
          include: {
            categories: true,
            creators: true,
            statuses: true,
          },
        });
      })
    );

    await Promise.all(
      images.map(async (image) => {
        await prisma.image.create({
          data: image,
        });
      })
    );
  });

  describe('NoParameters', () => {
    test('successNoParameters', (done) => {
      request(app)
        .get('/project')
        .set('Accept', 'application/json')
        .expect(200, {
          message: 'SUCCESS_GET_PROJECTS',
          projects: [
            {
              id: 1,
              name: '사이버펑크 슈팅액션게임 <키>',
              openDate: '2021-07-28T00:00:00.000Z',
              endDate: '2021-08-28T23:59:59.000Z',
              achievedAmount: '4573000',
              goalAmount: '5000000',
              summary:
                '화려한 사이버펑크 세계관을 배경으로 진행되는 슈팅 액션 게임. 저항군이 되어 싸워보세요!',
              creator: 'Praiteg',
              imageUrl:
                'https://images.unsplash.com/photo-1564049489314-60d154ff107d?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1961&q=80',
              category: '게임',
              status: '진행중인 프로젝트',
            },
            {
              id: 2,
              name: '모바일 방탈출 게임 <Escape>',
              openDate: '2021-07-15T00:00:00.000Z',
              endDate: '2021-08-14T23:59:59.000Z',
              achievedAmount: '2000000',
              goalAmount: '2000000',
              summary:
                '살기 위해서 탈출해야한다! 텍스트 기반의 모바일 방탈출 게임 <Escape>입니다.',
              creator: '나는부자가될거야',
              imageUrl:
                'https://images.unsplash.com/photo-1569002925653-ed18f55d7292?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80',
              category: '게임',
              status: '진행중인 프로젝트',
            },
            {
              id: 3,
              name: '새로운 타로 카드 <The Cards>',
              openDate: '2021-07-20T00:00:00.000Z',
              endDate: '2021-08-05T23:59:59.000Z',
              achievedAmount: '675500',
              goalAmount: '500000',
              summary: '새로운 디자인의 타로카드 세트입니다.',
              creator: 'Praiteg',
              imageUrl:
                'https://images.unsplash.com/flagged/photo-1624274555889-4a70c880579c?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=2000&q=80',
              category: '게임',
              status: '진행중인 프로젝트',
            },
            {
              id: 4,
              name: '환절기에 딱 좋은 가디건',
              openDate: '2021-08-01T00:00:00.000Z',
              endDate: '2021-08-10T23:59:59.000Z',
              achievedAmount: '8341250',
              goalAmount: '3000000',
              summary: '환절기에 휘뚜루마뚜루 걸치기 좋은 바로 그 가디건!',
              creator: '나는부자가될거야',
              imageUrl:
                'https://images.unsplash.com/photo-1610288311735-39b7facbd095?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1951&q=80',
              category: '패션',
              status: '진행중인 프로젝트',
            },
            {
              id: 5,
              name: '21세기 현대사회를 나기 위한 노트북 가방',
              openDate: '2021-07-12T00:00:00.000Z',
              endDate: '2021-07-31T23:59:59.000Z',
              achievedAmount: '9047000',
              goalAmount: '700000',
              summary: '깔끔한 디자인의 현대 사회인을 위한 노트북 가방. ',
              creator: 'Praiteg',
              imageUrl:
                'https://images.unsplash.com/photo-1546087760-2753fd6fc7b7?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1189&q=80',
              category: '패션',
              status: '종료된 프로젝트',
            },
            {
              id: 6,
              name: '자연을 보호하는 업사이클 백',
              openDate: '2021-07-29T00:00:00.000Z',
              endDate: '2021-09-02T23:59:59.000Z',
              achievedAmount: '3629000',
              goalAmount: '5000000',
              summary:
                '버려지는 방수천을 활용한 업사이클링 가방 그런데 수납력을 곁들였습니다.',
              creator: '나는부자가될거야',
              imageUrl:
                'https://images.unsplash.com/photo-1490119551293-c52fcfd96381?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=2000&q=80',
              category: '패션',
              status: '진행중인 프로젝트',
            },
            {
              id: 7,
              name: '굉장해 멋있어 프로그래밍 스티커',
              openDate: '2021-07-07T00:00:00.000Z',
              endDate: '2021-08-06T23:59:59.000Z',
              achievedAmount: '1006000',
              goalAmount: '800000',
              summary: '노트북에 붙이면 본새가 나는 리유저블 스티커',
              creator: 'Praiteg',
              imageUrl:
                'https://images.unsplash.com/photo-1512455102796-376c00aaacb8?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80',
              category: '패션',
              status: '진행중인 프로젝트',
            },
            {
              id: 8,
              name: '#we_remember_kpop',
              openDate: '2021-08-02T00:00:00.000Z',
              endDate: '2021-08-15T23:59:59.000Z',
              achievedAmount: '976281000',
              goalAmount: '45000000',
              summary:
                '코로나 이전의 케이팝을 추억하는 온라인 공연, #we_remember_kpop',
              creator: '나는부자가될거야',
              imageUrl:
                'https://images.unsplash.com/photo-1506157786151-b8491531f063?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1950&q=80',
              category: '음악',
              status: '진행중인 프로젝트',
            },
            {
              id: 9,
              name: '위워크에 흐르는 재즈를 담은 첫 앨범',
              openDate: '2021-07-15T00:00:00.000Z',
              endDate: '2021-08-12T23:59:59.000Z',
              achievedAmount: '2183000',
              goalAmount: '2000000',
              summary: '위워크에 흐르는 재즈를 담은 첫 앨범',
              creator: 'Praiteg',
              imageUrl:
                'https://images.unsplash.com/photo-1530051315435-58046fbc2649?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80',
              category: '음악',
              status: '진행중인 프로젝트',
            },
          ],
        })
        .end(done);
    });
  });

  describe('Offset', () => {
    test('successSetOffset', (done) => {
      request(app)
        .get('/project')
        .query({ offset: 3 })
        .set('Accept', 'application/json')
        .expect(200, {
          message: 'SUCCESS_GET_PROJECTS',
          projects: [
            {
              id: 4,
              name: '환절기에 딱 좋은 가디건',
              openDate: '2021-08-01T00:00:00.000Z',
              endDate: '2021-08-10T23:59:59.000Z',
              achievedAmount: '8341250',
              goalAmount: '3000000',
              summary: '환절기에 휘뚜루마뚜루 걸치기 좋은 바로 그 가디건!',
              creator: '나는부자가될거야',
              imageUrl:
                'https://images.unsplash.com/photo-1610288311735-39b7facbd095?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1951&q=80',
              category: '패션',
              status: '진행중인 프로젝트',
            },
            {
              id: 5,
              name: '21세기 현대사회를 나기 위한 노트북 가방',
              openDate: '2021-07-12T00:00:00.000Z',
              endDate: '2021-07-31T23:59:59.000Z',
              achievedAmount: '9047000',
              goalAmount: '700000',
              summary: '깔끔한 디자인의 현대 사회인을 위한 노트북 가방. ',
              creator: 'Praiteg',
              imageUrl:
                'https://images.unsplash.com/photo-1546087760-2753fd6fc7b7?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1189&q=80',
              category: '패션',
              status: '종료된 프로젝트',
            },
            {
              id: 6,
              name: '자연을 보호하는 업사이클 백',
              openDate: '2021-07-29T00:00:00.000Z',
              endDate: '2021-09-02T23:59:59.000Z',
              achievedAmount: '3629000',
              goalAmount: '5000000',
              summary:
                '버려지는 방수천을 활용한 업사이클링 가방 그런데 수납력을 곁들였습니다.',
              creator: '나는부자가될거야',
              imageUrl:
                'https://images.unsplash.com/photo-1490119551293-c52fcfd96381?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=2000&q=80',
              category: '패션',
              status: '진행중인 프로젝트',
            },
            {
              id: 7,
              name: '굉장해 멋있어 프로그래밍 스티커',
              openDate: '2021-07-07T00:00:00.000Z',
              endDate: '2021-08-06T23:59:59.000Z',
              achievedAmount: '1006000',
              goalAmount: '800000',
              summary: '노트북에 붙이면 본새가 나는 리유저블 스티커',
              creator: 'Praiteg',
              imageUrl:
                'https://images.unsplash.com/photo-1512455102796-376c00aaacb8?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80',
              category: '패션',
              status: '진행중인 프로젝트',
            },
            {
              id: 8,
              name: '#we_remember_kpop',
              openDate: '2021-08-02T00:00:00.000Z',
              endDate: '2021-08-15T23:59:59.000Z',
              achievedAmount: '976281000',
              goalAmount: '45000000',
              summary:
                '코로나 이전의 케이팝을 추억하는 온라인 공연, #we_remember_kpop',
              creator: '나는부자가될거야',
              imageUrl:
                'https://images.unsplash.com/photo-1506157786151-b8491531f063?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1950&q=80',
              category: '음악',
              status: '진행중인 프로젝트',
            },
            {
              id: 9,
              name: '위워크에 흐르는 재즈를 담은 첫 앨범',
              openDate: '2021-07-15T00:00:00.000Z',
              endDate: '2021-08-12T23:59:59.000Z',
              achievedAmount: '2183000',
              goalAmount: '2000000',
              summary: '위워크에 흐르는 재즈를 담은 첫 앨범',
              creator: 'Praiteg',
              imageUrl:
                'https://images.unsplash.com/photo-1530051315435-58046fbc2649?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80',
              category: '음악',
              status: '진행중인 프로젝트',
            },
            {
              id: 10,
              name: 'We Will Rock You',
              openDate: '2021-07-01T00:00:00.000Z',
              endDate: '2021-08-20T23:59:59.000Z',
              achievedAmount: '11579000',
              goalAmount: '3000000',
              summary:
                '인디 록밴드들이 뭉쳤습니다. 첫 컴필레이션 앨범을 냅니다.',
              creator: '나는부자가될거야',
              imageUrl:
                'https://images.unsplash.com/photo-1579158362234-cdc57d55a502?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1051&q=80',
              category: '음악',
              status: '진행중인 프로젝트',
            },
          ],
        })
        .end(done);
    });

    test('invalidOffsetValue', (done) => {
      request(app)
        .get('/project')
        .query({ offset: 'asdff' })
        .set('Accept', 'application/json')
        .expect(400, {
          message: 'INVALID_QUERY_PARAMS_VALUE',
        })
        .end(done);
    });
  });

  describe('Limit', () => {
    test('successSetLimit', (done) => {
      request(app)
        .get('/project')
        .query({ limit: 4 })
        .set('Accept', 'application/json')
        .expect(200, {
          message: 'SUCCESS_GET_PROJECTS',
          projects: [
            {
              id: 1,
              name: '사이버펑크 슈팅액션게임 <키>',
              openDate: '2021-07-28T00:00:00.000Z',
              endDate: '2021-08-28T23:59:59.000Z',
              achievedAmount: '4573000',
              goalAmount: '5000000',
              summary:
                '화려한 사이버펑크 세계관을 배경으로 진행되는 슈팅 액션 게임. 저항군이 되어 싸워보세요!',
              creator: 'Praiteg',
              imageUrl:
                'https://images.unsplash.com/photo-1564049489314-60d154ff107d?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1961&q=80',
              category: '게임',
              status: '진행중인 프로젝트',
            },
            {
              id: 2,
              name: '모바일 방탈출 게임 <Escape>',
              openDate: '2021-07-15T00:00:00.000Z',
              endDate: '2021-08-14T23:59:59.000Z',
              achievedAmount: '2000000',
              goalAmount: '2000000',
              summary:
                '살기 위해서 탈출해야한다! 텍스트 기반의 모바일 방탈출 게임 <Escape>입니다.',
              creator: '나는부자가될거야',
              imageUrl:
                'https://images.unsplash.com/photo-1569002925653-ed18f55d7292?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80',
              category: '게임',
              status: '진행중인 프로젝트',
            },
            {
              id: 3,
              name: '새로운 타로 카드 <The Cards>',
              openDate: '2021-07-20T00:00:00.000Z',
              endDate: '2021-08-05T23:59:59.000Z',
              achievedAmount: '675500',
              goalAmount: '500000',
              summary: '새로운 디자인의 타로카드 세트입니다.',
              creator: 'Praiteg',
              imageUrl:
                'https://images.unsplash.com/flagged/photo-1624274555889-4a70c880579c?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=2000&q=80',
              category: '게임',
              status: '진행중인 프로젝트',
            },
            {
              id: 4,
              name: '환절기에 딱 좋은 가디건',
              openDate: '2021-08-01T00:00:00.000Z',
              endDate: '2021-08-10T23:59:59.000Z',
              achievedAmount: '8341250',
              goalAmount: '3000000',
              summary: '환절기에 휘뚜루마뚜루 걸치기 좋은 바로 그 가디건!',
              creator: '나는부자가될거야',
              imageUrl:
                'https://images.unsplash.com/photo-1610288311735-39b7facbd095?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1951&q=80',
              category: '패션',
              status: '진행중인 프로젝트',
            },
          ],
        })
        .end(done);
    });

    test('invalidLimitValue', (done) => {
      request(app)
        .get('/project')
        .query({ limit: 'asdff' })
        .set('Accept', 'application/json')
        .expect(400, {
          message: 'INVALID_QUERY_PARAMS_VALUE',
        })
        .end(done);
    });
  });

  describe('OffsetLimit', () => {
    test('successSetOffsetLimit', (done) => {
      request(app)
        .get('/project')
        .query({ offset: 1, limit: 4 })
        .set('Accept', 'application/json')
        .expect(200, {
          message: 'SUCCESS_GET_PROJECTS',
          projects: [
            {
              id: 2,
              name: '모바일 방탈출 게임 <Escape>',
              openDate: '2021-07-15T00:00:00.000Z',
              endDate: '2021-08-14T23:59:59.000Z',
              achievedAmount: '2000000',
              goalAmount: '2000000',
              summary:
                '살기 위해서 탈출해야한다! 텍스트 기반의 모바일 방탈출 게임 <Escape>입니다.',
              creator: '나는부자가될거야',
              imageUrl:
                'https://images.unsplash.com/photo-1569002925653-ed18f55d7292?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80',
              category: '게임',
              status: '진행중인 프로젝트',
            },
            {
              id: 3,
              name: '새로운 타로 카드 <The Cards>',
              openDate: '2021-07-20T00:00:00.000Z',
              endDate: '2021-08-05T23:59:59.000Z',
              achievedAmount: '675500',
              goalAmount: '500000',
              summary: '새로운 디자인의 타로카드 세트입니다.',
              creator: 'Praiteg',
              imageUrl:
                'https://images.unsplash.com/flagged/photo-1624274555889-4a70c880579c?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=2000&q=80',
              category: '게임',
              status: '진행중인 프로젝트',
            },
            {
              id: 4,
              name: '환절기에 딱 좋은 가디건',
              openDate: '2021-08-01T00:00:00.000Z',
              endDate: '2021-08-10T23:59:59.000Z',
              achievedAmount: '8341250',
              goalAmount: '3000000',
              summary: '환절기에 휘뚜루마뚜루 걸치기 좋은 바로 그 가디건!',
              creator: '나는부자가될거야',
              imageUrl:
                'https://images.unsplash.com/photo-1610288311735-39b7facbd095?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1951&q=80',
              category: '패션',
              status: '진행중인 프로젝트',
            },
            {
              id: 5,
              name: '21세기 현대사회를 나기 위한 노트북 가방',
              openDate: '2021-07-12T00:00:00.000Z',
              endDate: '2021-07-31T23:59:59.000Z',
              achievedAmount: '9047000',
              goalAmount: '700000',
              summary: '깔끔한 디자인의 현대 사회인을 위한 노트북 가방. ',
              creator: 'Praiteg',
              imageUrl:
                'https://images.unsplash.com/photo-1546087760-2753fd6fc7b7?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1189&q=80',
              category: '패션',
              status: '종료된 프로젝트',
            },
          ],
        })
        .end(done);
    });

    test('invalidOffsetLimitValue', (done) => {
      request(app)
        .get('/project')
        .query({ offset: 'asdf', limit: 'asdff' })
        .set('Accept', 'application/json')
        .expect(400, {
          message: 'INVALID_QUERY_PARAMS_VALUE',
        })
        .end(done);
    });
  });

  describe('Category', () => {
    test('successSetCategory', (done) => {
      request(app)
        .get('/project')
        .query({ category: 2 })
        .set('Accept', 'application/json')
        .expect(200, {
          message: 'SUCCESS_GET_PROJECTS',
          projects: [
            {
              id: 4,
              name: '환절기에 딱 좋은 가디건',
              openDate: '2021-08-01T00:00:00.000Z',
              endDate: '2021-08-10T23:59:59.000Z',
              achievedAmount: '8341250',
              goalAmount: '3000000',
              summary: '환절기에 휘뚜루마뚜루 걸치기 좋은 바로 그 가디건!',
              creator: '나는부자가될거야',
              imageUrl:
                'https://images.unsplash.com/photo-1610288311735-39b7facbd095?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1951&q=80',
              category: '패션',
              status: '진행중인 프로젝트',
            },
            {
              id: 5,
              name: '21세기 현대사회를 나기 위한 노트북 가방',
              openDate: '2021-07-12T00:00:00.000Z',
              endDate: '2021-07-31T23:59:59.000Z',
              achievedAmount: '9047000',
              goalAmount: '700000',
              summary: '깔끔한 디자인의 현대 사회인을 위한 노트북 가방. ',
              creator: 'Praiteg',
              imageUrl:
                'https://images.unsplash.com/photo-1546087760-2753fd6fc7b7?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1189&q=80',
              category: '패션',
              status: '종료된 프로젝트',
            },
            {
              id: 6,
              name: '자연을 보호하는 업사이클 백',
              openDate: '2021-07-29T00:00:00.000Z',
              endDate: '2021-09-02T23:59:59.000Z',
              achievedAmount: '3629000',
              goalAmount: '5000000',
              summary:
                '버려지는 방수천을 활용한 업사이클링 가방 그런데 수납력을 곁들였습니다.',
              creator: '나는부자가될거야',
              imageUrl:
                'https://images.unsplash.com/photo-1490119551293-c52fcfd96381?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=2000&q=80',
              category: '패션',
              status: '진행중인 프로젝트',
            },
            {
              id: 7,
              name: '굉장해 멋있어 프로그래밍 스티커',
              openDate: '2021-07-07T00:00:00.000Z',
              endDate: '2021-08-06T23:59:59.000Z',
              achievedAmount: '1006000',
              goalAmount: '800000',
              summary: '노트북에 붙이면 본새가 나는 리유저블 스티커',
              creator: 'Praiteg',
              imageUrl:
                'https://images.unsplash.com/photo-1512455102796-376c00aaacb8?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80',
              category: '패션',
              status: '진행중인 프로젝트',
            },
          ],
        })
        .end(done);
    });

    test('invalidCategoryValue', (done) => {
      request(app)
        .get('/project')
        .query({ category: 'asdff' })
        .set('Accept', 'application/json')
        .expect(400, {
          message: 'INVALID_QUERY_PARAMS_VALUE',
        })
        .end(done);
    });

    test('nonexistentCategory', (done) => {
      request(app)
        .get('/project')
        .query({ category: 9999 })
        .set('Accept', 'application/json')
        .expect(400, {
          message: 'INVALID_CATEGORY',
        })
        .end(done);
    });
  });

  describe('Status', () => {
    test('successSetStatus', (done) => {
      request(app)
        .get('/project')
        .query({ status: 2 })
        .set('Accept', 'application/json')
        .expect(200, {
          message: 'SUCCESS_GET_PROJECTS',
          projects: [
            {
              id: 5,
              name: '21세기 현대사회를 나기 위한 노트북 가방',
              openDate: '2021-07-12T00:00:00.000Z',
              endDate: '2021-07-31T23:59:59.000Z',
              achievedAmount: '9047000',
              goalAmount: '700000',
              summary: '깔끔한 디자인의 현대 사회인을 위한 노트북 가방. ',
              creator: 'Praiteg',
              imageUrl:
                'https://images.unsplash.com/photo-1546087760-2753fd6fc7b7?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1189&q=80',
              category: '패션',
              status: '종료된 프로젝트',
            },
          ],
        })
        .end(done);
    });

    test('invalidStatusValue', (done) => {
      request(app)
        .get('/project')
        .query({ status: 'asdff' })
        .set('Accept', 'application/json')
        .expect(400, {
          message: 'INVALID_QUERY_PARAMS_VALUE',
        })
        .end(done);
    });

    test('nonexistentStatus', (done) => {
      request(app)
        .get('/project')
        .query({ status: 9999 })
        .set('Accept', 'application/json')
        .expect(400, {
          message: 'INVALID_STATUS',
        })
        .end(done);
    });
  });

  describe('CategoryStatus', () => {
    test('successSetCategoryStatus', (done) => {
      request(app)
        .get('/project')
        .query({ category: 3, status: 1 })
        .set('Accept', 'application/json')
        .expect(200, {
          message: 'SUCCESS_GET_PROJECTS',
          projects: [
            {
              id: 8,
              name: '#we_remember_kpop',
              openDate: '2021-08-02T00:00:00.000Z',
              endDate: '2021-08-15T23:59:59.000Z',
              achievedAmount: '976281000',
              goalAmount: '45000000',
              summary:
                '코로나 이전의 케이팝을 추억하는 온라인 공연, #we_remember_kpop',
              creator: '나는부자가될거야',
              imageUrl:
                'https://images.unsplash.com/photo-1506157786151-b8491531f063?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1950&q=80',
              category: '음악',
              status: '진행중인 프로젝트',
            },
            {
              id: 9,
              name: '위워크에 흐르는 재즈를 담은 첫 앨범',
              openDate: '2021-07-15T00:00:00.000Z',
              endDate: '2021-08-12T23:59:59.000Z',
              achievedAmount: '2183000',
              goalAmount: '2000000',
              summary: '위워크에 흐르는 재즈를 담은 첫 앨범',
              creator: 'Praiteg',
              imageUrl:
                'https://images.unsplash.com/photo-1530051315435-58046fbc2649?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80',
              category: '음악',
              status: '진행중인 프로젝트',
            },
            {
              id: 10,
              name: 'We Will Rock You',
              openDate: '2021-07-01T00:00:00.000Z',
              endDate: '2021-08-20T23:59:59.000Z',
              achievedAmount: '11579000',
              goalAmount: '3000000',
              summary:
                '인디 록밴드들이 뭉쳤습니다. 첫 컴필레이션 앨범을 냅니다.',
              creator: '나는부자가될거야',
              imageUrl:
                'https://images.unsplash.com/photo-1579158362234-cdc57d55a502?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1051&q=80',
              category: '음악',
              status: '진행중인 프로젝트',
            },
          ],
        })
        .end(done);
    });

    test('invalidCategoryStatusValue', (done) => {
      request(app)
        .get('/project')
        .query({ category: 'asdf', status: 'asdff' })
        .set('Accept', 'application/json')
        .expect(400, {
          message: 'INVALID_QUERY_PARAMS_VALUE',
        })
        .end(done);
    });

    test('nonexistentCategoryStatus', (done) => {
      request(app)
        .get('/project')
        .query({ category: 777, status: 1 })
        .set('Accept', 'application/json')
        .expect(400, {
          message: 'INVALID_CATEGORY',
        })
        .end(done);
    });
  });

  describe('StatusCategory', () => {
    test('successSetStatusCategory', (done) => {
      request(app)
        .get('/project')
        .query({ status: 1, category: 3 })
        .set('Accept', 'application/json')
        .expect(200, {
          message: 'SUCCESS_GET_PROJECTS',
          projects: [
            {
              id: 8,
              name: '#we_remember_kpop',
              openDate: '2021-08-02T00:00:00.000Z',
              endDate: '2021-08-15T23:59:59.000Z',
              achievedAmount: '976281000',
              goalAmount: '45000000',
              summary:
                '코로나 이전의 케이팝을 추억하는 온라인 공연, #we_remember_kpop',
              creator: '나는부자가될거야',
              imageUrl:
                'https://images.unsplash.com/photo-1506157786151-b8491531f063?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1950&q=80',
              category: '음악',
              status: '진행중인 프로젝트',
            },
            {
              id: 9,
              name: '위워크에 흐르는 재즈를 담은 첫 앨범',
              openDate: '2021-07-15T00:00:00.000Z',
              endDate: '2021-08-12T23:59:59.000Z',
              achievedAmount: '2183000',
              goalAmount: '2000000',
              summary: '위워크에 흐르는 재즈를 담은 첫 앨범',
              creator: 'Praiteg',
              imageUrl:
                'https://images.unsplash.com/photo-1530051315435-58046fbc2649?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80',
              category: '음악',
              status: '진행중인 프로젝트',
            },
            {
              id: 10,
              name: 'We Will Rock You',
              openDate: '2021-07-01T00:00:00.000Z',
              endDate: '2021-08-20T23:59:59.000Z',
              achievedAmount: '11579000',
              goalAmount: '3000000',
              summary:
                '인디 록밴드들이 뭉쳤습니다. 첫 컴필레이션 앨범을 냅니다.',
              creator: '나는부자가될거야',
              imageUrl:
                'https://images.unsplash.com/photo-1579158362234-cdc57d55a502?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1051&q=80',
              category: '음악',
              status: '진행중인 프로젝트',
            },
          ],
        })
        .end(done);
    });

    test('invalidStatusCategoryValue', (done) => {
      request(app)
        .get('/project')
        .query({ status: 'asdff', category: 'asdf' })
        .set('Accept', 'application/json')
        .expect(400, {
          message: 'INVALID_QUERY_PARAMS_VALUE',
        })
        .end(done);
    });

    test('nonexistentStatusCategory', (done) => {
      request(app)
        .get('/project')
        .query({ status: 9999, category: 1 })
        .set('Accept', 'application/json')
        .expect(400, {
          message: 'INVALID_STATUS',
        })
        .end(done);
    });
  });

  describe('FullQueryParams', () => {
    test('successSetFullQueryParams', (done) => {
      request(app)
        .get('/project')
        .query({ offset: 0, limit: 9, category: 2, status: 1 })
        .set('Accept', 'application/json')
        .expect(200, {
          message: 'SUCCESS_GET_PROJECTS',
          projects: [
            {
              id: 4,
              name: '환절기에 딱 좋은 가디건',
              openDate: '2021-08-01T00:00:00.000Z',
              endDate: '2021-08-10T23:59:59.000Z',
              achievedAmount: '8341250',
              goalAmount: '3000000',
              summary: '환절기에 휘뚜루마뚜루 걸치기 좋은 바로 그 가디건!',
              creator: '나는부자가될거야',
              imageUrl:
                'https://images.unsplash.com/photo-1610288311735-39b7facbd095?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1951&q=80',
              category: '패션',
              status: '진행중인 프로젝트',
            },
            {
              id: 6,
              name: '자연을 보호하는 업사이클 백',
              openDate: '2021-07-29T00:00:00.000Z',
              endDate: '2021-09-02T23:59:59.000Z',
              achievedAmount: '3629000',
              goalAmount: '5000000',
              summary:
                '버려지는 방수천을 활용한 업사이클링 가방 그런데 수납력을 곁들였습니다.',
              creator: '나는부자가될거야',
              imageUrl:
                'https://images.unsplash.com/photo-1490119551293-c52fcfd96381?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=2000&q=80',
              category: '패션',
              status: '진행중인 프로젝트',
            },
            {
              id: 7,
              name: '굉장해 멋있어 프로그래밍 스티커',
              openDate: '2021-07-07T00:00:00.000Z',
              endDate: '2021-08-06T23:59:59.000Z',
              achievedAmount: '1006000',
              goalAmount: '800000',
              summary: '노트북에 붙이면 본새가 나는 리유저블 스티커',
              creator: 'Praiteg',
              imageUrl:
                'https://images.unsplash.com/photo-1512455102796-376c00aaacb8?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80',
              category: '패션',
              status: '진행중인 프로젝트',
            },
          ],
        })
        .end(done);
    });

    test('invalidFullQueryParamsValue', (done) => {
      request(app)
        .get('/project')
        .query({
          offset: 'asdf',
          limit: 'qwer',
          category: 'zxcv',
          status: 'hklj',
        })
        .set('Accept', 'application/json')
        .expect(400, {
          message: 'INVALID_QUERY_PARAMS_VALUE',
        })
        .end(done);
    });

    test('nonexistentCategoryStatus', (done) => {
      request(app)
        .get('/project')
        .query({ offset: 0, limit: 9, category: 777, status: 1 })
        .set('Accept', 'application/json')
        .expect(400, {
          message: 'INVALID_CATEGORY',
        })
        .end(done);
    });

    test('nonexistentStatusCategory', (done) => {
      request(app)
        .get('/project')
        .query({ offset: 0, limit: 9, status: 999, category: 1 })
        .set('Accept', 'application/json')
        .expect(400, {
          message: 'INVALID_STATUS',
        })
        .end(done);
    });
  });

  afterAll(async () => {
    await prisma.image.deleteMany();
    await prisma.project.deleteMany();
    await prisma.status.deleteMany();
    await prisma.creator.deleteMany();
    await prisma.user.deleteMany();
    await prisma.category.deleteMany();
    prisma.$disconnect();
  });
});
