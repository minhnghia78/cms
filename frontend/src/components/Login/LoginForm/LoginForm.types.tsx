import { LoginFormType } from "../../../types/auth.types";

export type LoginFormProps = {
  form: any;
  onFinish: (value: LoginFormType) => void;
  onFinishFailed: (errorInfo: any) => void;
};
