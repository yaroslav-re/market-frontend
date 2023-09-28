import React from "react";
import Button from "@mui/material/Button";
import Modal from "@mui/material/Modal";
import { Box, Input, Typography } from "@material-ui/core";
import { useParts } from "features/Parts/model/useParts";

export const FilterModal = () => {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const { handlePriceInputChange } = useParts();

  const style = {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: 400,
    bgcolor: "background.paper",
    border: "2px solid #000",
    boxShadow: 24,
    p: 4,
  };

  return (
    <>
      <Button onClick={handleOpen} sx={{ marginLeft: "auto", marginRight: 0 }}>
        Filter
      </Button>
      <Modal open={open} onClose={handleClose}>
        <Box sx={style}>
          <Typography style={{ color: "black", marginBottom: 2 }} variant="h6">
            Price
          </Typography>
          <Input
            style={{ marginRight: 1 }}
            placeholder="from"
            type="number"
            onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
              handlePriceInputChange(e, "lower")
            }
          />
          <Input
            placeholder="to"
            type="number"
            onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
              handlePriceInputChange(e, "upper")
            }
          />
          <Button style={{ margin: 2 }}>Submit</Button>
        </Box>
      </Modal>
    </>
  );
};
