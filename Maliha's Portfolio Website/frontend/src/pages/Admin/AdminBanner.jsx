import React from "react";
import { Form, Input } from "antd";
import { useDispatch, useSelector } from "react-redux";
import { ShowLoading, HideLoading } from "../../redux/rootSlice";
import axios from "axios";
import { message } from "antd";

export default function AdminBanner() {
  const dispatch = useDispatch();
  const { portfolioData } = useSelector((state) => state.root);

  const onFinish = async (values) => {
    try {
      dispatch(ShowLoading());
      const response = await axios.post(
        "http://localhost:3000/api/portfolio/update-banner",
        {
          ...values,
          _id: portfolioData.banner._id,
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
    <div>
      <Form
        id="adminBanner"
        layout="vertical"
        onFinish={onFinish}
        initialValues={portfolioData.banner}
      >
        <Form.Item name="bannerTitle" label="Banner Title">
          <Input placeholder="Banner Title" />
        </Form.Item>
        <Form.Item name="bannerDesc" label="Banner Description">
          <Input.TextArea placeholder="Banner Description" rows={4} />
        </Form.Item>
        <div className="flex justify-end mt-4">
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
