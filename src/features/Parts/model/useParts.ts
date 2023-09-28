import { useEffect, useMemo, useState } from "react"
import { Part, Filtering, UIValues } from "../types"
import axios from "axios"
import { PartsViewModel } from "./PartsViewModel"
import { useHistory, useLocation } from "react-router-dom"

const useParts = () => {
  const history = useHistory()
  // const location = useLocation()

  // const params = location.search ? location.search : null

  const [parts, setParts] = useState<Part[]>([])
  const [loading, setLoading] = useState<boolean>(false)
  const [filter, setFilter] = useState<{} | Filtering>("")
  const [priceRange, setPriceRange] = useState<number | number[]>([0, 200000])

  useEffect(() => {
    let cancel;
    setLoading(true)

    const fetchParts = async () => {
      try {
        const { data } = await axios({
          method: "GET",
          url: "/api/parts",
        });
        setParts(data.data);
        setLoading(false)
      } catch (error) {
        if (axios.isCancel(error)) return;
        console.log(error.response.data);
      }
    };
    fetchParts();
    return;
  }, []);

  const updateUIValues = (UIValues: UIValues) => {
    if (UIValues.filtering?.price) {
      let priceFilter = UIValues.filtering.price
      setPriceRange([])
    }
  }

  const buildRangeFilter = (newValue: number | number[]) => {
    // @ts-ignore
    const urlFilter = `?reviews[gte]=${newValue[0]}&reviews[lte]=${newValue[1]}`;
    setFilter(urlFilter)
    history.push(urlFilter)
  }

  return useMemo(() => 
    new PartsViewModel({parts, loading, filter, priceRange}, {setParts, setLoading, setFilter, setPriceRange} ).create(), [parts, loading, filter])
}

export {useParts}