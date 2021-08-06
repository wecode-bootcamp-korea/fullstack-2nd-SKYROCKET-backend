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

export default { findProjects };
