import React from "react";
import { Form, Input } from "antd";
import { useDispatch, useSelector } from "react-redux";
import { ShowLoading, HideLoading } from "../../redux/rootSlice.js";
import axios from "axios";
import { message } from "antd";

export default function AdminIntro() {
  const dispatch = useDispatch();
  const { portfolioData } = useSelector((state) => state.root);

  const onFinish = async (values) => {
    try {
      dispatch(ShowLoading());
      const response = await axios.post(
        "http://localhost:3000/api/portfolio/update-intro",
        {
          ...values,
          _id: portfolioData.intro._id,
        }
      );
      dispatch(HideLoading());

      if (response.data.success) {
        message.success(response.data.message);
      } else {
        message.error(response.data.message);
      }
    } catch (error) {
      dispatch(HideLoading());
      message.error(error.message);
    }
  };

  return (
    <div id="adminIntro">
      <Form
        onFinish={onFinish}
        layout="vertical"
        initialValues={portfolioData.intro}
      >
        <Form.Item name="welcomeText" label="Welcome Text">
          <Input type="text" placeholder="Welcome Text" />
        </Form.Item>
        <Form.Item name="name" label="Full Name">
          <Input type="text" placeholder="Full Name" />
        </Form.Item>
        <Form.Item name="caption" label="Caption">
          <Input type="text" placeholder="Caption" />
        </Form.Item>
        <Form.Item name="desc" label="Description">
          <Input.TextArea placeholder="Description" rows={4} />
        </Form.Item>
        <div className="flex justify-end mr-2">
          <button
            type="submit"
            className="px-4 py-2 bg-[#EE6C4D] rounded-md font-semibold !text-white cursor-pointer hover:bg-[#ee6d4d78]"
          >
            SAVE
          </button>
        </div>
      </Form>
    </div>
  );
}
