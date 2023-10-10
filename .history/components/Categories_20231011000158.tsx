"use client";

import { Category } from "@prisma/client";
import CategoryButton from "./ui/CategoryButton";

interface CategoryProps {
  data: Category[];
}
const Categories = ({ data }: CategoryProps) => {
  return (
    <div>
      {data.map((category) => (
        <CategoryButton key={category.id}>{category.name}</CategoryButton>
      ))}
    </div>
  );
};

export default Categories;
