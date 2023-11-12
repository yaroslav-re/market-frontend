import { FormEvent } from "react";

export type PartsView = {
  parts: Part[];
  loading: boolean;
  filter: {} | Filtering;
  priceRange: number[];
  sorting: {} | Sorting;
  priceOrder: Order;
  username: string;
  password: string;
};

export type Part = {
  id: string;
  name: string;
  description: string;
  price: number;
  rating: number;
  img: string;
};

export type PartsModel = {
  parts: Part[];
  loading: boolean;
  filter: {} | Filtering;
  priceRange: number[];
  sorting: {} | Sorting;
  priceOrder: Order;
  username: string;
  password: string;
};

export type PartsHandler = {
  setParts: (parts: Part[]) => void;
  setFilter: (filtering: {} | Filtering) => void;
  setLoading: (isLoading: boolean) => void;
  setPriceRange: (priceRange: number[]) => void;
  onInputCommitHandler: () => void;
  handlePriceInputChange: (
    e: React.ChangeEvent<HTMLInputElement>,
    type: PriceInputChange,
  ) => void;
  setSorting: (sorting: {} | Filtering) => void;
  handleSortChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  setPriceOrder: (priceOrder: Order) => void;
  handleLogin: (e: FormEvent<HTMLFormElement>) => void;
  setUsername: (username: string) => void;
  setPassword: (password: string) => void;
};

export type Filtering = {
  price: { gte: string; lte: string };
};

export type Sorting = {
  // ratings: Order;
  price: Order;
};

export type Order = "descending" | "ascending";

export type PriceInputChange = "lower" | "upper";

export type UIValues = {
  filtering?: Filtering;
  sorting?: Sorting;
  maxPrice: number;
  minPrice: number;
};
