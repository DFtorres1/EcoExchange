import { Button, Card, Col, Flex, Form, Input, Row } from "antd";
import { LoadingOutlined } from "@ant-design/icons";
import { AiOutlineLock, AiOutlineUser } from "react-icons/ai";
import { HiOutlineMail } from "react-icons/hi";
import { Link } from "react-router-dom";

import { MdDriveFileRenameOutline } from "react-icons/md";
import { emailRules } from "./utils";
// import { confirmPassRules } from "./utils";
import { DefaultInputStyle } from "src/shared/components/commonStyles";
import useRegister from "./hooks/useRegister";
import { useEffect } from "react";

const Register = () => {
  const [form] = Form.useForm();
  const {
    mutate: registerUser,
    isPending: registerLoading,
    isError: registerError,
    error: registerErrorLog,
  } = useRegister();
  
  const onFinish = (values: users) => {
    const date = new Date();
    values.register_date = date;
    registerUser(values);
  };

  const onFinishFailed = (errorInfo: any) => {
    console.log("Failed:", errorInfo);
  };

  useEffect(() => {
    console.log(registerErrorLog);
  }, [registerError]);

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
              layout="horizontal"
              labelCol={{ span: 10 }}
              wrapperCol={{ span: 14 }}
              style={{ maxWidth: 300, color: "aliceblue" }}
              initialValues={{ remember: true }}
              onFinish={onFinish}
              onFinishFailed={onFinishFailed}
              autoComplete="on"
              scrollToFirstError
            >
              <Form.Item
                name="name"
                label={<span style={{ color: "aliceblue" }}>Nombre</span>}
                style={{ color: "aliceblue" }}
              >
                <Input
                  style={DefaultInputStyle}
                  prefix={<MdDriveFileRenameOutline />}
                />
              </Form.Item>
              <Form.Item
                name="email"
                label={<span style={{ color: "aliceblue" }}>E-mail</span>}
                rules={emailRules}
              >
                <Input style={DefaultInputStyle} prefix={<HiOutlineMail />} />
              </Form.Item>
              <Form.Item
                name="username"
                label={<span style={{ color: "aliceblue" }}>Usuario</span>}
                tooltip="What do you want to call you?"
                rules={[
                  { required: true, message: "Please input your username!" },
                ]}
              >
                <Input style={DefaultInputStyle} prefix={<AiOutlineUser />} />
              </Form.Item>
              <Form.Item
                name="password"
                label={<span style={{ color: "aliceblue" }}>Contraseña</span>}
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
              {/* <Form.Item
                name="password"
                label="Confirm Password"
                dependencies={["password"]}
                hasFeedback
                rules={confirmPassRules}
              >
                <Input.Password
                  style={DefaultInputStyle}
                  prefix={<AiOutlineLock />}
                />
              </Form.Item> */}
              <Form.Item style={{ color: "aliceblue" }}>
                <Flex justify="space-between">
                  <Button
                    type="primary"
                    disabled={registerLoading}
                    htmlType="submit"
                  >
                    {false ? <LoadingOutlined /> : "Register"}
                  </Button>
                  or
                  <Link to={"/login"}>
                    <Button type="primary" disabled={registerLoading}>
                      Log in
                    </Button>
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
