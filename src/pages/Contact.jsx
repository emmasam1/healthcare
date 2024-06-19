import React, { useState } from "react";
import { Button, Form, Input, Space, Radio } from "antd";
import { FaMapMarkerAlt, FaPhoneAlt } from "react-icons/fa";
import location from "../assets/images/location.jpeg";
const { TextArea } = Input;

const SubmitButton = ({ form, children }) => {
  const [submittable, setSubmittable] = React.useState(false);

  // Watch all values
  const values = Form.useWatch([], form);
  React.useEffect(() => {
    form
      .validateFields({
        validateOnly: true,
      })
      .then(() => setSubmittable(true))
      .catch(() => setSubmittable(false));
  }, [form, values]);

  return (
    <Button type="primary" htmlType="submit" disabled={!submittable}>
      {children}
    </Button>
  );
};

const Contact = () => {
  const [form] = Form.useForm();
  const [contactMethod, setContactMethod] = useState(null);

  const onChange = (e) => {
    setContactMethod(e.target.value);
  };

  return (
    <div>
      <h2 className="text-center font-medium text-2xl sm:text-4xl mt-10">
        Contact Us
      </h2>

      <div className="m-auto w-full sm:w-11/12 mt-10 px-4 sm:px-0">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-6">
          <div className="col-span-1">
            <Form
              form={form}
              name="validateOnly"
              layout="vertical"
              autoComplete="off"
            >
              <Form.Item
                name="name"
                label="Full name"
                rules={[
                  {
                    required: true,
                    message: "Please enter your full name",
                  },
                ]}
              >
                <Input size="large" />
              </Form.Item>

              <Form.Item
                name="msg"
                label="Message"
                rules={[
                  {
                    required: true,
                    message: "Please enter your message",
                  },
                ]}
              >
                <TextArea
                  size="large"
                  placeholder="Controlled autosize"
                  autoSize={{ minRows: 10, maxRows: 15 }}
                />
              </Form.Item>

              <p className="mb-5">How would you like to be contacted</p>
              <Radio.Group
                onChange={onChange}
                value={contactMethod}
                size="large"
                className="mb-5"
              >
                <Radio value="email">Email</Radio>
                <Radio value="phone">Phone</Radio>
              </Radio.Group>

              {contactMethod === "email" && (
                <Form.Item
                  name="email"
                  label="Email"
                  rules={[
                    {
                      required: true,
                      type: "email",
                      message: "Please enter a valid email address",
                    },
                  ]}
                >
                  <Input size="large" />
                </Form.Item>
              )}

              {contactMethod === "phone" && (
                <Form.Item
                  name="phone"
                  label="Phone Number"
                  rules={[
                    {
                      required: true,
                      pattern: /^\d{10}$/,
                      message: "Please enter a valid phone number",
                    },
                  ]}
                >
                  <Input size="large" />
                </Form.Item>
              )}

              <Form.Item>
                <Space>
                  <SubmitButton form={form}>Submit</SubmitButton>
                </Space>
              </Form.Item>
            </Form>
          </div>
          <div className="relative col-span-1 bg-slate-400 lg:block h-80 sm:h-[500px]">
            <img
              src={location}
              alt="Location"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 flex flex-col justify-center items-center bg-black bg-opacity-50 text-white p-4 text-2xl">
              <div className="flex items-center mb-2">
                <FaMapMarkerAlt className="mr-2" />
                <h2 className="text-center">
                  3517 Langrehr Rd Suite 1 Windsor Mill, Md 21244
                </h2>
              </div>
              <div className="flex items-center mb-2">
                <FaPhoneAlt className="mr-2" />
                <h2 className="text-center">301-763-0261, 248-384-849</h2>
              </div>
              <h2 className="text-center">
                We are: Licensed, Insured & Bonded.
              </h2>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-img7 mt-8 h-60 sm:h-80 relative">
        <div className="overlay flex justify-center items-center px-8 sm:px-96 text-center">
          <h2 className="text-white text-lg sm:text-2xl">
            <b>@ Amazing & Steadfast Residential Agency Inc.</b> We provide care
            givers who are experienced, professional, dependable, and
            compassionate and who understand that dignified care is a priority.
          </h2>
        </div>
      </div>
    </div>
  );
};

export default Contact;
