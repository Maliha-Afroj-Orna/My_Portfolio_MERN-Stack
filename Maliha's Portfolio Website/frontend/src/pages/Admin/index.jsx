import React from "react";
import Header from "../../components/Header.jsx";
import { Tabs } from "antd";
import AdminIntro from "./AdminIntro.jsx";
import AdminAbout from "./AdminAbout.jsx";
import { useSelector } from "react-redux";
import AdminBanner from "./AdminBanner.jsx";
import AdminProject from "./AdminProject.jsx";
import AdminResume from "./AdminResume.jsx";

const items = [
  {
    key: "1",
    label: <span className="text-lg font-semibold">Intro</span>,
    children: <AdminIntro />,
  },
  {
    key: "2",
    label: <span className="text-lg font-semibold">About</span>,
    children: <AdminAbout />,
  },
  {
    key: "3",
    label: <span className="text-lg font-semibold">Banner</span>,
    children: <AdminBanner />,
  },
  {
    key: "4",
    label: <span className="text-lg font-semibold">Projects</span>,
    children: <AdminProject />,
  },
  {
    key: "5",
    label: <span className="text-lg font-semibold">Resume</span>,
    children: <AdminResume />,
  },
];

export default function Admin() {
  const { portfolioData } = useSelector((state) => state.root);
  return (
    <div>
      <Header />
      {portfolioData && (
        <div className="mt-5 p-10">
          <Tabs defaultActiveKey="1" items={items} />
        </div>
      )}
    </div>
  );
}
