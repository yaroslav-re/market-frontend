import { Button, Input, Typography, styled } from "@material-ui/core";
import React from "react";

export const SignUpForm = () => {
  const StyledInput = styled(Input)(() => ({
    width: "350px",
    color: "inherit",
    marginTop: "15px",
  }));
  // @ts-ignore
  const handleRegister = (e) => {
    e.preventDefault();
    console.log(e.target);
  };

  return (
    <>
      <form
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          marginTop: "15%",
          color: "white",
        }}
        // @ts-ignore
        onSubmit={(e) => {
          handleRegister(e);
        }}
      >
        <Typography variant="h3">Sign Up</Typography>
        <StyledInput placeholder="Name" />
        <StyledInput placeholder="Password" />
        <Button
          variant="contained"
          style={{
            marginTop: "15px",
            backgroundColor: "#484fb8",
            color: "inherit",
          }}
          type="submit"
        >
          Submit
        </Button>
      </form>
    </>
  );
};
