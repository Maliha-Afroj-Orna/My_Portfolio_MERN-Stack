import mongoose from "mongoose";

const introSchema = new mongoose.Schema({
  welcomeText: {
    type: String,
    required: true,
  },
  name: {
    type: String,
    required: true,
  },
  caption: {
    type: String,
    required: true,
  },
  desc: {
    type: String,
    required: true,
  },
});

const aboutSchema = new mongoose.Schema({
  profileImage: {
    type: String,
    required: true,
  },
  desc: {
    type: String,
    required: true,
  },
  name: {
    type: String,
    required: true,
  },
  DOB: {
    type: String,
    required: true,
  },
  address: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  skills: {
    type: Array,
    required: true,
  },
});

const bannerSchema = new mongoose.Schema({
  bannerTitle: {
    type: String,
    required: true,
  },
  bannerDesc: {
    type: String,
    required: true,
  },
  bannerImg: {
    type: String,
    required: true,
  },
});

const projectSchema = new mongoose.Schema({
  categories: {
    type: Array,
    required: true,
  },
  projects: {
    type: Array,
    required: true,
  },
});

const resumeSchema = new mongoose.Schema({
  profileImg: {
    type: String,
    required: true,
  },
  eduDesc: {
    type: Array,
    required: true,
  },
  workDesc: {
    type: Array,
    required: true,
  },
});

const Intro = mongoose.model("Intro", introSchema);
const About = mongoose.model("About", aboutSchema);
const Banner = mongoose.model("Banner", bannerSchema);
const Project = mongoose.model("Project", projectSchema);
const Resume = mongoose.model("Resume", resumeSchema);

export { Intro, About, Banner, Project, Resume };
