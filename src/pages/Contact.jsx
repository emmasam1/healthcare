import React, { useState, useEffect } from "react";
import { Button, Form, Input, Space, Radio } from "antd";
import { FaMapMarkerAlt, FaPhoneAlt } from "react-icons/fa";
import img_3 from "../assets/images/img_3.jpg";
import img_1 from "../assets/images/img_2.jpg";
import con_1 from "../assets/images/contact_1.jpg";
const { TextArea } = Input;

const SubmitButton = ({ form, children }) => {
  useEffect(() => {
    document.title = "Contact - Amazing & Steadfast Residential Agency Inc";
  }, []);

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
      <h2 className="text-center font-bold text-2xl sm:text-4xl relative">
        Contact Us
      </h2>

      <div className="w-full sm:h-[300px] md:h-[400px] lg:h-[500px] xl:h-[600px] overflow-hidden mt-11 ">
        <img
          src={img_1}
          alt="Description"
          className="w-full h-full object-fill"
        />
      </div>

      {/* <div className="m-auto w-full sm:w-11/12 mt-10 px-4 sm:px-0">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
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
          <div className="relative col-span-2 bg-slate-400 lg:block h-80 sm:h-[500px]">
            <img
              src={img_3}
              alt="Location"
              className="w-full h-full object-fill"
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
      </div> */}

      {/* <div className="m-auto w-full sm:w-11/12 mt-10 px-4 sm:px-0">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
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
          <div className="relative col-span-2 sm:col-span-2 bg-slate-400 h-80 sm:h-[500px]">
            <img
              src={img_3}
              alt="Location"
              className="w-full h-full object-fill"
            />
            <div className="absolute inset-0 flex flex-col justify-center items-center bg-black bg-opacity-50 text-white p-4 text-2xl">
              content
            </div>
          </div>
        </div>
      </div> */}

      <div className="m-auto w-full sm:w-11/12 mt-10 px-4 sm:px-0">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          <div className="col-span-1 sm:col-span-2 md:col-span-1  ">
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
          <div className="relative col-span-2 sm:col-span-2 md:col-span-2">
            {/* <img
              src={img_3}
              alt="Location"
              className="w-full h-full object-fill"
            /> */}
            {/* <div className="absolute inset-0 flex flex-col justify-center items-center bg-black bg-opacity-50 text-white p-4 text-2xl"> */}
            {/* <div className="absolute inset-0 flex flex-col justify-center items-center bg-black bg-opacity-50 text-white p-4 text-2xl"> */}
            <div>
              <div className="flex items-center mb-2">
                <h2 className="text-1xl mb-5 leading-8">
                  <b>Address:</b> Amazing & Steadfast Residential Agency Inc{" "}
                  <br /> 3517 Langrehr Road <br /> Suite 1, Windsor Mill, MD
                  21244
                </h2>
              </div>
              <div>
                <h2 className="text-1xl mb-5">
                  <b>Email:</b> amazing@amazingsteadfast.com
                </h2>
              </div>
              <div className="flex items-center mb-2">
                <h2 className="text-1xl mb-5">
                  <b>Phone:</b> +1-301-768-0261, +1-240-838-4849
                </h2>
              </div>
              <h2 className="text-1xl mb-5">
                We are: Licensed, Insured & Bonded.
              </h2>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2">
              <div>
                <img
                  src={con_1}
                  alt=""
                  srcset=""
                  className="h-full object-fill"
                />
              </div>
              <div className="bg-[#1D2802] p-5">
                <p className="text-white leading-8">
                  We are committed to providing exceptional care and support to
                  our patients. If you have any questions, concerns, or would
                  like to schedule an appointment, please feel free to reach out
                  to us.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-img7 mt-8 h-60 relative mb-1">
        <div className="overlay flex justify-center items-center">
          <div className=" m-auto w-11/12 sm:w-11/12 md:w-4/5 lg:w-1/2 text-center">
            <h2 className="text-white text-lg sm:text-lg lg:text-1xl">
              <b>@ Amazing & Steadfast Residential Agency Inc.</b> We provide
              caregivers who are experienced, professional, dependable, and
              compassionate and who understand that dignified care is a
              priority.
            </h2>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
