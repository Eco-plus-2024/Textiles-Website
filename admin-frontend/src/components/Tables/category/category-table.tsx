"use client";
import React from "react";
import { useRouter, usePathname, useSearchParams } from "next/navigation";
import { useCategoryListMutation } from "@/hooks/category/useCategoryListMutation";
import { PaginationWithLinks } from "@/ui/pagination-with-link";
import SearchBar from "./search-bar";
import CategoryTableHeader from "./category-table-header";
import RenderSkeletonTable from "../render-skeleton-table";
import RenderTableError from "../render-table-error";
import CategoryTableBody from "./category-table-body";
import Link from "next/link";


const ITEMS_PER_PAGE = 6;

const CategoryTable: React.FC = () => {
  const searchParams = useSearchParams();
  const router = useRouter();
  const pathname = usePathname();
  
  const page = Number(searchParams.get("page") || 1);
  const searchTerm = searchParams.get("search") || "";

  const { mutate, data, isPending, isSuccess, isError, error } = useCategoryListMutation();

  const getFilterCategory = () => {
    mutate(`/?search=${searchTerm}&limit=${ITEMS_PER_PAGE}&page=${page}`);
  };

  React.useEffect(() => {
    getFilterCategory();
  }, [page,searchTerm==""]);

  const handleSearchInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    const params = new URLSearchParams(searchParams);
    params.set("search", e.target.value);
    router.replace(`${pathname}?${params.toString()}`, { scroll: false });
  };

  return (
    <div className="rounded-sm border border-stroke bg-white shadow-default dark:border-strokedark dark:bg-boxdark">
      <div className="flex flex-col items-center justify-between px-4 py-6 md:px-6 xl:px-7.5">
        <h4 className="mb-4 text-xl font-semibold text-black dark:text-white">Category</h4>
        <div className="flex w-full items-center justify-between">
          <SearchBar
            value={searchTerm}
            onChange={handleSearchInput}
            onSearch={getFilterCategory}
          />
          <Link href={'/category/form'} className="flex justify-center rounded bg-primary p-3 font-medium text-gray hover:bg-opacity-90">
          Add new
          </Link>
          
        </div>
      </div>

      <CategoryTableHeader />

      {isPending && <RenderSkeletonTable />}
      {isError && <RenderTableError error={error} />}
      {isSuccess && (
        <CategoryTableBody products={data?.data?.data || []} />
      )}

      <div className="px-10 py-10">
        <PaginationWithLinks
          totalCount={data?.data?.totalItems || 1}
          pageSize={ITEMS_PER_PAGE}
          page={page}
        />
      </div>
    </div>
  );
};

export default CategoryTable;