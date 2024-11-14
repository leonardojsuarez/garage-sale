import { MainLayout } from '../components/MainLayout'
import Product from '../components/Product'
import { useEffect, useState } from 'react';
import { DataService } from '../services/items'
import { ProductList } from '../interfaces'
import { Box } from '@mui/material';

const Home = () => {
  const initialState:ProductList = { products: [] }
  const [ products, setProducts ] = useState(initialState)

  useEffect(() => {
    DataService()
      .then((result) => setProducts({...products, products: result.products ?? []}))
  }, [])

  return (
    <div>
      <MainLayout>
        {
          products && products.products.length > 0 ? products.products.map((product, index) => (
            <Product key={index} product={product} />
          )) : <Box sx={{ alignContent: 'center', width: '100%', borderRadius: 4, overflow: 'hidden', mb: 4 }}>
            <img src="https://cdn.dribbble.com/users/711167/screenshots/10593461/media/4b666c161141c953bdc2570cf9dbac63.gif" width={'100%'} />
          </Box>
        }
      </MainLayout>
    </div>
  )
}

export default Home
