import { Box, Button, Input, Typography, styled } from "@material-ui/core";
import axios from "axios";

import React, { FormEvent, useState } from "react";

export const LogInForm = () => {
  const StyledInput = styled(Input)(() => ({
    width: "350px",
    color: "inherit",
    marginTop: "15px",
  }));

  const handleLogin = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const data = new FormData(event.currentTarget);

    try {
      const response = await axios.post("http://localhost:3001/api/login", {
        email: data.get("email"),
        password: data.get("password"),
      });
      const user = response.data;
      console.log(user);
    } catch (exception) {
      console.log("you don't exist");
    }
  };

  return (
    <>
      <Box
        component="form"
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          marginTop: "15%",
          color: "white",
        }}
        onSubmit={handleLogin}
      >
        <Typography variant="h3">Log In</Typography>
        <StyledInput
          required
          fullWidth
          id="email"
          name="email"
          autoComplete="email"
          autoFocus
        />
        <StyledInput
          required
          fullWidth
          name="password"
          type="password"
          id="password"
          autoComplete="current-password"
        />
        <Button
          type="submit"
          variant="contained"
          style={{
            marginTop: "15px",
            backgroundColor: "#484fb8",
            color: "inherit",
          }}
        >
          Submit
        </Button>
      </Box>
    </>
  );
};
