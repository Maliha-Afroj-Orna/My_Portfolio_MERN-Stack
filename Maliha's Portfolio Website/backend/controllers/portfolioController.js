import {
  Intro,
  About,
  Banner,
  Project,
  Resume,
} from "../models/portfolioModel.js";

export const getPortfolio = async (req, res) => {
  try {
    const intros = await Intro.find();
    const abouts = await About.find();
    const banners = await Banner.find();
    const projects = await Project.find();
    const resumes = await Resume.find();

    res.status(200).send({
      intro: intros,
      about: abouts,
      banner: banners,
      project: projects,
      resume: resumes,
    });
  } catch (error) {
    res.status(500).send(error);
  }
};
