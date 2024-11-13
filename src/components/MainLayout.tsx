import { Container, Grid2 } from '@mui/material'
import { ReactNode } from 'react'
import { Header } from './Header'

type Props = {
  children: ReactNode
}

export const MainLayout = ({ children }:Props) => {
  return (
    <>
        <Header />

        <Container sx={{ with: '100%' }}>
            <Grid2 container spacing={0} sx={{ width: '100%' }}>
              { children ?? <p>Page under construction</p> }
            </Grid2>
        </Container>

        <footer></footer>
    </>
  )
}
