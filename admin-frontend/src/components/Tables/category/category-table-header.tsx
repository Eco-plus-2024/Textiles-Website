import React from "react";
import { categoryTableHeader } from "@/constant/category/category-table-header";

const CategoryTableHeader: React.FC = () => (
  <div className="grid grid-cols-6 border-t border-stroke px-4 py-4.5 dark:border-strokedark sm:grid-cols-8 md:px-6 2xl:px-7.5">
    {categoryTableHeader.map((category, key) => (
      <div className={category.className} key={key}>
        <p className="font-medium">{category.title}</p>
      </div>
    ))}
  </div>
);

export default CategoryTableHeader;