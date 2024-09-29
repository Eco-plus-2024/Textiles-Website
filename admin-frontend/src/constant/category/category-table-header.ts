export interface ICategoryTableHeader {
  title: string;
  className?: string;
}

export const categoryTableHeader: ICategoryTableHeader[] = [
  {
    title: "Category",
    className: "col-span-3 flex items-center",
  },
  {
    title: "Type",
    className: "col-span-2 hidden items-center sm:flex",
  },
  {
    title: "Status",
    className: "col-span-1 flex items-center",
  },
  {
    title: "Actions",
    className: "col-span-1 flex items-center ",
  },
];
