import { Button, Typography } from "@material-ui/core";
import axios from "axios";
import { Part } from "features/Parts/types";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

export const PartDescription = () => {
  const [product, setProduct] = useState<Part>();

  const location = useParams();

  useEffect(() => {
    const fetchPart = async () => {
      // @ts-ignore
      const { data } = await axios({
        method: "GET",
        // @ts-ignore
        url: `/api/parts/${location.id}`,
        // @ts-ignore
      });
      setProduct(data.data);
    };

    fetchPart();
  }, []);

  console.log(product);

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        paddingTop: 40,
        color: "white",
      }}
    >
      <img
        src={product?.img}
        style={{ width: 500, height: 500, marginRight: 40 }}
      ></img>
      <div>
        <Typography variant="h4">{product?.name}</Typography>
        <Typography variant="h6">{product?.description}</Typography>
        <Typography variant="h3" style={{ marginTop: 12 }}>
          {`${product?.price}$`}
        </Typography>
        <Button style={{ color: "white", marginTop: 16 }}>Add to cart</Button>
      </div>
    </div>
  );
};
