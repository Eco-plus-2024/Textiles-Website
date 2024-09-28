"use client";
import React, { useState, useEffect } from "react";
import Image from "next/image";
import { PaginationWithLinks } from "@/ui/pagination-with-link";
import { useCategoryListMutation } from "@/hooks/category/useCategoryListMutation";

const CategoryTable = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const { mutate, data, isPending, isSuccess, isError, error } =
    useCategoryListMutation();
  useEffect(() => {
    mutate();
  }, []);

  isPending && <div>Loading</div>;
  const product = data?.data?.data;

  return (
    <div className="rounded-sm border border-stroke bg-white shadow-default dark:border-strokedark dark:bg-boxdark">
      <div className="flex flex-col items-center justify-between px-4 py-6 md:px-6 xl:px-7.5">
        <h4 className="mb-4 text-xl font-semibold text-black dark:text-white">
          Top Products
        </h4>
        <div className="flex w-full items-center justify-between">
          <input
            type="text"
            placeholder="Search products..."
            className="w-1/2 rounded-lg border-[1.5px] border-stroke bg-transparent px-5 py-3 text-black outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:text-white dark:focus:border-primary"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
          <button className="flex justify-center rounded bg-primary p-3 font-medium text-gray hover:bg-opacity-90">
            Add new
          </button>
        </div>
      </div>

      <div className="grid grid-cols-6 border-t border-stroke px-4 py-4.5 dark:border-strokedark sm:grid-cols-8 md:px-6 2xl:px-7.5">
        <div className="col-span-3 flex items-center">
          <p className="font-medium">Category</p>
        </div>
        <div className="col-span-2 hidden items-center sm:flex">
          <p className="font-medium">Type</p>
        </div>
        <div className="col-span-1 flex items-center">
          <p className="font-medium">Status</p>
        </div>
        {/* <div className="col-span-1 flex items-center">
          <p className="font-medium">Sold</p>
        </div> */}
        <div className="col-span-2 flex items-center">
          <p className="font-medium">Actions</p>
        </div>
      </div>

      {isSuccess &&
        product.map((product: any, key: number) => (
          <div
            className="grid grid-cols-6 border-t border-stroke px-4 py-4.5 dark:border-strokedark sm:grid-cols-8 md:px-6 2xl:px-7.5"
            key={key}
          >
            <div className="col-span-3 flex items-center">
              <div className="flex flex-col gap-4 sm:flex-row sm:items-center">
                <div className="h-12.5 w-15 rounded-md">
                  <Image
                    src={
                      "https://m.media-amazon.com/images/I/31Q14qzdoZL._SY445_SX342_QL70_FMwebp_.jpg"
                    }
                    width={60}
                    height={50}
                    alt="Product"
                  />
                </div>
                <p className="text-sm capitalize text-black dark:text-white">
                  {product.name}
                </p>
              </div>
            </div>
            <div className="col-span-2 hidden items-center sm:flex">
              <p className="text-sm capitalize text-black dark:text-white">
                {product.types}
              </p>
            </div>
            <div className="col-span-1 flex items-center">
              <p
                className={`rounded-md px-2 text-sm font-medium text-black dark:text-white ${product.isActive ? "bg-green-200" : "bg-red-300"}`}
              >
                {product.isActive ? "Active" : "Inactive"}
              </p>
            </div>
            {/* <div className="col-span-1 flex items-center">
            <p className="text-sm text-black dark:text-white">{product.sold}</p>
          </div> */}
            <div className="col-span-2 flex items-center">
              <p className="text-sm text-meta-3">${product.profit}</p>
            </div>
          </div>
        ))}
      <div className="px-10 py-10">
        <PaginationWithLinks totalCount={30} pageSize={10} page={2} />
      </div>
    </div>
  );
};

export default CategoryTable;
