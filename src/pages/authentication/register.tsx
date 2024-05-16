import { Button, Card, Col, Flex, Form, Input, Row } from "antd";
import { LoadingOutlined } from "@ant-design/icons";
import { AiOutlineLock, AiOutlineUser } from "react-icons/ai";
import { HiOutlineMail } from "react-icons/hi";
import { Link } from "react-router-dom";

import { MdDriveFileRenameOutline } from "react-icons/md";
import { confirmPassRules, emailRules } from "./utils";
import { DefaultInputStyle } from "src/shared/components/commonStyles";

const Register = () => {
  const [form] = Form.useForm();
  const onFinish = (values: any) => {
    console.log("Success:", values);
  };

  const onFinishFailed = (errorInfo: any) => {
    console.log("Failed:", errorInfo);
  };

  return (
    <div
      style={{
        backgroundImage: `url("./loginbg.webp")`,
        minHeight: "80vh",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        color: "aliceblue",
        padding: "10vh 10vw",
      }}
    >
      <Card
        style={{
          padding: "20px",
          width: "80vw",
          backgroundColor: "rgba(0, 0, 0, 0.4)",
          border: "0",
        }}
      >
        <Row style={{ justifyContent: "space-between" }}>
          <Col>
            <Form
              form={form}
              name="login"
              style={{ maxWidth: 300, color: "aliceblue" }}
              initialValues={{ remember: true }}
              onFinish={onFinish}
              onFinishFailed={onFinishFailed}
              autoComplete="on"
              scrollToFirstError
            >
              <Form.Item name="name" label="Nombre">
                <Input
                  style={DefaultInputStyle}
                  prefix={<MdDriveFileRenameOutline />}
                />
              </Form.Item>
              <Form.Item
                name="email"
                label="E-mail"
                rules={emailRules}
              >
                <Input style={DefaultInputStyle} prefix={<HiOutlineMail />} />
              </Form.Item>
              <Form.Item
                name="username"
                label="username"
                tooltip="What do you want to call you?"
                rules={[
                  { required: true, message: "Please input your username!" },
                ]}
              >
                <Input style={DefaultInputStyle} prefix={<AiOutlineUser />} />
              </Form.Item>
              <Form.Item
                name="password"
                label="Password"
                rules={[
                  {
                    required: true,
                    message: "Please input your password!",
                  },
                ]}
                hasFeedback
              >
                <Input.Password
                  style={DefaultInputStyle}
                  prefix={<AiOutlineLock />}
                />
              </Form.Item>
              <Form.Item
                name="confirm"
                label="Confirm Password"
                dependencies={["password"]}
                hasFeedback
                rules={confirmPassRules}
              >
                <Input.Password
                  style={DefaultInputStyle}
                  prefix={<AiOutlineLock />}
                />
              </Form.Item>
              <Form.Item style={{ color: "aliceblue" }}>
                <Flex justify="space-between">
                  <Button type="primary" disabled={false} htmlType="submit">
                    {false ? <LoadingOutlined /> : "Register"}
                  </Button>
                  or
                  <Link to={"/login"}>
                    <Button type="primary">Log in</Button>
                  </Link>
                </Flex>
              </Form.Item>
            </Form>
          </Col>
          <Col>
            <div
              style={{
                backgroundImage: `url("./EcoExLogo.png")`,
                backgroundPosition: "center",
                backgroundRepeat: "no-repeat",
                backgroundSize: "cover",
                minWidth: "40vw",
                minHeight: "15vh",
              }}
            />
          </Col>
        </Row>
      </Card>
    </div>
  );
};

export default Register;
