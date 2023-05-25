import { useFormik } from "formik";
import * as Yup from "yup";

// const validate = (values) => {
//   const errors = {};
//   if (!values.firstName) {
//     errors.firstName = "vui long nhap day du ten";
//   } else if (values.firstName.length > 20) {
//     errors.firstName = "ten khong qua 20 ky tu";
//   }
//   return errors;
// };
const FormSignup = () => {
  const formik = useFormik({
    initialValues: {
      firstName: "",
      lastname: "",
    },
    validationSchema: Yup.object({
      firstName: Yup.string()
        .max(20, "vui long khong nhap qua 20 ky tu")
        .required("vui long nhap day du thong tin"),
      lastName: Yup.string()
        .max(10, "vui long khong nhap qua 10 ky tu")
        .required("vui long nhap day du thong tin"),
    }),
    onSubmit: (values) => {
      console.log(values);
    },
  });
  console.log(formik);
  return (
    <form
      onSubmit={formik.handleSubmit}
      className="w-full max-w-[500px] mx-auto mt-5"
    >
      <div className="flex flex-col gap-2 mb-5">
        <label htmlFor="">FristName</label>
        <input
          name="firstName"
          type="text"
          //   onChange={formik.handleChange}
          //   value={formik.values.firstName}
          //   onBlur={formik.handleBlur}
          className="p-4 border border-gray-100 rounded-md"
          {...formik.getFieldProps("firstName")}
        />
        {formik.touched.firstName && formik.errors.firstName && (
          <span className="text-sm text-red-600">
            {formik.errors.firstName}
          </span>
        )}
      </div>
      <div className="flex flex-col gap-2 mb-5">
        <label htmlFor="">LastName</label>
        <input
          name="lastName"
          type="text"
          //   onChange={formik.handleChange}
          //   value={formik.values.lastName}
          //   onBlur={formik.handleBlur}
          className="p-4 border border-gray-100 rounded-md"
          {...formik.getFieldProps("lastName")}
        />
        {formik.touched.lastName && formik.errors.lastName && (
          <span className="text-sm text-red-600">{formik.errors.lastName}</span>
        )}
      </div>
      <div className="text-center">
        <button className="inline-flex items-center justify-center w-full px-8 py-4 font-sans font-semibold tracking-wide text-white bg-blue-500 rounded-lg">
          Submit
        </button>
      </div>
    </form>
  );
};

export default FormSignup;
