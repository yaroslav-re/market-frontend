import { Button, Input, Typography, styled } from "@material-ui/core";
import React from "react";

export const LogInForm = () => {
  const StyledInput = styled(Input)(() => ({
    width: "350px",
    color: "inherit",
    marginTop: "15px",
  }));

  return (
    <>
      <form
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          marginTop: "15%",
        }}
      >
        <Typography variant="h3">Log In</Typography>
        <StyledInput placeholder="Name" />
        <StyledInput placeholder="Password" />
        <Button
          variant="contained"
          style={{
            marginTop: "15px",
            backgroundColor: "#484fb8",
            color: "inherit",
          }}
        >
          Submit
        </Button>
      </form>
    </>
  );
};
