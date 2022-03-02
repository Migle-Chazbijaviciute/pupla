import { FormEventHandler } from "react";

type AuthFormProps = {
  title?: string,
  linkTo?: string,
  linkTitle?: string,
  loading?: boolean,
  isValid?: boolean,
  onSubmit: FormEventHandler<HTMLFormElement>,
};

export default AuthFormProps;
