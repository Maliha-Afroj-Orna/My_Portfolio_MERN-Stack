import {
  Intro,
  About,
  Banner,
  Project,
  Resume,
} from "../models/portfolioModel.js";

// get all portfolio data
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

// update intro
export const updateIntro = async (req, res) => {
  try {
    const intro = await Intro.findByIdAndUpdate(
      {_id: req.body._id},
      req.body,
      {new: true}
    );

    res.status(200).send({
      data: intro,
      success: true,
      message: "Intro updated successfully"
  });
  } catch (error) {
    res.status(500).send(error);
  }
}

// update about
export const updateAbout = async (req, res) => {
  try {
    const about = await About.findByIdAndUpdate(
      {_id: req.body._id},
      req.body,
      {new: true}
    );

    res.status(200).send({
      data: about,
      success: true,
      message: "About updated successfully"
  });
  } catch (error) {
    res.status(500).send(error);
  }
}

// update banner
export const updateBanner = async (req, res) => {
  try {
    const banner = await Banner.findByIdAndUpdate(
      {_id: req.body._id},
      req.body,
      {new: true}
    )

    res.status(200).send({
      data: banner,
      success: true,
      message: "Banner updated successfully"
    })
  } catch (error) {
    res.status(500).send(error);
  }
}

// update projects
export const updateProject = async (req, res) => {
  try {
    const project = await Project.findByIdAndUpdate(
      {_id: req.body._id},
      req.body,
      {new: true}
    )

    res.status(200).send({
      data: project,
      success: true,
      message: "Project updated successfully"
    })
  } catch (error) {
    res.status(500).send(error);
  }
}

// update resume
export const updateResume = async (req, res) => {
  try {
    const resume = await Resume.findByIdAndUpdate(
      {_id: req.body._id},
      req.body,
      {new: true}
    )

    res.status(200).send({
      data: resume,
      success: true,
      message: "Resume updated successfully"
    })
  } catch (error) {
    res.status(500).send(error);
  }
}
