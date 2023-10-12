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
