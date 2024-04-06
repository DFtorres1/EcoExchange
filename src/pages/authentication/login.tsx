import { Button, Card, Checkbox, Col, Form, Input, Row } from "antd";
import { LockOutlined, UserOutlined, LoadingOutlined } from "@ant-design/icons";
import { Link, useNavigate } from "react-router-dom";
import useAuthentication from "./hooks/useAuthenticate";
import { useEffect, useState } from "react";

const Login = () => {
  const navigate = useNavigate();

  const [rememberMe, setRememberMe] = useState<boolean>(false);
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleUsernameChange = (event: any) => {
    setUsername(event.target.value);
  };

  const handlePasswordChange = (event: any) => {
    setPassword(event.target.value);
  };

  const handleRememberMeChange = () => {
    setRememberMe(!rememberMe);
  };

  const onFinish = (values: any) => {
    console.log("Success:", values);
  };

  const onFinishFailed = (errorInfo: any) => {
    console.log("Failed:", errorInfo);
  };

  const {
    mutate: authenticateUser,
    //error: authenticationError,
    isSuccess: authenticationSuccess,
    isPending: authLoading
  } = useAuthentication();

  useEffect(() => {
    if (authenticationSuccess) {
      navigate("/");
    }
  }, [authenticationSuccess, navigate]);

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
              name="login"
              style={{ maxWidth: 300, color: "aliceblue" }}
              initialValues={{ remember: true }}
              onFinish={onFinish}
              onFinishFailed={onFinishFailed}
              autoComplete="on"
            >
              <Form.Item
                name="username"
                rules={[
                  { required: true, message: "Please input your username!" },
                ]}
              >
                <Input
                  onChange={handleUsernameChange}
                  style={{
                    backgroundColor: "rgba(0, 0, 0, 0.4)",
                    color: "aliceblue",
                    minHeight: "50px",
                    fontSize: "20px",
                  }}
                  prefix={<UserOutlined />}
                />
              </Form.Item>

              <Form.Item
                name="password"
                rules={[
                  { required: true, message: "Please input your password!" },
                ]}
              >
                <Input
                onChange={handlePasswordChange}
                  style={{
                    backgroundColor: "rgba(0, 0, 0, 0.4)",
                    color: "aliceblue",
                    minHeight: "50px",
                    fontSize: "20px",
                  }}
                  prefix={<LockOutlined />}
                  type="password"
                />
              </Form.Item>
              <Form.Item>
                <Form.Item name="remember" valuePropName="checked" noStyle>
                  <Checkbox onChange={handleRememberMeChange} style={{ color: "aliceblue" }}>
                    Remember me
                  </Checkbox>
                </Form.Item>

                <Link to={""} style={{ color: "#ADD8E6" }}>
                  Forgot password
                </Link>
              </Form.Item>

              <Form.Item style={{ color: "aliceblue" }}>
                <Button
                  type="primary"
                  onClick={() => authenticateUser({ username, password })}
                >
                  {authLoading ? <LoadingOutlined /> : "SIGN IN"}
                </Button>
                Or{" "}
                <Link to={""} style={{ color: "#ADD8E6" }}>
                  Registrate
                </Link>
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

export default Login;
