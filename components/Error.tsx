import React from "react";

const Error = ({ children }: { children: React.ReactNode }) => {
  return <p className="text-red-600 text-sm mb-1">{children}</p>;
};

export default Error;
