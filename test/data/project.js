const categories = [
  {
    id: 1,
    koreanName: '게임',
    englishName: 'game',
  },
  { id: 2, koreanName: '패션', englishName: 'fashion' },
  { id: 3, koreanName: '음악', englishName: 'music' },
];

const creators = [
  {
    id: 1,
    userId: 2,
    accountNumber: '1112223333',
  },
  {
    id: 2,
    userId: 3,
    accountNumber: '2223334444',
  },
];

const users = [
  {
    id: 1,
    email: 'user1@mail.com',
    nickname: '개미는오늘도열심히일을하네',
  },
  { id: 2, email: 'user2@mail.com', nickname: '나는부자가될거야' },
  { id: 3, email: 'user3@mail.com', nickname: 'Praiteg' },
  {
    id: 4,
    email: 'user14mail.com',
    nickname: '박코드',
  },
];

const statuses = [
  {
    id: 1,
    status: '진행중인 프로젝트',
  },
  {
    id: 2,
    status: '종료된 프로젝트',
  },
];

const images = [
  {
    id: 1,
    projectId: 1,
    detailImageUrl:
      'https://images.unsplash.com/photo-1601042879364-f3947d3f9c16?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=2134&q=80',
    projectThumbnailUrl:
      'https://images.unsplash.com/photo-1564049489314-60d154ff107d?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1961&q=80',
  },
  {
    id: 2,
    projectId: 2,
    detailImageUrl:
      'https://images.unsplash.com/photo-1571065497914-38c5d3cde715?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1050&q=80',
    projectThumbnailUrl:
      'https://images.unsplash.com/photo-1569002925653-ed18f55d7292?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80',
  },
  {
    id: 3,
    projectId: 3,
    detailImageUrl:
      'https://images.unsplash.com/photo-1624274579623-18121fc8126e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2000&q=80',
    projectThumbnailUrl:
      'https://images.unsplash.com/flagged/photo-1624274555889-4a70c880579c?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=2000&q=80',
  },
  {
    id: 4,
    projectId: 4,
    detailImageUrl:
      'https://images.unsplash.com/photo-1605131546405-65fedb62861f?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=2000&q=80',
    projectThumbnailUrl:
      'https://images.unsplash.com/photo-1610288311735-39b7facbd095?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1951&q=80',
  },
  {
    id: 5,
    projectId: 5,
    detailImageUrl:
      'https://images.unsplash.com/photo-1522198763288-96e9f39904af?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1050&q=80',
    projectThumbnailUrl:
      'https://images.unsplash.com/photo-1546087760-2753fd6fc7b7?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1189&q=80',
  },
  {
    id: 6,
    projectId: 6,
    detailImageUrl:
      'https://images.unsplash.com/photo-1577538925948-983e757fa7dd?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80',
    projectThumbnailUrl:
      'https://images.unsplash.com/photo-1490119551293-c52fcfd96381?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=2000&q=80',
  },
  {
    id: 7,
    projectId: 7,
    detailImageUrl:
      'https://images.unsplash.com/photo-1552308995-2baac1ad5490?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80',
    projectThumbnailUrl:
      'https://images.unsplash.com/photo-1512455102796-376c00aaacb8?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80',
  },
  {
    id: 8,
    projectId: 8,
    detailImageUrl:
      'https://images.unsplash.com/photo-1557787163-1635e2efb160?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1952&q=80',
    projectThumbnailUrl:
      'https://images.unsplash.com/photo-1506157786151-b8491531f063?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1950&q=80',
  },
  {
    id: 9,
    projectId: 9,
    detailImageUrl:
      'https://images.unsplash.com/photo-1415201364774-f6f0bb35f28f?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80',
    projectThumbnailUrl:
      'https://images.unsplash.com/photo-1530051315435-58046fbc2649?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80',
  },
  {
    id: 10,
    projectId: 10,
    detailImageUrl:
      'https://images.unsplash.com/photo-1605958611031-c91316261ab0?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80',
    projectThumbnailUrl:
      'https://images.unsplash.com/photo-1579158362234-cdc57d55a502?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1051&q=80',
  },
];

const projects = [
  {
    id: 1,
    name: '사이버펑크 슈팅액션게임 <키>',
    openDate: '2021-07-28T00:00:00.000Z',
    endDate: '2021-08-28T23:59:59.000Z',
    achievedAmount: '4573000',
    goalAmount: '5000000',
    summary:
      '화려한 사이버펑크 세계관을 배경으로 진행되는 슈팅 액션 게임. 저항군이 되어 싸워보세요!',
    description:
      "기관총으로 무장한 주인공은 거대 재벌의 부패한 도시를 오릅니다. 도시에 숨겨진 비밀을 밝혀내고, '키'를 찾아내 복수하기 위해. 사이버펑크 디스토피아를 배경으로 펼쳐지는 역동적이고 스타일리쉬한 슈팅액션게임, <키>입니다. <키>는 플레이어의 조작에 따라 모든 방향으로 자유롭게 발사 가능한 특수한 총을 중심으로 진행되는 슈팅액션 게임입니다. 지형과 상황에 따라 다양한 총으로 무장하여 적을 빠르게 해치울 수 있습니다.",
    paymentDate: '2021-08-29T10:00:00.000Z',
    categoryId: 1,
    creatorId: 2,
    statusId: 1,
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
    description:
      '<Escape>는 게임 속 배경이 되는 장소에서 직접 주인공이 되어 다양한 스토리와 테마를 가지고 현장에서 단서를 찾아 퀘스트를 해결하는 게임입니다. 게임 속 여러 장치와 두뇌 게임들은 <Escape>의 즐거움을 극대화 시킵니다. 에피소드마다 다른 이야기 속 주인공이 되어 현장 곳곳을 누비게 됩니다. 다양한 퀘스트와 숨겨진 스토리를 따라가다보면 자연스럽게 평소 눈여겨 보지 않았던 것도 다시 볼 수 있습니다.',
    paymentDate: '2021-08-15T10:00:00.000Z',
    categoryId: 1,
    creatorId: 1,
    statusId: 1,
  },
  {
    id: 3,
    name: '새로운 타로 카드 <The Cards>',
    openDate: '2021-07-20T00:00:00.000Z',
    endDate: '2021-08-05T23:59:59.000Z',
    achievedAmount: '675500',
    goalAmount: '500000',
    summary: '새로운 디자인의 타로카드 세트입니다.',
    description:
      '타로 카드 점을 본 적 있나요? 타로 가게에 가서 점을 보는 것도 좋지만, 내가 직접 점술사가 되어 내 타로 카드로 가족과 친구, 그리고 나를 점쳐볼 수 있습니다. 나만의 타로 카드를 소장하면 타로가 주는 에너지와 기운을 느끼고 간직할 수 있습니다. 편집부를 사로잡은 너무나 아름다운 디자인의 타로 카드입니다. 흔하디 흔한 유니버셜 웨이트 타로나 너무 소녀 취향의 그림체의 타로가 아닌 이런 힙한 디자인의 타로카드는 분명 우리만 좋아하는 건 아니겠지, 예쁜 건 함께봐야지!!!',
    paymentDate: '2021-08-16T10:00:00.000Z',
    categoryId: 1,
    creatorId: 2,
    statusId: 1,
  },
  {
    id: 4,
    name: '환절기에 딱 좋은 가디건',
    openDate: '2021-08-01T00:00:00.000Z',
    endDate: '2021-08-10T23:59:59.000Z',
    achievedAmount: '8341250',
    goalAmount: '3000000',
    summary: '환절기에 휘뚜루마뚜루 걸치기 좋은 바로 그 가디건!',
    description:
      '니트 조직의 가디건입니다. 쾌적하고 슬림하게 연출되지만 흐르는 듯 루즈한 매력이 있는 제품이에요. 니팅 텍스처이지만 무척이나 시어한 소재감을 가지고있어 환절기 시즌 활용해보기 좋을 것 같아요. 숄더를 타고 루즈하게 흐르는 실루엣은 더욱 여리해보이는 법…! 전 컬러 미세한 비침이 있으니 구매 시에 참고해주세요.',
    paymentDate: '2021-08-11T10:00:00.000Z',
    categoryId: 2,
    creatorId: 1,
    statusId: 1,
  },
  {
    id: 5,
    name: '21세기 현대사회를 나기 위한 노트북 가방',
    openDate: '2021-07-12T00:00:00.000Z',
    endDate: '2021-07-31T23:59:59.000Z',
    achievedAmount: '9047000',
    goalAmount: '700000',
    summary: '깔끔한 디자인의 현대 사회인을 위한 노트북 가방. ',
    description:
      '험난한 출퇴근길, 여러분의 소중한 노트북을 안전하게 지켜줄거에요. 노트북 사용자의 업무 효율을 높히고 기기 보호에 최적화된 제품입니다. 소재부터 공정 하나하나 직접 개발하고, 테스트하고, 생산했습니다. 깔끔한 디자인, 여러 악세서리를 넣을 수 있는 여유 공간까지 사용자의 편의성을 고려해 제작했습니다.',
    paymentDate: '2021-08-01T10:00:00.000Z',
    categoryId: 2,
    creatorId: 2,
    statusId: 2,
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
    description:
      '사용이 끝나 무차별하게 버려졌던 방수천을 재가공하여 가치 있고 멋진 가방으로 만들었습니다. 가방 곳곳에 작은 포켓이 있어 작은 소지품들을 수납하기에 제격입니다. 업사이클링 소재로 제작하는 제품이며 방수천이 사용되는 부분에 따라 세상에 단 하나뿐인 나만의 제품이 탄생합니다. 색상과 패턴은 랜덤으로 결정됩니다!',
    paymentDate: '2021-09-03T10:00:00.000Z',
    categoryId: 2,
    creatorId: 1,
    statusId: 1,
  },
  {
    id: 7,
    name: '굉장해 멋있어 프로그래밍 스티커',
    openDate: '2021-07-07T00:00:00.000Z',
    endDate: '2021-08-06T23:59:59.000Z',
    achievedAmount: '1006000',
    goalAmount: '800000',
    summary: '노트북에 붙이면 본새가 나는 리유저블 스티커',
    description:
      '개발자들을 위한 스티커입니다. 노트북, 컵, 물병, 태블릿, 스마트폰, 캐리어 등 어디든 붙일 수 있습니다. 방수 소재 리무버블 PVC이기 때문에 여러번 부착하여 재사용이 가능합니다! 한 세트에 모두 다른 디자인의 스티커를 제공합니다. 내가 좋아하고 자신이는 기술이나 언어를 원하는 장비에 붙여서 나를 표현해보세요!',
    paymentDate: '2021-08-07T10:00:00.000Z',
    categoryId: 2,
    creatorId: 2,
    statusId: 1,
  },
  {
    id: 8,
    name: '#we_remember_kpop',
    openDate: '2021-08-02T00:00:00.000Z',
    endDate: '2021-08-15T23:59:59.000Z',
    achievedAmount: '976281000',
    goalAmount: '45000000',
    summary: '코로나 이전의 케이팝을 추억하는 온라인 공연, #we_remember_kpop',
    description:
      '코로나로 인해 콘서트 금단 현상이 온 여러분을 위해 야심차게 준비했습니다. 2세대 k-pop 아이돌부터 4세대 아이돌에 오기까지의 시대를 아우른 히트곡들에 대해 참여 아티스트들과 함께 이야기를 나누고, 그들의 커버무대를 즐길 수 있는 기회입니다. 그리고 현장에서 공개하는 특별 손님까지! 다들 즐길 준비 되셨나요? 그럼 외쳐보겠습니다. #we_remember_kpop!',
    paymentDate: '2021-08-16T10:00:00.000Z',
    categoryId: 3,
    creatorId: 1,
    statusId: 1,
  },
  {
    id: 9,
    name: '위워크에 흐르는 재즈를 담은 첫 앨범',
    openDate: '2021-07-15T00:00:00.000Z',
    endDate: '2021-08-12T23:59:59.000Z',
    achievedAmount: '2183000',
    goalAmount: '2000000',
    summary: '위워크에 흐르는 재즈를 담은 첫 앨범',
    description:
      '업무 효율이 두배로 늘어나는 위워크의 재즈곡들로 엄선했습니다. 그리고 텀블벅 펀딩 한정으로 유명 재즈 밴드가 연주한 라이브버전이 수록되니 이 기회를 꼭 놓치지 마세요!',
    paymentDate: '2021-08-13T10:00:00.000Z',
    categoryId: 3,
    creatorId: 2,
    statusId: 1,
  },
  {
    id: 10,
    name: 'We Will Rock You',
    openDate: '2021-07-01T00:00:00.000Z',
    endDate: '2021-08-20T23:59:59.000Z',
    achievedAmount: '11579000',
    goalAmount: '3000000',
    summary: '인디 록밴드들이 뭉쳤습니다. 첫 컴필레이션 앨범을 냅니다.',
    description:
      '활기를 잃어가는 인디/서브컬쳐 (indie/subculture) 문화의 침체와 다양성을 잃어가고 획일화 되어가는 현 음악 씬에서, 각자의 개성을 가지고 꾸준히 다양한 색을 가진 음악을 들려주고 있는 멋진 아티스트들을 하나로 모아 무엇을 해보면 재미있을까 고민하다가, 씬에 없던 특별한 indie 컴필레이션 앨범을 내면 좋겠다는 생각에 기획하게 되었습니다.',
    paymentDate: '2021-08-21T10:00:00.000Z',
    categoryId: 3,
    creatorId: 1,
    statusId: 1,
  },
];

export { categories, creators, users, statuses, images, projects };
