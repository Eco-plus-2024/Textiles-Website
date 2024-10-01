"use client";

import React, { useState, useEffect } from "react";
import { FieldValues, UseFormRegister } from "react-hook-form";
import clsx from "clsx";
import { TbRuler2Off } from "react-icons/tb";

type Props = {
  value?: boolean;
  title?: string;
  register: UseFormRegister<FieldValues>;
};

const CheckboxOne: React.FC<Props> = ({
  value = true,
  title = "Checkbox Text",
  register,
}) => {
  const [isChecked, setIsChecked] = useState<boolean>(value);

  // Sync the isChecked state with the value prop if it changes
  useEffect(() => {
    setIsChecked(value);
  }, [value]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setIsChecked(e.target.checked);
  };

  return (
    <div>
      <label
        htmlFor="checkboxLabelOne"
        className="flex cursor-pointer select-none items-center"
      >
        <div className="relative">
          <input
            type="checkbox"
            id="checkboxLabelOne"
            className="sr-only"
            {...register("isActive",{
              required:"Checkbox is required",
            })}
            checked={isChecked}
            onChange={handleChange}
          />
         
          <div
            className={clsx(
              "mr-4 flex h-5 w-5 items-center justify-center rounded border",
              isChecked
                ? "border-primary bg-gray dark:bg-transparent"
                : "border-gray-300",
            )}
          >
            <span
              className={clsx(
                "h-2.5 w-2.5 rounded-sm",
                isChecked && "bg-primary",
              )}
            ></span>
          </div>
        </div>
        {title}
      </label>
    </div>
  );
};

export default CheckboxOne;
