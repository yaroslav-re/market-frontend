export type PartsView = {
  parts: Part[],
  loading: boolean,
  filter: {} | Filtering,
}

export type Part = {
  id: string,
  name: string,
  description: string,
  price: number,
  rating: number,
  img: string,
}

export type PartsModel = {
  parts: Part[],
  loading: boolean,
  filter: {} | Filtering,
  priceRange: number | number[],
}

export type PartsHandler = {
  setParts: (parts: Part[]) => void,
  setFilter: (filtering: {} | Filtering) => void,
  setLoading: (isLoading: boolean) => void,
  setPriceRange: (priceRange: number | number[]) => void,
}

export type Filtering = {
  price: {gte: string; lte: string}
}

export type Sorting = {
  ratings: Order,
  price?: Order,
}

export type Order = "descending" | "ascending"

export type PriceInputChange = "lower" | "upper"

export type UIValues = {
  filtering?: Filtering,
  sorting?: Sorting,
  maxPrice: number,
  minPrice: number,
}