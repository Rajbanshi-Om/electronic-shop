import { Button, Grid } from '@mui/material';
import {Container,Box,Typography,Stack,CssBaseline,Badge} from '@mui/material';
import {AddShoppingCartOutlined } from '@mui/icons-material';
import { Link, useNavigate } from 'react-router-dom';
import { createTheme, ThemeProvider } from '@mui/material/styles';

const theme = createTheme();

theme.typography.h3 = {
    opacity:.8,
    padding:'0 0px 0 10px',
    textAlign:'center',
    fontSize: '1.2rem',
    '@media (min-width:600px)': {
        fontSize: '1.5rem',
  },
  [theme.breakpoints.up('md')]: {
    fontSize: '2rem',
  },
};
const HeaderComponent = ({ children }) => {
    const navigate = useNavigate()
    const handleNavigate = () => {
        navigate('/')
    }
    return ( 
        <>
             <CssBaseline />
             <Box sx={{width:'100%' ,height:60,backgroundColor: '#dedf',display:'flex' ,alignItems:'center'}}>
                <Grid   container spacing={2}  alignItems="center" justifyContent='space-between' >
                    <Grid item xs={6} md={3} sx={{ textAlign: 'center' }} >
                        <ThemeProvider theme={theme}>

                            <Typography onClick={handleNavigate}     variant='h3' sx={{fontFamily:'Lobster'}}> Electronic Shop </Typography> 
                        </ThemeProvider>
                       
                    </Grid>
                    <Grid item xs={6} >
                        <Grid pr={{xs:4,md:10}}  container justifyContent='end'>
                            <Grid item> 
                                <Stack direction="row" spacing={4}>
                                    <Link to='/checkout'>
                                        <Badge badgeContent={1} color="secondary">
                                                <AddShoppingCartOutlined   color='action'/>
                                        </Badge>
                                    </Link>
                                </Stack>
                                
                            </Grid>
                        </Grid>
                    </Grid>

                </Grid>
            </Box>
            <Container maxWidth="xl">
                <Box sx={{  minHeight: '90vh' ,padding:2}} >
                     {children}
                </Box>
            </Container>
        </>
     );
}
 
export default HeaderComponent;