import * as Yup from "yup";

export const FormikValidations = Yup.object().shape({
  email: Yup.string().required("required"),
  password: Yup.string().required("required"),
});
