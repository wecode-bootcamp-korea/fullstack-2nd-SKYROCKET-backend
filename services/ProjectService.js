import { ProjectDao } from '../models';
import errorGenerator from '../utils/errorGenerator';

const findProjects = async (offset, limit, categoryId, statusId) => {
  if (categoryId) {
    const categoryInfo = await ProjectDao.getCategoryId(categoryId);
    !categoryInfo &&
      errorGenerator({
        statusCode: 400,
        message: 'INVALID_CATEGORY',
      });
  }

  if (statusId) {
    const statusInfo = await ProjectDao.getStatusId(statusId);
    !statusInfo &&
      errorGenerator({
        statusCode: 400,
        message: 'INVALID_STATUS',
      });
  }

  const projects = await ProjectDao.getProjects(
    offset,
    limit,
    categoryId,
    statusId
  );

  return projects.map(
    ({
      id,
      name,
      openDate,
      endDate,
      achievedAmount,
      goalAmount,
      summary,
      creators: {
        users: { nickname: creator },
      },
      images: [{ projectThumbnailUrl: imageUrl }],
      categories: { koreanName: category },
      statuses: { status },
    }) => ({
      id,
      name,
      openDate,
      endDate,
      achievedAmount,
      goalAmount,
      summary,
      creator,
      imageUrl,
      category,
      status,
    })
  );
};

const findAllCategories = async () => {
  const categories = await ProjectDao.getAllCategories();

  return categories.reduce((results, item, index) => {
    results[index] = {
      id: item.id,
      category: { koreanName: item.koreanName, englishName: item.englishName },
    };

    return results;
  }, []);
};

const findAllStatuses = async () => {
  return await ProjectDao.getAllStatuses();
};

const getDetail = async (id) => {
  const totalBackers = await ProjectDao.countAllBackers(id);
  const details = await ProjectDao.getProjectDetail(id);

  if (totalBackers < 0) {
    errorGenerator({
      statusCode: 400,
      message: 'INVALID_BACKERS_NUMBER',
    });
  }

  if (details.length === 0) {
    errorGenerator({
      statusCode: 400,
      message: 'INVALID_PROJECT',
    });
  }
  const detailData = details.map(
    ({
      id,
      name,
      openDate,
      endDate,
      achievedAmount,
      goalAmount,
      paymentDate,
      description,
      creators: {
        users: { nickname: creator, profileImageUrl, userIntroduction },
      },
      images: [
        { projectThumbnailUrl: thumbnailUrl, detailImageUrl: detailImageUrl },
      ],
      categories: { koreanName: category },
      options: [{ optionName, optionDetail, price }],
    }) => ({
      id,
      name,
      openDate,
      endDate,
      achievedAmount,
      goalAmount,
      paymentDate,
      description,
      creator,
      profileImageUrl,
      userIntroduction,
      thumbnailUrl,
      detailImageUrl,
      category,
      optionName,
      optionDetail,
      price,
    })
  );

  return { totalBackers, detailData };
};

export default {
  getDetail,
  findProjects,
  findAllCategories,
  findAllStatuses,
};
