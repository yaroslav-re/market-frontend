import { Button, Input, Typography, styled } from "@material-ui/core";
import { useParts } from "features/Parts/model/useParts";
import React from "react";

export const LogInForm = () => {
  const StyledInput = styled(Input)(() => ({
    width: "350px",
    color: "inherit",
    marginTop: "15px",
  }));

  const { view, handleLogin, setUsername, setPassword } = useParts();

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
        onSubmit={(e) => {
          handleLogin(e);
        }}
      >
        <Typography variant="h3">Log In</Typography>
        <StyledInput
          placeholder="Name"
          value={view.username}
          // onChange={({ target }) => setUsername(target.value)}
        />
        <StyledInput
          placeholder="Password"
          value={view.password}
          // onChange={({ target }) => setPassword(target.value)}
        />
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
