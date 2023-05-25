import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";

const FormSignupV2 = () => {
  // const formik = useFormik({
  //   initialValues: {
  //     firstName: "",
  //     lastname: "",
  //   },
  //   validationSchema: Yup.object({
  //     firstName: Yup.string()
  //       .max(20, "vui long khong nhap qua 20 ky tu")
  //       .required("vui long nhap day du thong tin"),
  //     lastName: Yup.string()
  //       .max(10, "vui long khong nhap qua 10 ky tu")
  //       .required("vui long nhap day du thong tin"),
  //   }),
  //   onSubmit: (values) => {
  //     console.log(values);
  //   },
  // });
  // console.log(formik);
  return (
    <Formik
      initialValues={{
        firstName: "",
        lastname: "",
        email: "",
      }}
      validationSchema={Yup.object({
        firstName: Yup.string()
          .max(20, "vui long khong nhap qua 20 ky tu")
          .required("vui long nhap day du thong tin"),
        lastName: Yup.string()
          .max(10, "vui long khong nhap qua 10 ky tu")
          .required("vui long nhap day du thong tin"),
        email: Yup.string()
          .email("email khong dung dinh dang")
          .required("vui long nhap email"),
      })}
      onSubmit={(values) => {
        console.log(values);
      }}
    >
      <Form className="w-full max-w-[500px] mx-auto mt-5">
        <div className="flex flex-col gap-2 mb-5">
          <label htmlFor="">FristName</label>
          <Field
            name="firstName"
            type="text"
            className="p-4 border border-gray-100 rounded-md"
          />
          <span className="text-sm text-red-500">
            <ErrorMessage name="firstName"></ErrorMessage>
          </span>
        </div>
        <div className="flex flex-col gap-2 mb-5">
          <label htmlFor="">LastName</label>
          <Field
            name="lastName"
            type="text"
            className="p-4 border border-gray-100 rounded-md"
          />
          <span className="text-sm text-red-500">
            <ErrorMessage name="lastName"></ErrorMessage>
          </span>
        </div>
        <div className="flex flex-col gap-2 mb-5">
          <label htmlFor="">Email address</label>
          <Field
            name="email"
            type="email"
            className="p-4 border border-gray-100 rounded-md"
          />
          <span className="text-sm text-red-500">
            <ErrorMessage name="lastName"></ErrorMessage>
          </span>
          <span className="text-sm text-red-500">
            <ErrorMessage name="email"></ErrorMessage>
          </span>
        </div>
        <div className="text-center">
          <button
            type="submit"
            className="inline-flex items-center justify-center w-full px-8 py-4 font-sans font-semibold tracking-wide text-white bg-blue-500 rounded-lg"
          >
            Submit
          </button>
        </div>
      </Form>
    </Formik>
  );
};

export default FormSignupV2;
