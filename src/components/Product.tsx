import { Box, ButtonGroup, Grid2, ImageList, ImageListItem, Paper, Typography, Button } from '@mui/material'
import { ProductProps } from '../types'
import { FC } from 'react'
import { Share } from '@mui/icons-material'

const Product:FC<ProductProps> = ({ product }) => {
  const generateSlug = (text: string): string =>{
    return text
        .toLowerCase()
        .trim()
        .replace(/[^a-z0-9\s-]/g, '') // Elimina caracteres no alfanuméricos
        .replace(/\s+/g, '-')         // Reemplaza espacios por guiones
        .replace(/-+/g, '-');         // Reemplaza múltiples guiones por uno solo
  }

  const formatCurrency = (amount:number, locale = 'es-AR', currency = 'ARS') =>{
    return new Intl.NumberFormat(locale, { style: 'currency', currency }).format(amount)
  }

  const productKey = generateSlug(product.name)

  const infoRequest = () => { 
    open(`https://api.whatsapp.com/send?phone=+5491130361238&text=Hola!, quiero tener mas información acerca de ${product.name} que tienes en venta.\n ${window.location.origin}/%23${productKey}/`, '_blank') 
  }

  const shareAction = () => {
    open(`https://api.whatsapp.com/send?text=Hola, Te comparto este producto que te puede interesar ${window.location.origin}/%23${productKey}?comprame=ok`, '_blank')
  }

  return (
    <>
     <Box sx={{ width: '100%'}} id={ productKey }>
      <Paper sx={{ overflow: 'hidden', mb: 4, p:2, borderRadius: 1, backgroundColor: '#fff' }} elevation={3}>
        <Grid2 container spacing={{ xs:1, md: 2 }}>
          <Grid2 size={{ xs:12, md:7 }} sx={{ overflow: 'hidden', display: 'flow' }}>
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

          <Grid2 size={{ xs:12, md: 5 }} 
            sx={{ color: '#34495e', textAlign: 'center',
              display: 'block',
              overflow: 'auto',
             }}
          >
            <Box sx={{ 
                backgroundColor: '#f9f9f9', 
                borderRadius: 2,
                mb: 0,
                p: 2,
                display: 'block',
                overflow: 'auto',
              }}>
              <h1>{ product.name }</h1>
              <Typography 
                sx={{ color: '#34495e', textAlign: 'left' }}
                dangerouslySetInnerHTML={{ __html: product.description }}></Typography>
              
              <Typography component={'span'}
                sx={{
                  fontSize: '2rem',
                  fontWeight: 'bold',
                  color: '#2c2c54',
                  display: 'block',
                  textAlign: 'right',
                  mb: 2
                }}
              >
                { formatCurrency(product.price) }
              </Typography>

              <ButtonGroup size="large" sx={{ float: 'right'}}>
                <Button onClick={ () => infoRequest() }>Consultar</Button>


                <Button onClick={ () => shareAction() }>
                  Compartir en Whatsapp <Share />
                </Button>
              </ButtonGroup>
              
            </Box>
          </Grid2>
        </Grid2>
      </Paper>
     </Box>
    </>
  )
}

export default Product
