import React from "react";
import Button from "@mui/material/Button";
import Modal from "@mui/material/Modal";
import {
  Box,
  Checkbox,
  FormControl,
  FormControlLabel,
  FormGroup,
  Grid,
  Input,
  Radio,
  RadioGroup,
  TextField,
  Typography,
} from "@material-ui/core";
import { useParts } from "features/Parts/model/useParts";

export const Filter = () => {
  const {
    handlePriceInputChange,
    view,
    onInputCommitHandler,
    handleSortChange,
  } = useParts();

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
            <Input
              style={{ marginRight: 2 }}
              disabled={view.loading}
              placeholder="from"
              value={view.priceRange[0]}
              onBlur={onInputCommitHandler}
              type="number"
              onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                handlePriceInputChange(e, "lower")
              }
            />
            <Input
              disabled={view.loading}
              placeholder="to"
              type="number"
              value={view.priceRange[1]}
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
          <Grid item xs={12} sm={6}>
            <Typography gutterBottom>Sort by</Typography>

            <FormControl component="fieldset">
              <RadioGroup
                aria-label="reviews-order"
                name="reviews-order"
                value={view.priceOrder}
                onChange={handleSortChange}
              >
                <FormControlLabel
                  value="descending"
                  disabled={view.loading}
                  control={<Radio />}
                  label="price descending"
                />
                <FormControlLabel
                  value="ascending"
                  disabled={view.loading}
                  control={<Radio />}
                  label="price ascending"
                />
              </RadioGroup>
            </FormControl>
          </Grid>
        </div>
      </Box>
    </>
  );
};
