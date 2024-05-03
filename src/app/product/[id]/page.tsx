import React from "react";

const Page = ({ params }: any) => {
  return <div>Product Detail: {JSON.stringify(params)}</div>;
};

export default Page;
