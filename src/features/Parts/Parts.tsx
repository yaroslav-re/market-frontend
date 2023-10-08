import React from "react";
import { ProductCard } from "components/ProductCard";
import { useParts } from "./model/useParts";
import { v4 as uuidv4 } from "uuid";
import { Backdrop, CircularProgress, Grid } from "@material-ui/core";
import { Filter } from "components/Filter";

export const Parts = () => {
  const { view } = useParts();

  return view.loading ? (
    <div>
      <Backdrop open={true}>
        <CircularProgress color="inherit" />
      </Backdrop>
    </div>
  ) : (
    <div>
      <Filter />
      <Grid
        container
        // @ts-ignore
        spacing={{ xs: 2, md: 3 }}
        columns={{ xs: 4, sm: 8, md: 12 }}
      >
        {view.parts.length > 0 &&
          view.parts.map((part, index) => {
            return <ProductCard part={part} key={uuidv4()} />;
          })}
      </Grid>
    </div>
  );
};
