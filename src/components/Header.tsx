import { Share } from '@mui/icons-material'
import { Avatar, Box, Button, Typography } from '@mui/material'

export const Header = () => {
    const fontTheme = {
        color: '#2f3542',
        textAlign: 'center',
        fontWeight: 'bolder',
        fontFamily: '"Plus Jakarta Sans", serif'
    }

    const shareSite = () => {
        open(`https://api.whatsapp.com/send?text=Hola, Un amigo se esta mudando y esta vendiendo algunas cosas, te comparto la lista ${window.location.origin}`, '_blank')
    }

    return (
        <>
            <Box component={'header'} sx={{ with: '100%', p: 4, textAlign: 'center' }}>
                <Typography 
                    variant="h3"
                    component={'h1'}
                    sx={fontTheme}
                >
                    <Avatar src="https://cdn.dribbble.com/users/711167/screenshots/10593461/media/4b666c161141c953bdc2570cf9dbac63.gif" 
                        sx={{ 
                            width: 100, 
                            height: 100, 
                            margin: '0 auto', 
                            display: 'block' 
                        }}
                    />
                    VENTA DE GARAGE
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