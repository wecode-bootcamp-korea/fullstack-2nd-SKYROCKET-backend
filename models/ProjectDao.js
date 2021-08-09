import prisma from '../prisma';

const getProjectDetail = async (id) => {
  return await prisma.project.findMany({
    where: {
      id,
    },
    select: {
      id: true,
      name: true,
      openDate: true,
      endDate: true,
      achievedAmount: true,
      goalAmount: true,
      paymentDate: true,
      description: true,
      categories: {
        select: {
          id: true,
          koreanName: true,
        },
      },
      creators: {
        select: {
          users: {
            select: {
              id: true,
              nickname: true,
              profileImageUrl: true,
              userIntroduction: true,
            },
          },
        },
      },
      images: {
        select: {
          projectThumbnailUrl: true,
          detailImageUrl: true,
        },
      },
      options: {
        select: {
          optionName: true,
          optionDetail: true,
          price: true,
        },
      },
    },
  });
};

const pledges = async (id) => {
  const findByProjectId = await prisma.pledge.findMany({
    where: {
      options: {
        projectId: {
          equals: id,
        },
      },
    },
    select: {
      optionId: true,
      userId: true,
    },
  });
  return findByProjectId;
};

const countAllBackers = async (id) => {
  return await prisma.pledge.count({
    where: {
      options: {
        projectId: id,
      },
    },
  });
};

const getProjects = async (offset = 0, limit = 9, categoryId, statusId) => {
  let queryArgs = {};

  if (categoryId) {
    queryArgs = {
      categoryId: parseInt(categoryId),
    };
  }

  if (statusId) {
    queryArgs = {
      ...queryArgs,
      statusId: parseInt(statusId),
    };
  }

  return await prisma.project.findMany({
    where: {
      ...queryArgs,
    },
    select: {
      id: true,
      name: true,
      openDate: true,
      endDate: true,
      achievedAmount: true,
      goalAmount: true,
      summary: true,
      creators: {
        select: {
          users: {
            select: {
              nickname: true,
            },
          },
        },
      },
      images: {
        select: {
          projectThumbnailUrl: true,
        },
      },
      categories: {
        select: {
          koreanName: true,
        },
      },
      statuses: {
        select: {
          status: true,
        },
      },
    },
    take: parseInt(limit),
    skip: parseInt(offset),
    orderBy: {
      id: 'asc',
    },
  });
};

const getCategoryId = async (categoryId) => {
  return await prisma.project.findFirst({
    where: {
      categoryId: parseInt(categoryId),
    },
    select: {
      categoryId: true,
    },
  });
};

const getStatusId = async (statusId) => {
  return await prisma.project.findFirst({
    where: {
      statusId: parseInt(statusId),
    },
    select: {
      statusId: true,
    },
  });
};

const getAllCategories = async () => {
  return await prisma.category.findMany({
    select: {
      id: true,
      koreanName: true,
      englishName: true,
    },
    orderBy: {
      id: 'asc',
    },
  });
};

const getAllStatuses = async () => {
  return await prisma.status.findMany({
    select: {
      id: true,
      status: true,
    },
    orderBy: {
      id: 'asc',
    },
  });
};

export default {
  getProjects,
  getCategoryId,
  getStatusId,
  getAllCategories,
  getAllStatuses,
  getProjectDetail,
  pledges,
  countAllBackers,
};
