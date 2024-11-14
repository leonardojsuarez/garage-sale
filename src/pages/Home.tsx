import { MainLayout } from '../components/MainLayout'
import Product from '../components/Product'
import { useEffect, useState } from 'react';
import { DataService } from '../services/items'
import { ProductList } from '../interfaces'

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
          )) : <div>No products</div>
        }
      </MainLayout>
    </div>
  )
}

export default Home
