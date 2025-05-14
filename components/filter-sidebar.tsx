"use client";

import { Checkbox } from "@/components/ui/checkbox";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { Slider } from "@/components/ui/slider";
import { Separator } from "@/components/ui/separator";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Category } from "@/lib/types";


interface FilterSidebarProps {
  categories: Category[];
  selectedCategories: string[];
  priceRange: [number, number];
  minPrice: number;
  maxPrice: number;
  onCategoryChange: (category: string) => void;
  onPriceChange: (range: [number, number]) => void;
  onClearFilters: () => void;
}

/**
 * The FilterSidebar component displays a list of categories and a price range
 * filter. The component also has a "Clear All Filters" button and a "Price Range"
 * toggle.
 *
 * @param categories - An array of categories to display.
 * @param selectedCategories - An array of selected categories.
 * @param priceRange - The currently selected price range.
 * @param minPrice - The minimum price of the price range.
 * @param maxPrice - The maximum price of the price range.
 * @param onCategoryChange - A function to call when a category is checked or
 * unchecked.
 * @param onPriceChange - A function to call when the price range is changed.
 * @param onClearFilters - A function to call when the "Clear All Filters" button
 * is clicked.
 */
function FilterSidebar({
  categories,
  selectedCategories,
  priceRange,
  minPrice,
  maxPrice,
  onCategoryChange,
  onPriceChange,
  onClearFilters,
}: FilterSidebarProps) {
  return (
    <div className="space-y-6">
      <div>
        <h3 className="text-lg font-medium mb-4">Filters</h3>
        <Button
          variant="outline"
          size="sm"
          onClick={onClearFilters}
          className="w-full"
        >
          Clear All Filters
        </Button>
      </div>

      <Separator />

      <Accordion
        type="multiple"
        defaultValue={["categories", "price"]}
        className="w-full"
      >
        <AccordionItem value="categories">
          <AccordionTrigger>Categories</AccordionTrigger>
          <AccordionContent>
            <div className="space-y-3">
              {categories.map((category) => (
                <div key={category.id} className="flex items-center space-x-2">
                  <Checkbox
                    id={`category-${category.id}`}
                    checked={selectedCategories.includes(category.name)}
                    onCheckedChange={() => onCategoryChange(category.name)}
                  />
                  <Label
                    htmlFor={`category-${category.id}`}
                    className="text-sm font-normal cursor-pointer"
                  >
                    {category.name}
                  </Label>
                </div>
              ))}
            </div>
          </AccordionContent>
        </AccordionItem>

        <AccordionItem value="price">
          <AccordionTrigger>Price Range</AccordionTrigger>
          <AccordionContent>
            <div className="space-y-4">
              <Slider
                defaultValue={[minPrice, maxPrice]}
                min={minPrice}
                max={maxPrice}
                step={1}
                value={priceRange}
                onValueChange={(value) =>
                  onPriceChange(value as [number, number])
                }
                className="mt-6"
              />
              <div className="flex items-center justify-between">
                <div className="border rounded-md px-2 py-1 w-20">
                  ${priceRange[0]}
                </div>
                <div className="border rounded-md px-2 py-1 w-20 text-right">
                  ${priceRange[1]}
                </div>
              </div>
            </div>
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    </div>
  );
}

export default FilterSidebar;