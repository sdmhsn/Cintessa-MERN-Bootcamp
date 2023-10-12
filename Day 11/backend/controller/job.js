import Job from '../model/Job.js';

export const createJob = async (req, res) => {
  /*
    Sample 1:
    const job = await Job({
      name: req.body.name,
      agency: req.body.agency,
      category: req.body.category,
      skill: req.body.skill,
    });
    await job.save();
  */

  /* Sample 2: */
  const payload = req.body;
  // console.log(payload);
  const job = await Job(payload);
  await job.save();

  return res.send({ message: 'Job created', data: job });
};

export const job = async (req, res) => {
  const job = await Job.find({});

  return res.send(job);
};

export const updateJob = async (req, res) => {
  const payload = req.body;
  // console.log(payload);
  const id = req.params.id;
  const jobIdData = await Job.findById(id).exec();
  // console.log(jobIdData);

  /* Sample 1
  const jobUpdated = await Job.findOneAndUpdate(jobIdData, {
    name: req.body.name,
    agency: req.body.agency,
    category: req.body.category,
    skill: req.body.skill,
  }); // the new data output will automatically show in postman output
  */

  /* Sample 2 */
  const jobUpdated = await Job.findOneAndUpdate(jobIdData, payload, {
    new: true, // if true, return the modified document rather than the original (the new data output will show in postman output, if false the data won't show / still the original data)
    runValidators: true,
  });

  return res.send({ message: 'Job updated', data: jobUpdated });
};

export const deleteJob = async (req, res) => {
  const id = req.params.id;
  // console.log(id);
  const dataDeleted = await Job.findById(id);
  const deletedJob = await Job.deleteOne({ _id: id });

  return res.send({ message: 'Job deleted', data: dataDeleted });
};

export const getJobById = async (req, res) => {
  const id = req.params.id;
  const job = await Job.findById(id);
  // console.log(job);

  return res.send(job);
};
