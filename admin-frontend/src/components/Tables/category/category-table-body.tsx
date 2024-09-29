import React from "react";
import Image from "next/image";
import Link from "next/link";
import { GrView, GrFormEdit } from "react-icons/gr";
import { MdDeleteOutline } from "react-icons/md";

interface Product {
  name: string;
  types: string;
  isActive: boolean;
}

interface CategoryTableBodyProps {
  products: Product[];
}

const CategoryTableBody: React.FC<CategoryTableBodyProps> = ({ products }) => (
  <>
    {products.map((product, key) => (
      <div
        className="grid grid-cols-6 border-t border-stroke px-4 py-4.5 dark:border-strokedark sm:grid-cols-8 md:px-6 2xl:px-7.5"
        key={key}
      >
        <div className="col-span-3 flex items-center">
          <div className="flex flex-col gap-4 sm:flex-row sm:items-center">
            <div className="h-12.5 w-15 rounded-md">
              <Image
                src="https://m.media-amazon.com/images/I/31Q14qzdoZL._SY445_SX342_QL70_FMwebp_.jpg"
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
            {product.types=="sub"?"Sub Category":"Main Category"}
          </p>
        </div>
        <div className="col-span-1 flex items-center">
          <p
            className={`rounded-md px-2 text-sm font-medium text-black dark:text-white ${
              product.isActive ? "bg-green-200" : "bg-red-300"
            }`}
          >
            {product.isActive ? "Active" : "Inactive"}
          </p>
        </div>
        <div className="col-span-2 flex items-center gap-1">
          <Link href="#" className="p-1">
            <GrView size={18} color="blue" />
          </Link>
          <Link href="#" className="p-1">
            <GrFormEdit size={20} color="green" />
          </Link>
          <Link href="#" className="p-1">
            <MdDeleteOutline size={18} color="red" />
          </Link>
        </div>
      </div>
    ))}
  </>
);

export default CategoryTableBody;