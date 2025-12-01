import React, { useMemo } from "react";
import { Form, Input, Button, Space } from "antd";
import { MinusCircleOutlined, PlusOutlined } from "@ant-design/icons";
import { useDispatch, useSelector } from "react-redux";
import { ShowLoading, HideLoading } from "../../redux/rootSlice.js";
import axios from "axios";
import { message } from "antd";

export default function AdminAbout() {
  const dispatch = useDispatch();
  const { portfolioData } = useSelector((state) => state.root);

  const normalizedInitialSkills = useMemo(() => {
    const about = portfolioData?.about;
    if (!about) return [];
    const skills = about.skills || [];

    if (skills.length && typeof skills[0] === "string") {
      return skills
        .map((s) => (typeof s === "string" ? s.trim() : ""))
        .filter(Boolean)
        .map((name) => ({ name, score: "", img: "" }));
    }

    if (Array.isArray(skills)) {
      return skills.map((s) => ({
        name: (s && s.name) || "",
        score: (s && s.score) || "",
        img: (s && s.img) || "",
      }));
    }

    return [];
  }, [portfolioData]);

  const onFinish = async (values) => {
    const _id = portfolioData?.about?._id;
    if (!_id) {
      return message.error("About document id not found.");
    }

    const skills = (values.skills || [])
      .map((s) => ({
        name: (s.name || "").trim(),
        score: s.score || "",
        img: s.img || "/images/default.png",
      }))
      .filter((s) => s.name);

    const payload = { ...values, _id, skills };

    try {
      dispatch(ShowLoading());
      const response = await axios.post(
        "http://localhost:3000/api/portfolio/update-about",
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
    <div id="adminAbout" className="p-4">
      <Form
        id="adminAbout"
        onFinish={onFinish}
        layout="vertical"
        initialValues={{
          ...portfolioData?.about,
          skills: normalizedInitialSkills,
        }}
      >
        <Form.Item name="desc" label="Description">
          <Input.TextArea placeholder="Description" rows={4} />
        </Form.Item>

        <Form.Item name="name" label="Full Name">
          <Input placeholder="Full Name" />
        </Form.Item>

        <Form.Item name="DOB" label="Date of Birth">
          <Input placeholder="Date of Birth" />
        </Form.Item>

        <Form.Item name="address" label="Address">
          <Input placeholder="Address" />
        </Form.Item>

        <Form.Item name="email" label="Email">
          <Input type="email" placeholder="Email" />
        </Form.Item>

        <Form.List name="skills">
          {(fields, { add, remove }) => (
            <>
              <label className="font-medium">Skills</label>
              {fields.map(({ key, name, ...restField }) => (
                <Space
                  key={key}
                  style={{ display: "flex", marginBottom: 8, gap: 8 }}
                  align="start"
                >
                  <Form.Item
                    {...restField}
                    name={[name, "name"]}
                    rules={[{ required: true, message: "Missing skill name" }]}
                  >
                    <Input placeholder="Skill name (e.g. React.js)" />
                  </Form.Item>

                  <Form.Item {...restField} name={[name, "score"]}>
                    <Input placeholder="Score (e.g. 80% or Advanced)" />
                  </Form.Item>

                  <Form.Item {...restField} name={[name, "img"]}>
                    <Input placeholder="Image URL (e.g. /images/react.png)" />
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
                  Add Skill
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
