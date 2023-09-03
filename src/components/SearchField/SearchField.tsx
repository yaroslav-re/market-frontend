import { InputBase, alpha, styled } from '@material-ui/core';
import React from 'react'
import SearchIcon from '@mui/icons-material/Search';

const Field = styled('div')(({ theme }) => ({
  backgroundColor: alpha(theme.palette.common.white, 0.15),
  '&:hover': {
    backgroundColor: alpha(theme.palette.common.white, 0.25),
  },
  width: "auto",
  height: 38,
  marginLeft: "auto",
  borderRadius: theme.shape.borderRadius,
  display: "flex",
}));

const SearchIconWrapper = styled("div")(({theme}) => ({
  height: 38,
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  padding: theme.spacing(0, 2),
  width: 5,
}))

const StyledInputBase = styled(InputBase)(({theme}) => ({
  color: "inherit",
  padding: 4,
  marginRight: theme.spacing(1),
  '& .MuiInputBase-input': {
    transition: theme.transitions.create('width'),
    [theme.breakpoints.up('sm')]: {
      width: '12ch',
      '&:focus': {
        width: '30ch',
      },
    },
  },
}))

export const SearchField = () => {
  return (
    <Field>
      <SearchIconWrapper>
        <SearchIcon/>
      </SearchIconWrapper>
      <StyledInputBase placeholder="Search..."/>
    </Field>
  )
}
