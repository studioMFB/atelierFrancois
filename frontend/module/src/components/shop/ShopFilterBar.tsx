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
        <select onChange={(event) => onCategoryChange(event.target.value)} value={category}>
          {categories.map((entry) => (
            <option key={entry} value={entry}>
              {entry}
            </option>
          ))}
        </select>
      </label>
    </section>
  );
}
