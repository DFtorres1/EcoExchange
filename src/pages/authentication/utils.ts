import { Rule } from "antd/es/form";

export const confirmPassRules = [
  {
    required: true,
    message: "Please confirm your password!",
  },
  ({ getFieldValue }: { getFieldValue: (pass: string) => {} }) => ({
    validator(_: any, value: string) {
      if (!value || getFieldValue("password") === value) {
        return Promise.resolve();
      }
      return Promise.reject(
        new Error("The new password that you entered do not match!")
      );
    },
  }),
];

export const emailRules: Rule[] = [
  {
    type: "email",
    message: "The input is not valid E-mail!",
  },
  {
    required: true,
    message: "Please input your E-mail!",
  },
];
