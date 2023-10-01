import React from "react";
import Button from "@mui/material/Button";
import Modal from "@mui/material/Modal";
import {
  Box,
  Checkbox,
  FormControlLabel,
  FormGroup,
  Input,
  TextField,
  Typography,
} from "@material-ui/core";
import { useParts } from "features/Parts/model/useParts";

export const Filter = () => {
  const { handlePriceInputChange, view, onInputCommitHandler } = useParts();

  const style = {
    width: 400,
    bgcolor: "background.paper",
    boxShadow: 24,
    p: 4,
    margin: 20,
    borderRadius: 5,
  };

  return (
    <>
      <Box sx={style}>
        <div>
          <div>
            <Typography
              style={{ color: "black", marginBottom: 2 }}
              variant="h6"
            >
              Price
            </Typography>
            <TextField
              style={{ marginRight: 2 }}
              placeholder="from"
              // @ts-ignore
              value={view.priceRange[0]}
              // @ts-ignore
              onBlur={onInputCommitHandler}
              type="number"
              onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                handlePriceInputChange(e, "lower")
              }
            />
            <TextField
              placeholder="to"
              type="number"
              // @ts-ignore
              value={view.priceRange[1]}
              // @ts-ignore
              onBlur={onInputCommitHandler}
              onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                handlePriceInputChange(e, "upper")
              }
            />
          </div>
          <div style={{ marginTop: 8 }}>
            <Typography
              style={{ color: "black", marginBottom: 2 }}
              variant="h6"
            >
              Rating
            </Typography>
            <TextField
              style={{ marginRight: 2 }}
              placeholder="from"
              type="number"
              onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                handlePriceInputChange(e, "lower")
              }
            />
            <TextField
              placeholder="to"
              type="number"
              onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                handlePriceInputChange(e, "upper")
              }
            />
          </div>
        </div>
        <div>
          <Typography variant="h6" style={{ color: "black", marginBottom: 2 }}>
            Sort by...
          </Typography>
          <FormGroup>
            <FormControlLabel
              control={<Checkbox />}
              label="Price"
              style={{ color: "black" }}
            />
            <FormControlLabel
              control={<Checkbox />}
              label="Popularity"
              style={{ color: "black" }}
            />
          </FormGroup>
        </div>
      </Box>
    </>
  );
};
