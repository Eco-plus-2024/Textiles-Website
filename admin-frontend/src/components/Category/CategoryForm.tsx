import React from "react";

const CategoryForm = () => {
  return (
    <div>
      <div className="flex flex-col gap-9">
       
        <div className="rounded-sm border border-stroke bg-white shadow-default dark:border-strokedark dark:bg-boxdark">
          <div className="border-b flex items-center justify-between border-stroke px-6.5 py-4 dark:border-strokedark">
            <h3 className="font-medium text-black dark:text-white">
                Add new categoey
            </h3>
            <button className="flex  justify-center rounded bg-primary p-3 font-medium text-gray hover:bg-opacity-90">
                 Add new 
                </button>
          </div>
          <div className="flex flex-col gap-5.5 p-6.5">
            <div>
              <label className="mb-3 block text-sm font-medium text-black dark:text-white">
                Category name
              </label>
              <input
                type="text"
                placeholder="Enter the category name"
                className="w-full rounded-lg border-[1.5px] border-stroke bg-transparent px-5 py-3 text-black outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:text-white dark:focus:border-primary"
              />
            </div>
            <div>
              <label className="mb-3 block text-sm font-medium text-black dark:text-white">
                Category Image
              </label>
              <input
                type="file"
                className="w-full cursor-pointer rounded-lg border-[1.5px] border-stroke bg-transparent outline-none transition file:mr-5 file:border-collapse file:cursor-pointer file:border-0 file:border-r file:border-solid file:border-stroke file:bg-whiter file:px-5 file:py-3 file:hover:bg-primary file:hover:bg-opacity-10 focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:file:border-form-strokedark dark:file:bg-white/30 dark:file:text-white dark:focus:border-primary"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CategoryForm;
