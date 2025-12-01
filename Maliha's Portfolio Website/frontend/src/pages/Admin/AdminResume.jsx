import React, { useMemo } from "react";
import { Form, Input, Button, Space } from "antd";
import { MinusCircleOutlined, PlusOutlined } from "@ant-design/icons";
import { useDispatch, useSelector } from "react-redux";
import { ShowLoading, HideLoading } from "../../redux/rootSlice.js";
import axios from "axios";
import { message } from "antd";

export default function AdminResume() {
  const dispatch = useDispatch();
  const { portfolioData } = useSelector((state) => state.root);

  const normalizedEducation = useMemo(() => {
    const resume = portfolioData?.resume;
    if (!resume) return [];
    const educations = resume.eduDesc || [];
    return educations.map((e) => ({
      title: e.title || "",
      cgpa: e.cgpa || "",
      desc: e.desc || "",
      versity: e.versity || "",
      date: e.date || "",
    }));
  }, [portfolioData]);

  const normalizedWork = useMemo(() => {
    const resume = portfolioData?.resume;
    if (!resume) return [];
    const works = resume.workDesc || [];
    return works.map((w) => ({
      title: w.title || "",
      position: w.position || "",
      company: w.company || "",
      date: w.date || "",
    }));
  }, [portfolioData]);

  const onFinish = async (values) => {
    const _id = portfolioData?.resume?._id;
    if (!_id) {
      return message.error("Resume document id not found.");
    }

    const eduDesc = (values.educations || []).map((e) => ({
      title: (e.title || "").trim(),
      cgpa: e.cgpa || "",
      desc: e.desc || "",
      versity: e.versity || "",
      date: e.date || "",
    }));

    const workDesc = (values.works || []).map((w) => ({
      title: (w.title || "").trim(),
      position: w.position || "",
      company: w.company || "",
      date: w.date || "",
    }));

    const payload = { ...values, _id, eduDesc, workDesc };

    try {
      dispatch(ShowLoading());
      const response = await axios.post(
        "http://localhost:3000/api/portfolio/update-resume",
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
        id="adminResume"
        layout="vertical"
        onFinish={onFinish}
        initialValues={{
          educations: normalizedEducation,
          works: normalizedWork,
        }}
      >
        <Form.List name="educations">
          {(fields, { add, remove }) => (
            <>
              <label className="font-medium">Education</label>
              {fields.map(({ key, name, ...restField }) => (
                <Space
                  key={key}
                  style={{ display: "flex", marginBottom: 8, gap: 8 }}
                  align="start"
                >
                  <Form.Item
                    {...restField}
                    name={[name, "title"]}
                    rules={[{ required: true, message: "Missing title" }]}
                  >
                    <Input placeholder="Title (e.g. B.Sc in CSE)" />
                  </Form.Item>

                  <Form.Item {...restField} name={[name, "cgpa"]}>
                    <Input placeholder="CGPA (e.g. CGPA - 3.67)" />
                  </Form.Item>

                  <Form.Item {...restField} name={[name, "versity"]}>
                    <Input placeholder="University (e.g. Patuakhali S&T University)" />
                  </Form.Item>

                  <Form.Item {...restField} name={[name, "date"]}>
                    <Input placeholder="Date (e.g. Jan 2019 - Feb 2025)" />
                  </Form.Item>

                  <Form.Item {...restField} name={[name, "desc"]}>
                    <Input placeholder="Short note (e.g. Dean's Merit List)" />
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
                  Add Education
                </Button>
              </Form.Item>
            </>
          )}
        </Form.List>

        <Form.List name="works">
          {(fields, { add, remove }) => (
            <>
              <label className="font-medium">Work / Activities</label>
              {fields.map(({ key, name, ...restField }) => (
                <Space
                  key={key}
                  style={{ display: "flex", marginBottom: 8, gap: 8 }}
                  align="start"
                >
                  <Form.Item
                    {...restField}
                    name={[name, "title"]}
                    rules={[{ required: true, message: "Missing title" }]}
                  >
                    <Input placeholder="Title (e.g. OCR Paper, Web Developer)" />
                  </Form.Item>

                  <Form.Item {...restField} name={[name, "position"]}>
                    <Input placeholder="Position (e.g. Intern Developer / First Author)" />
                  </Form.Item>

                  <Form.Item {...restField} name={[name, "company"]}>
                    <Input placeholder="Company / Venue (e.g. Fiverr / IEEE)" />
                  </Form.Item>

                  <Form.Item {...restField} name={[name, "date"]}>
                    <Input placeholder="Date (e.g. June 2020 - Present)" />
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
                  Add Work
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
