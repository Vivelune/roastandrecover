// ============================================
// Product Attribute Constants
// Shared between frontend filters and Sanity schema
// RoastAndRecover - Luxury Portable Brewing
// ============================================

export const COLORS = [
    { value: "black", label: "Obsidian Black" },
    { value: "white", label: "Porcelain White" },
    { value: "oak", label: "Toasted Oak" },
    { value: "walnut", label: "Espresso Walnut" },
    { value: "grey", label: "Morning Mist" },
    { value: "natural", label: "Raw Linen" },
    { value: "copper", label: "Patina Copper" }, // Added for luxury feel
    { value: "brass", label: "Aged Brass" }, // Added for premium accessories
  ] as const;
  
  export const MATERIALS = [
    { value: "wood", label: "Sustainable Walnut" },
    { value: "metal", label: "Bonded Steel" },
    { value: "fabric", label: "Technical Canvas" },
    { value: "leather", label: "Italian Leather" },
    { value: "glass", label: "Borosilicate Glass" },
    { value: "ceramic", label: "Artisan Ceramic" }, // Added for pour-over
    { value: "silicone", label: "Heat-Shield Silicone" }, // Added for portable use
  ] as const;
  
  export const BREW_METHODS = [
    { value: "pour_over", label: "Pour Over" },
    { value: "french_press", label: "French Press" },
    { value: "espresso", label: "Espresso" },
    { value: "cold_brew", label: "Cold Brew" },
    { value: "aeroPress", label: "AeroPress Style" },
  ] as const;
  
  export const CAPACITY = [
    { value: "200ml", label: "200ml - Single Serve" },
    { value: "350ml", label: "350ml - Travel" },
    { value: "500ml", label: "500ml - Double Shot" },
    { value: "750ml", label: "750ml - Shared" },
  ] as const;
  
  export const SORT_OPTIONS = [
    { value: "name", label: "Name (A-Z)" },
    { value: "price_asc", label: "Price: Low to High" },
    { value: "price_desc", label: "Price: High to Low" },
    { value: "newest", label: "Newest Arrivals" }, // Added for luxury collections
    { value: "bestseller", label: "Bestselling" }, // Added
  ] as const;
  
  // Type exports
  export type ColorValue = (typeof COLORS)[number]["value"];
  export type MaterialValue = (typeof MATERIALS)[number]["value"];
  export type BrewMethodValue = (typeof BREW_METHODS)[number]["value"];
  export type CapacityValue = (typeof CAPACITY)[number]["value"];
  export type SortValue = (typeof SORT_OPTIONS)[number]["value"];
  
  // ============================================
  // Sanity Schema Format Exports
  // ============================================
  
  /** Colors formatted for Sanity schema options.list */
  export const COLORS_SANITY_LIST = COLORS.map(({ value, label }) => ({
    title: label,
    value,
  }));
  
  /** Materials formatted for Sanity schema options.list */
  export const MATERIALS_SANITY_LIST = MATERIALS.map(({ value, label }) => ({
    title: label,
    value,
  }));
  
  /** Brew methods formatted for Sanity schema options.list */
  export const BREW_METHODS_SANITY_LIST = BREW_METHODS.map(({ value, label }) => ({
    title: label,
    value,
  }));
  
  /** Capacity formatted for Sanity schema options.list */
  export const CAPACITY_SANITY_LIST = CAPACITY.map(({ value, label }) => ({
    title: label,
    value,
  }));
  
  /** Color values array for zod enums or validation */
  export const COLOR_VALUES = COLORS.map((c) => c.value) as [
    ColorValue,
    ...ColorValue[],
  ];
  
  /** Material values array for zod enums or validation */
  export const MATERIAL_VALUES = MATERIALS.map((m) => m.value) as [
    MaterialValue,
    ...MaterialValue[],
  ];
  
  /** Brew method values array for zod enums or validation */
  export const BREW_METHOD_VALUES = BREW_METHODS.map((b) => b.value) as [
    BrewMethodValue,
    ...BrewMethodValue[],
  ];
  
  /** Capacity values array for zod enums or validation */
  export const CAPACITY_VALUES = CAPACITY.map((c) => c.value) as [
    CapacityValue,
    ...CapacityValue[],
  ];