import React, { useEffect } from "react";
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

  useEffect(() => {
    if (!localStorage.getItem("token")) {
      window.location.href = "/admin-login";
    }
  });

  return (
    <div>
      <Header />
      <div className="flex flex-row justify-between">
        <h1 className="text-2xl px-10 py-4 text-black font-semibold cursor-pointer">
          Portfolio Admin
        </h1>
        <h1
          className="underline font-semibold text-lg cursor-pointer px-12 py-4 hover:text-blue-700"
          onClick={() => {
            localStorage.removeItem("token");
            window.location.href = "/admin-login";
          }}
        >
          Logout
        </h1>
      </div>
      {portfolioData && (
        <div className="mt-2 px-10 pb-4">
          <Tabs defaultActiveKey="1" items={items} />
        </div>
      )}
    </div>
  );
}
