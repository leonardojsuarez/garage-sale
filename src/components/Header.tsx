import { Box, Typography } from '@mui/material'

export const Header = () => {
    const fontTheme = {
        color: '#2f3542',
        textAlign: 'center',
        fontWeight: 'lighter'
    }

    return (
        <>
            <Box component={'header'} sx={{ with: '100%', p: 4 }}>
                <Typography 
                    variant="h3"
                    component={'h1'}
                    sx={fontTheme}
                >
                    Hola!, soy Leo. Me estoy mudando y te comparto algunas cositas de casa que estan en venta.
                </Typography>
            </Box>
        </>
    )
}