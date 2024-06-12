import { UserButton } from "@clerk/nextjs";
import React from "react";

const HomePage = () => {
  return (
    <div>
      <p>Home</p>
      <UserButton afterSignOutUrl="/sign-in" />
    </div>
  );
};

export default HomePage;
