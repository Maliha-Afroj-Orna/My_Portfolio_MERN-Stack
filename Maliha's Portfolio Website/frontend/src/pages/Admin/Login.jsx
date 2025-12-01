import React, { useState } from "react";
import axios from "axios";
import { message } from "antd";
import { HideLoading, ShowLoading } from "../../redux/rootSlice.js";
import { useDispatch } from "react-redux";

export default function Login() {
  const [user, setUser] = useState({
    username: "",
    password: "",
  });

  const dispatch = useDispatch();

  const login = async (e) => {
    e.preventDefault();

    try {
      dispatch(ShowLoading());
      const response = await axios.post(
        "http://localhost:3000/api/portfolio/admin-login",
        user
      );
      dispatch(HideLoading());

      if (response.data.success) {
        message.success(response.data.message);
        localStorage.setItem("token", JSON.stringify(response.data));
        window.location.href = "/admin";
      } else {
        message.error(response.data.message);
      }
    } catch (error) {
      message.error(error.message);
      dispatch(HideLoading());
    }
  };

  return (
    <div className="flex flex-col items-center justify-center h-screen gap-2">
      <h1 className="text-2xl font-semibold">Maliha - Admin Login</h1>

      <form className="bg-white border border-gray-200 mx-auto w-2/3 md:w-1/4 p-6 rounded-md shadow-lg">
        <div className="flex flex-col gap-6 py-4">
          <input
            className="w-full text-lg p-3 border border-gray-400 rounded-md outline-none"
            type="text"
            placeholder="Username"
            value={user.username}
            onChange={(e) => setUser({ ...user, username: e.target.value })}
          />

          <input
            className="w-full text-lg p-3 border border-gray-400 rounded-md outline-none"
            type="password"
            placeholder="Password"
            value={user.password}
            onChange={(e) => setUser({ ...user, password: e.target.value })}
          />

          <button
            className="!text-white bg-[#EE6C4D] text-center !mx-auto text-lg font-semibold cursor-pointer w-[120px] px-2 py-2 rounded-md hover:bg-black hover:text-white"
            type="submit"
            onClick={login}
          >
            Login
          </button>
        </div>
      </form>
    </div>
  );
}
