import { SearchInput } from "@/components/ui/search-input";
import { UserButton } from "@clerk/nextjs";
import React from "react";

const RootPage = () => {
  return (
    <div>
      <SearchInput label="Search" />
    </div>
  );
};

export default RootPage;
