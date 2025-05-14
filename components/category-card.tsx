import { Category } from "@/lib/types";
import Image from "next/image";
import Link from "next/link";
import { Card, CardContent } from "./ui/card";

interface CategoryCardProps {
  category: Category;
}

/**
 * CategoryCard component displays a category with an image, name, and a link
 * to the category's page.
 *
 * @param {CategoryCardProps} props - Props containing the category details.
 * @returns {JSX.Element} The rendered CategoryCard component.
 */
function CategoryCard({ category }: CategoryCardProps) {
  return (
    <Link href={`categories/${category.slug}`}>
      <Card className="overflow-hidden transition-all hover:shadow-md py-0 gap-0">
        <div className="aspect-square relative">
          <Image
            src={category.image || "/placeholder.svg"}
            alt={category.name}
            fill
            className="object-cover"
          />
        </div>
        <CardContent className="p-4">
          <h3 className="font-medium text-center">{category.name}</h3>
        </CardContent>
      </Card>
    </Link>
  );
}

export default CategoryCard;
