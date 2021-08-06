import { ProjectService } from '../services';
import errorGenerator from '../utils/errorGenerator';

const findProjects = async (req, res) => {
  try {
    const { offset, limit, category, status } = req.query;

    const intRegex = /^\+?\d+$/;

    if (
      (offset && !intRegex.test(offset)) ||
      (limit && !intRegex.test(limit)) ||
      (category && !intRegex.test(category)) ||
      (status && !intRegex.test(status))
    ) {
      errorGenerator({
        statusCode: 400,
        message: 'INVALID_QUERY_PARAMS_VALUE',
      });
    }

    const projects = await ProjectService.findProjects(
      offset,
      limit,
      category,
      status
    );

    res.status(200).json({ message: 'SUCCESS_GET_PROJECTS', projects });
  } catch (err) {
    res.status(err.statusCode || 500).json({ message: err.message });
  }
};

export default { findProjects };
