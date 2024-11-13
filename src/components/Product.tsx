import { Box, Grid2, ImageList, ImageListItem, Paper, Typography } from '@mui/material'
import { ProductProps } from '../types'
import { FC } from 'react'


const Product:FC<ProductProps> = ({ product }) => {
  return (
    <>
     <Box sx={{ width: '100%'}}>
      <Paper sx={{ overflow: 'hidden', mb: 4, p:2 }} elevation={2}>
        <Grid2 container spacing={2}>
          <Grid2 size={{ xs:12, md:7 }} sx={{ overflow: 'hidden', overflowY: 'hidden', overflowX: 'scroll' }}>
            <ImageList sx={{ maxWidth: '100%'  }} cols={ product.pictures.length > 1 ? 2 : 1}>
              {product.pictures.map((item) => (
                <ImageListItem key={item}>
                  <img
                    srcSet={`${item}?w=164&h=164&fit=crop&auto=format&dpr=2 2x`}
                    src={`${item}?w=164&h=164&fit=crop&auto=format`}
                    loading="lazy"
                  />
                </ImageListItem>
              ))}
            </ImageList>
          </Grid2>

          <Grid2 size={{ xs:12, md: 5 }} sx={{ color: '#2d3436', textAlign: 'right' }}>
            <Box sx={{  }}>
              <h1>{ product.name }</h1>
              <Typography 
                sx={{ color: '#2d3436', textAlign: 'left' }}
                dangerouslySetInnerHTML={{ __html: product.description }}></Typography>
              <p>{ product.price }</p>
              <button>Comprar</button>
            </Box>
          </Grid2>
        </Grid2>
      </Paper>
     </Box>
    </>
  )
}

export default Product
