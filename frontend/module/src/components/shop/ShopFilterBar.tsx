import { CustomSelect } from "@/components/ui/CustomSelect";

interface ShopFilterBarProps {
  search: string;
  category: string;
  categories: string[];
  onSearchChange: (value: string) => void;
  onCategoryChange: (value: string) => void;
}

export function ShopFilterBar({
  search,
  category,
  categories,
  onSearchChange,
  onCategoryChange,
}: ShopFilterBarProps) {
  return (
    <section className="filter-bar">
      <label className="field">
        <span className="visually-hidden">Search</span>
        <input
          onChange={(event) => onSearchChange(event.target.value)}
          placeholder="Search products..."
          type="search"
          value={search}
        />
      </label>
      <label className="field">
        <span className="visually-hidden">Category</span>
        <CustomSelect
          ariaLabel="Category"
          onChange={onCategoryChange}
          options={categories.map((entry) => ({
            label: entry,
            value: entry,
          }))}
          value={category}
        />
      </label>
    </section>
  );
}
