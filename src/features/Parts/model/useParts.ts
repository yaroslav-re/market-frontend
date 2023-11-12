import { FormEvent, useEffect, useMemo, useState } from "react";
import {
  Part,
  Filtering,
  UIValues,
  PriceInputChange,
  Sorting,
  Order,
} from "../types";
import axios, { Canceler } from "axios";
import { PartsViewModel } from "./PartsViewModel";
import { useHistory, useLocation } from "react-router-dom";

const useParts = () => {
  const history = useHistory();
  const location = useLocation();

  const params = location.search ? location.search : null;

  const [parts, setParts] = useState<Part[]>([]);
  const [loading, setLoading] = useState<boolean>(false);
  const [filter, setFilter] = useState<{} | Filtering>("");
  const [priceRange, setPriceRange] = useState<number[]>([0, 200000]);
  const [sorting, setSorting] = useState<{} | Sorting>("");
  const [priceOrder, setPriceOrder] = useState<Order>("ascending");
  const [username, setUsername] = useState<string>("");
  const [password, setPassword] = useState<string>("");

  useEffect(() => {
    let cancel: Canceler;

    const fetchParts = async () => {
      setLoading(true);
      try {
        let query: any;

        if (params && !filter) {
          query = params;
        } else {
          query = filter;
        }

        if (sorting) {
          if (query.length === 0) {
            query = `?sort=${sorting}`;
          } else {
            query = query + "&sort=" + sorting;
          }
        }

        const { data } = await axios({
          method: "GET",
          url: `/api/parts${query}`,
          cancelToken: new axios.CancelToken((c) => (cancel = c)),
        });

        setParts(data.data);
        setLoading(false);
        updateUIValues(data.UIValues);
      } catch (error) {
        if (axios.isCancel(error)) return;
        console.log(error.response.data);
      }
    };
    fetchParts();
    return () => cancel();
  }, [filter, params, sorting]);

  const updateUIValues = (UIValues: UIValues) => {
    if (UIValues.filtering?.price) {
      let priceFilter = UIValues.filtering.price;
      setPriceRange([Number(priceFilter.gte), Number(priceFilter.lte)]);
    }

    if (UIValues.sorting?.price) {
      let priceSort = UIValues.sorting.price;
      setPriceOrder(priceSort);
    }
  };

  const handlePriceInputChange = (
    e: React.ChangeEvent<HTMLInputElement>,
    type: PriceInputChange,
  ) => {
    let newRange;
    if (type === "lower") {
      newRange = [...priceRange];
      newRange[0] = Number(e.target.value);
      setPriceRange(newRange as number[]);
    }
    if (type === "upper") {
      newRange = [...priceRange];
      newRange[1] = Number(e.target.value);
      setPriceRange(newRange as number[]);
    }
  };

  const onInputCommitHandler = () => {
    buildRangeFilter(priceRange);
  };

  const buildRangeFilter = (newValue: number[]) => {
    const urlFilter = `?price[gte]=${newValue[0]}&price[lte]=${newValue[1]}`;
    setFilter(urlFilter);
    history.push(urlFilter);
  };

  const handleSortChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPriceOrder(e.target.value as Order);

    if (e.target.value === "ascending") {
      setSorting("price");
    } else if (e.target.value === "descending") {
      setSorting("-price");
    }
  };

  const handleLogin = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      const response = await axios.post("http://localhost:3001/api/login", {
        username,
        password,
      });
      const user = response.data;
      console.log(user);
    } catch (exception) {
      console.log("you are not exist");
    }
  };

  return useMemo(
    () =>
      new PartsViewModel(
        {
          parts,
          loading,
          filter,
          priceRange,
          sorting,
          priceOrder,
          username,
          password,
        },
        {
          setParts,
          setLoading,
          setFilter,
          setPriceRange,
          onInputCommitHandler,
          handlePriceInputChange,
          setSorting,
          handleSortChange,
          setPriceOrder,
          handleLogin,
          setUsername,
          setPassword,
        },
      ).create(),
    [parts, loading, filter, priceRange, sorting, priceOrder],
  );
};

export { useParts };
