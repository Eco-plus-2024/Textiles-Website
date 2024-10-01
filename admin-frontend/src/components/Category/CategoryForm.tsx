"use client";
import React from "react";
import CheckboxOne from "../Checkboxes/CheckboxOne";
import { DevTool } from "@hookform/devtools";
import SelectGroupTwo from "../SelectGroup/SelectGroupTwo";
import { useForm } from "react-hook-form";
import ErrorField from "../common/error-feild";

const CategoryForm = () => {
  const {
    register,
    handleSubmit,
    watch,
    control,
    formState: { errors },
  } = useForm();

  const onSubmit = (data: any) => {
    console.log(data);
  };

  return (
    <div>
      <div className="flex flex-col gap-9">
        <div className="rounded-sm border border-stroke bg-white shadow-default dark:border-strokedark dark:bg-boxdark">
          <div className="flex items-center justify-between border-b border-stroke px-6.5 py-4 dark:border-strokedark">
            <h3 className="font-medium text-black dark:text-white">
              Add new categoey
            </h3>
            <button className="flex  justify-center rounded bg-primary p-3 font-medium text-gray hover:bg-opacity-90">
              Add new
            </button>
          </div>
          <form onSubmit={handleSubmit(onSubmit)} noValidate>
            <div className="flex flex-col gap-5.5 p-6.5">
              <div>
                <label className="mb-3 block text-sm font-medium text-black dark:text-white">
                  Category name
                </label>
                <input
                  type="text"
                  placeholder="Enter the category name"
                  {...register("categoryName",{
                    required:"Category name is required"
                  })}
                  className="w-full rounded-lg border-[1.5px] border-stroke bg-transparent px-5 py-3 text-black outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:text-white dark:focus:border-primary"
                />
              </div>
              <div>
                <label className="mb-3 block text-sm font-medium text-black dark:text-white">
                  Category Image
                </label>
                <input
                  type="file"
                  {...register("categoryImage",{
                    required:"Category image is required"
                  })}
                  className="w-full cursor-pointer rounded-lg border-[1.5px] border-stroke bg-transparent outline-none transition file:mr-5 file:border-collapse file:cursor-pointer file:border-0 file:border-r file:border-solid file:border-stroke file:bg-whiter file:px-5 file:py-3 file:hover:bg-primary file:hover:bg-opacity-10 focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:file:border-form-strokedark dark:file:bg-white/30 dark:file:text-white dark:focus:border-primary"
                />
                <ErrorField errors={errors} name={"categoryImage"}/>
              </div>
              <SelectGroupTwo register={register} />
              <CheckboxOne
                register={register}
                value={watch("isActive")}
                title={"Active"}
              />
              <button
                type="submit"
                className="flex  justify-center rounded bg-primary p-3 font-medium text-gray hover:bg-opacity-90"
              >
                Save
              </button>
            </div>
          </form>
          <DevTool control={control}/>
        </div>
      </div>
    </div>
  );
};

export default CategoryForm;
