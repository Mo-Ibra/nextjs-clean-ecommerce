import { getAllCategories } from "@/lib/data";
import CategoryCard from "./category-card";

/**
 * The Categories component displays a list of categories.
 */
function Categories() {
  /**
   * Get all categories from the data file.
   */
  const categories = getAllCategories();

  return (
    <section className="w-full py-12">
      <div className="container mx-auto px-4 py-4 md:py-6 md:px-8">
        <h2 className="text-3xl font-bold mb-8">
          Shop by Category
        </h2>
        {/* Display the categories in a grid. */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {categories.map((category) => (
            <CategoryCard key={category.id} category={category} />
          ))}
        </div>
      </div>
    </section>
  );
}

export default Categories;