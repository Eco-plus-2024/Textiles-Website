import React from "react";

const RenderTableError = (error: any) => {
  return (
    <div className="mt-3 w-full text-center text-red-400">
      <p>Error : {error.message||"Something went wrong"}</p>
    </div>
  );
};

export default RenderTableError;
