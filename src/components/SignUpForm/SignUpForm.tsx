import { Box, Button, Input, Typography, styled } from "@material-ui/core";
import axios from "axios";
import React, { FormEvent } from "react";

export const SignUpForm = () => {
  const StyledInput = styled(Input)(() => ({
    width: "350px",
    color: "inherit",
    marginTop: "15px",
  }));

  const handleRegister = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const data = new FormData(event.currentTarget);

    try {
      const response = await axios.post("http://localhost:3001/api/register", {
        email: data.get("email"),
        password: data.get("password"),
      });

      const user = response.data;
      console.log(user);
    } catch (exception) {
      console.log(exception);
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
        onSubmit={handleRegister}
      >
        <Typography variant="h3">Sign Up</Typography>
        <StyledInput required fullWidth id="email" name="email" autoFocus />
        <StyledInput
          required
          fullWidth
          name="password"
          type="password"
          id="password"
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
