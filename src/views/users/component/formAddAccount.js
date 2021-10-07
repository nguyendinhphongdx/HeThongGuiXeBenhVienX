import { Form, Input, message, Select } from "antd";
import { useState } from "react";
import {
  UserOutlined,
  KeyOutlined,
  MailOutlined,
  CaretDownOutlined,
} from "@ant-design/icons";


const FormAddAccount = ({ form, handleSubmit}) => {
 
  return (
    <div className="">
      <Form form={form} onFinish={handleSubmit} labelCol={{ span: 6 }} wrapperCol={{span:18}}>
        <h6>Create an User account</h6>
        <Form.Item
          label="User Name"
          name="username"
          rules={[{ required: true, message: "please fill this field" }]}
        >
          <Input prefix={<UserOutlined />} placeholder={"User Name"} />
        </Form.Item>
        <Form.Item
          label="Mail"
          name="email"
          rules={[{ required: true, message: "please fill this field" }]}
        >
          <Input type="email" prefix={<MailOutlined />} placeholder={"Email"} />
        </Form.Item>
        <Form.Item
          label="Password"
          name="password"
          rules={[{ required: true, message: "please fill this field" }]}
        >
          <Input.Password prefix={<KeyOutlined />} placeholder={"Password"} />
        </Form.Item>
        <Form.Item
          label="Confirm"
          name="repeat"
          rules={[{ required: true, message: "please fill this field" }]}
        >
          <Input.Password
            prefix={<KeyOutlined />}
            placeholder={"Confirm Password"}
          />
        </Form.Item>
        <Form.Item
          label="Role"
          name="role_id"
          rules={[{ required: true, message: "please fill this field" }]}
        >
          <Select suffixIcon={<CaretDownOutlined />}>
            <Select.Option value={"2"}>User</Select.Option>
            <Select.Option value={"1"}>Admin</Select.Option>
            <Select.Option value={"3"}>Super User</Select.Option>
          </Select>
        </Form.Item>
        <Form.Item
          label="Ip Address"
          name="ip"
          rules={[{ required: true, message: "please fill this field" }]}
        >
          <Input placeholder={"Ip Address"} />
        </Form.Item>
      </Form>
    </div>
  );
};
export default FormAddAccount;
