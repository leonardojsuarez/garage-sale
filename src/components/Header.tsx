import { Share } from '@mui/icons-material'
import { Box, Button, Typography } from '@mui/material'

export const Header = () => {
    const fontTheme = {
        color: '#2f3542',
        textAlign: 'center',
        fontWeight: 'lighter'
    }

    const shareSite = () => {
        open(`https://api.whatsapp.com/send?text=Hola, Un amigo se esta mudando y esta vendiendo algunas cosas, te comparto la lista ${window.location.origin}`, '_blank')
    }

    return (
        <>
            <Box component={'header'} sx={{ with: '100%', p: 4, textAlign: 'center' }}>
                <Typography 
                    variant="h6"
                    component={'h1'}
                    sx={fontTheme}
                >
                    Hola!, soy Leo. Me estoy mudando y te comparto algunas cositas de casa que estan en venta.
                </Typography>
                <Button variant="contained" 
                    onClick={ () => shareSite() } 
                    sx={{ 
                        alignContent: 'center',
                        mt: 2
                    }}>Compartir es sitio <Share /></Button>
            </Box>
        </>
    )
}