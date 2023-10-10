"use client";

import { Category } from "@prisma/client";
import CategoryButton from "./ui/CategoryButton";
import { useRouter, usePathname } from "next/navigation";
import qs from "query-string";
import { useSearchParams } from "next/navigation";

interface CategoryProps {
  data: Category[];
}
const Categories = ({ data }: CategoryProps) => {
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const name = searchParams.get("name");
  const selectedCategory = searchParams.get("category");

  const handleCategory = (category: string | undefined) => {
    const query = {
      name,
      category,
    };

    const url = qs.stringifyUrl(
      {
        url: pathname,
        query,
      },
      { skipEmptyString: true, skipNull: true }
    );

    router.push(url);
  };

  return (
    <div className="flex flex-wrap gap-2 mt-3">
      {data.map((category) => (
        <CategoryButton
          isSelected={selectedCategory === category.name}
          key={category.id}
          onClick={() => handleCategory(category.name)}>
          {category.name}
        </CategoryButton>
      ))}
    </div>
  );
};

export default Categories;
