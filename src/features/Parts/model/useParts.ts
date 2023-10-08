import { useEffect, useMemo, useState } from "react";
import { Part, Filtering, UIValues, PriceInputChange } from "../types";
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

  const updateUIValues = (UIValues: UIValues) => {
    if (UIValues.filtering?.price) {
      let priceFilter = UIValues.filtering.price;
      setPriceRange([Number(priceFilter.gte), Number(priceFilter.lte)]);
    }
  };

  useEffect(() => {
    let cancel: Canceler;

    const fetchParts = async () => {
      setLoading(true);
      try {
        let query;

        if (params && !filter) {
          query = params;
        } else {
          query = filter;
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
  }, [filter, params]);

  const handlePriceInputChange = (
    e: React.ChangeEvent<HTMLInputElement>,
    type: PriceInputChange
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
    // @ts-ignore
    const urlFilter = `?price[gte]=${newValue[0]}&price[lte]=${newValue[1]}`;
    setFilter(urlFilter);
    history.push(urlFilter);
  };

  return useMemo(
    () =>
      new PartsViewModel(
        { parts, loading, filter, priceRange },
        {
          setParts,
          setLoading,
          setFilter,
          setPriceRange,
          onInputCommitHandler,
          handlePriceInputChange,
        }
      ).create(),
    [parts, loading, filter, priceRange]
  );
};

export { useParts };
