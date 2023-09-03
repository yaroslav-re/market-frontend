import { useEffect, useMemo, useState } from "react"
import { Part, Filtering } from "../types"
import axios from "axios"
import { PartsViewModel } from "./PartsViewModel"

const useParts = () => {
  const [parts, setParts] = useState<Part[]>([])
  const [loading, setLoading] = useState<boolean>(false)
  const [filter, setFilter] = useState<{} | Filtering>({gte: "0", lte: "20000"})

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

  return useMemo(() => 
    new PartsViewModel({parts, loading, filter}, {setParts, setLoading, setFilter} ).create(), [])
}

export {useParts}