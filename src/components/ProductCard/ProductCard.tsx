import { Card, CardContent, Typography, styled } from "@material-ui/core";
import CardOverflow from "@mui/joy/CardOverflow";
import { PartDescription } from "components/PartDescription";

import { Part } from "features/Parts/types";
import React from "react";
import { Link, useLocation, useParams } from "react-router-dom";

const AddingToCartButton = styled("button")(({ theme }) => ({
  width: "40%",
  backgroundColor: "#c41c1c",
  padding: theme.spacing(1),
  borderRadius: 4,
  "&:hover": {
    backgroundColor: "#a51818",
  },
  cursor: "pointer",
  border: 0,
  fontSize: 16,
  color: theme.palette.common.white,
  position: "absolute",
  right: 8,
  bottom: 12,
}));

export const ProductCard = (part: any) => {
  const handleClick = () => {
    // console.log(part.part._id);
  };

  return (
    <Card style={{ width: 250, boxShadow: "lg", margin: 20 }}>
      <CardOverflow>
        <img src={part.part.img} style={{ width: "100%" }} />
      </CardOverflow>
      <CardContent>
        <Link
          to={`/description/${part.part._id}`}
          color="neutral"
          style={{ color: "inherit", textDecoration: "none" }}
          onClick={handleClick}
        >
          <Typography variant="h6">{part.part.name}</Typography>
        </Link>
        <Typography style={{ fontSize: 14 }}>
          {part.part.description}
        </Typography>
        <Typography
          style={{ fontSize: 19, marginTop: 8 }}
        >{`${part.part.price}$`}</Typography>
      </CardContent>
      <CardOverflow>
        <AddingToCartButton>Add to cart</AddingToCartButton>
      </CardOverflow>
    </Card>
  );
};
