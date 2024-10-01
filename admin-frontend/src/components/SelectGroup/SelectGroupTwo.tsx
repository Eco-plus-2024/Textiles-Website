"use client";
import DownArrow from "@/assets/icons/down-arrow-icon";
import React, { useState } from "react";
import { FieldValues, UseFormRegister } from "react-hook-form";

type SelectGroupTwoProps = {
  register: UseFormRegister<FieldValues>;
};
const SelectGroupTwo: React.FC<SelectGroupTwoProps> = ({ register }) => {
  return (
    <div>
      <label className="mb-3 block text-sm font-medium text-black dark:text-white">
        Select Country
      </label>

      <div className="relative z-20 bg-white dark:bg-form-input">
        <select
          {...register("country",{
            required: "Country is required",
          })}
          className={`relative z-20 w-full appearance-none rounded border border-stroke bg-transparent px-5 py-3 outline-none transition focus:border-primary active:border-primary dark:border-form-strokedark dark:bg-form-input `}
        >
          <option value="main" className="text-body dark:text-bodydark">
            Main Category
          </option>
          <option value="sub" className="text-body dark:text-bodydark">
            Sub Category
          </option>
        </select>

        <span className="absolute right-4 top-1/2 z-10 -translate-y-1/2">
          <DownArrow className={"text-body dark:text-bodydark"} />
        </span>
      </div>
    </div>
  );
};

export default SelectGroupTwo;
