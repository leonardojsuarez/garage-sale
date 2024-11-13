import { Container, Grid2 } from '@mui/material'
import { ReactNode } from 'react'

type Props = {
  children: ReactNode
}

export const MainLayout = ({ children }:Props) => {
  return (
    <>
        <header></header>

        <Container sx={{ with: '100%' }}>
            <Grid2 container spacing={0} sx={{ width: '100%' }}>
              { children ?? <p>Page under construction</p> }
            </Grid2>
        </Container>

        <footer></footer>
    </>
  )
}
