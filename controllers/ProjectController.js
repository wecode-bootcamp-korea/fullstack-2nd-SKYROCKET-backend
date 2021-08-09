import { ProjectService } from '../services';
import errorGenerator from '../utils/errorGenerator';

const getProject = async (req, res) => {
  console.log(await ProjectService.getDetail(Number(req.params.id)));
  try {
    const { id } = req.params;
    const { totalBackers, detailData } = await ProjectService.getDetail(
      Number(id)
    );

    res.status(200).json({ message: 'SUCCESS', totalBackers, detailData });
  } catch (err) {
    console.log(err);
    res.status(err.statusCode || 500).json({ message: err.message });
  }
};

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

const findAllCategories = async (req, res) => {
  try {
    const categories = await ProjectService.findAllCategories();

    res.status(200).json({ message: 'SUCCESS_GET_CATEGORIES', categories });
  } catch (err) {
    res.status(err.statusCode || 500).json({ message: err.message });
  }
};

const findAllStatuses = async (req, res) => {
  try {
    const statuses = await ProjectService.findAllStatuses();

    res.status(200).json({ message: 'SUCCESS_GET_STATUSES', statuses });
  } catch (err) {
    res.status(err.statusCode || 500).json({ message: err.message });
  }
};

export default { getProject, findProjects, findAllCategories, findAllStatuses };
