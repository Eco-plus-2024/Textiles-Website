import React from "react";
import { Skeleton } from "../ui/skeleton";

const RenderSkeletonTable = () => {
  return (
    <div className="grid grid-cols-4 gap-3 px-2">
      {Array(28)
        .fill(0)
        .map((_, index) => (
          <div key={index}>
            <Skeleton className="h-10 w-full rounded-md" />
          </div>
        ))}
    </div>
  );
};

export default RenderSkeletonTable;
