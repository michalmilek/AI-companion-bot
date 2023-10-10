"use client";

import { Category } from "@prisma/client";

interface CategoryProps {
  data: Category[];
}

const Categories = ({ data }: CategoryProps) => {
  return <div>Categories</div>;
};

export default Categories;
