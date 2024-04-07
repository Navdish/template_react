
type ValidFieldNames =
  | "email"
  | "name"
  | "password"
  | "confirmPassword"
  | "role"

type userProps = {
    name: string
    email: string
    role: string
}

type loginProps = {
  email: string
  password: string
}

type FormFieldProps = {
    type: string;
    placeholder: string;
    name: ValidFieldNames;
    register: UseFormRegister<FormData>;
    error: FieldError | undefined;
    valueAsNumber?: boolean;
  };