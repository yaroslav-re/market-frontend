import { Button, Card, CardContent, Typography, styled, } from '@material-ui/core'
import { AspectRatio } from '@material-ui/icons'
import CardOverflow from '@mui/joy/CardOverflow';
import Link from '@mui/joy/Link';
import { Part } from 'features/Parts/types';
import React from 'react'

const AddingToCartButton = styled("button")(({theme}) => ({
  width: "100%",
  backgroundColor: "#c41c1c",
  padding: theme.spacing(2),
  borderRadius: 0,
  '&:hover': {
    backgroundColor: "#a51818",
  },
  cursor: "pointer",
  border: 0,
  fontSize: 16,
  color: theme.palette.common.white,
}))

export const ProductCard = (part: any) => {

  return (
    <Card style={{ width: 250, boxShadow: 'lg', margin: 20}}>
    <CardOverflow>
      <img src="https://kolesa-uploads.ru/-/06459f28-7ccd-45f4-97e7-7c1f5c305123/004-1.jpg" style={{width: "100%"}}/>
    </CardOverflow>
    <CardContent>
      <Link textColor="text.primary" color='neutral'>
        <Typography variant='h6' >{part.name}</Typography>
      </Link>
      <Typography style={{ fontSize: 14}}></Typography>
      <Typography style={{ fontSize: 19, marginTop: 8}}>762$</Typography>
    </CardContent>
    <CardOverflow>
      <AddingToCartButton>
        Add to cart
      </AddingToCartButton>
    </CardOverflow>
  </Card>
  )
}

// дз: надо сделать