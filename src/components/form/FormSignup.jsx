import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as Yup from "yup";
import { useEffect } from "react";
const schema = Yup.object({
  fristName: Yup.string()
    .max(20, "vui long khong nhap qua 20 ky tu")
    .required("vui long nhap day du thong tin"),
  lastName: Yup.string()
    .max(10, "vui long khong nhap qua 10 ky tu")
    .required("vui long nhap day du thong tin"),
});
const FormSignup = () => {
  const {
    register,
    handleSubmit,
    watch,
    reset,
    setFocus,
    setValue,
    formState: { errors, isSubmitting, isValid },
  } = useForm({
    resolver: yupResolver(schema),
  });
  const watchShowAge = watch("showAge", false);

  const onSubmit = async (data) => {
    if (isValid) {
      console.log("send data to backend");
      reset({
        fristName: "",
        lastName: "",
      });
    }
  };
  useEffect(() => {
    setFocus("fristName");
  }, [setFocus]);
  const handleSetDemoData = () => {
    setValue("fristName", "demo data");
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="w-full max-w-[500px] mx-auto mt-5"
    >
      <div className="flex flex-col gap-2 mb-5">
        <label htmlFor="">FristName</label>
        <input
          type="text"
          {...register("fristName")}
          className="p-4 border border-gray-100 rounded-md"
        />
        {errors?.fristName?.message && (
          <span className="text-sm text-red-500">
            {errors.fristName.message}
          </span>
        )}
      </div>
      <div className="flex flex-col gap-2 mb-5">
        <label htmlFor="">LastName</label>
        <input
          type="text"
          {...register("lastName")}
          className="p-4 border border-gray-100 rounded-md"
        />
        {errors?.lastName?.message && (
          <span className="text-sm text-red-500">
            {errors.lastName.message}
          </span>
        )}
      </div>
      <input type="checkbox" {...register("showAge")} />
      {watchShowAge && (
        <input
          type="number"
          className="p-4 border border-gray-100 rounded-md"
          placeholder="enter your age"
        ></input>
      )}
      <div className="text-center">
        <button className="inline-flex items-center justify-center w-full px-8 py-4 font-sans font-semibold tracking-wide text-white bg-blue-500 rounded-lg">
          {isSubmitting ? (
            <div className="w-10 h-10 border-4 border-white rounded-full animate-spin border-t-transparent"></div>
          ) : (
            "Submit"
          )}
        </button>
        <button
          onClick={handleSetDemoData}
          className="inline-flex items-center justify-center px-8 py-4 font-sans font-semibold tracking-wide text-white bg-green-500 rounded-lg h-[60px]"
        >
          demo data
        </button>
      </div>
    </form>
  );
};

export default FormSignup;
