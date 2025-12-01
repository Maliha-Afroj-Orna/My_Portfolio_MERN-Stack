import React, { useMemo } from "react";
import { Form, Input, Button, Space } from "antd";
import { MinusCircleOutlined, PlusOutlined } from "@ant-design/icons";
import { useDispatch, useSelector } from "react-redux";
import { ShowLoading, HideLoading } from "../../redux/rootSlice.js";
import axios from "axios";
import { message } from "antd";

export default function AdminProject() {
  const dispatch = useDispatch();
  const { portfolioData } = useSelector((state) => state.root);

  const normalizedProjects = useMemo(() => {
    const projectData = portfolioData?.project;
    if (!projectData) return [];
    const projects = projectData.projects || [];
    return projects.map((p) => ({
      title: p.title || "",
      desc: p.desc || "",
      img: p.img || "",
      category: p.category || "",
    }));
  }, [portfolioData]);

  const onFinish = async (values) => {
    const _id = portfolioData?.project?._id;
    if (!_id) {
      return message.error("Project document id not found.");
    }

    const projects = (values.projects || []).map((p) => ({
      title: (p.title || "").trim(),
      desc: p.desc || "",
      img: p.img || "/images/default.png",
      category: (p.category || "").trim(),
    }));

    const categories = Array.from(
      new Set(projects.map((p) => p.category))
    ).filter(Boolean);

    const payload = { ...values, _id, projects, categories };

    try {
      dispatch(ShowLoading());
      const response = await axios.post(
        "http://localhost:3000/api/portfolio/update-project",
        payload
      );

      if (response.data?.success) {
        message.success(response.data.message || "Updated successfully");
      } else {
        message.error(response.data?.message || "Update failed");
      }
    } catch (err) {
      message.error(
        err?.response?.data?.message || err.message || "Server error"
      );
    } finally {
      dispatch(HideLoading());
    }
  };

  return (
    <div>
      <Form
        id="adminProject"
        layout="vertical"
        onFinish={onFinish}
        initialValues={{
          projects: normalizedProjects,
        }}
      >
        <Form.List name="projects">
          {(fields, { add, remove }) => (
            <>
              <label className="font-medium">Projects</label>
              {fields.map(({ key, name, ...restField }) => (
                <Space
                  key={key}
                  style={{ display: "flex", marginBottom: 8, gap: 8 }}
                  align="start"
                >
                  <Form.Item
                    {...restField}
                    name={[name, "title"]}
                    rules={[
                      { required: true, message: "Missing Project title" },
                    ]}
                  >
                    <Input placeholder="Project title (e.g. React Js Project)" />
                  </Form.Item>

                  <Form.Item {...restField} name={[name, "desc"]}>
                    <Input placeholder="Description (e.g. React.Js + Node.Js + MongoDB)" />
                  </Form.Item>

                  <Form.Item {...restField} name={[name, "img"]}>
                    <Input placeholder="Image URL (e.g. /images/react.png)" />
                  </Form.Item>

                  <Form.Item
                    {...restField}
                    name={[name, "category"]}
                    rules={[{ required: true, message: "Missing category" }]}
                  >
                    <Input placeholder="Category (e.g. React, Node, MERN)" />
                  </Form.Item>

                  <MinusCircleOutlined
                    onClick={() => remove(name)}
                    style={{ marginTop: 8 }}
                  />
                </Space>
              ))}

              <Form.Item>
                <Button
                  type="dashed"
                  onClick={() => add()}
                  block
                  icon={<PlusOutlined />}
                >
                  Add Project
                </Button>
              </Form.Item>
            </>
          )}
        </Form.List>

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
