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
}

export type PartsHandler = {
  setParts: (parts: Part[]) => void,
  setFilter: (filtering: {} | Filtering) => void,
  setLoading: (isLoading: boolean) => void
}

export type Filtering = {
  price: {gte: string; lte: string}
}