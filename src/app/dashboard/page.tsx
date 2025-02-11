import CreateAccount from "@/components/auth/signup";
import React from "react";

const page = () => {
  return (
    <div className="flex flex-col items-center gap-2">
      <h1>DashBoard</h1>
      <div className="border rounded-lg p-2 font-bold text-white hover:text-gray-50 bg-blue-500 hover:bg-blue-500/80">
        <CreateAccount />
      </div>
    </div>
  );
};

export default page;
