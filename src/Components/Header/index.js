import {  Grid } from '@mui/material';
import {Container,Box,Typography,Stack,CssBaseline,Badge} from '@mui/material';
import {AddShoppingCartOutlined } from '@mui/icons-material';
import { Link, useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { toggleDrawer } from '../../Redux/Features/Drawer/DrawerSlice';




const HeaderComponent = ({ children }) => {
    
   const dispatch = useDispatch()
    const CartLength = useSelector((state) => state.cart.basket)
    const navigate = useNavigate()
    const handleNavigate = () => {
        navigate('/')
    }
    return ( 
        <>
             <CssBaseline />
             <Box sx={{position:'sticky',top:0,zIndex:100,width:'100%' ,height:60,backgroundColor: '#dedf',display:'flex' ,alignItems:'center'}}>
                <Grid   container spacing={2}  alignItems="center" justifyContent='space-between' >
                    <Grid item xs={6} md={4} sx={{ textAlign: 'center' }} >

                            <Typography onClick={handleNavigate}     variant='h3' sx={{fontFamily:'Lobster',pl:2,opacity:.8,fontSize:{xs:'1.5rem',md:'1.9rem',cursor:'pointer'}}}> Electronic Shop </Typography> 
                       
                    </Grid>
                    <Grid item xs={6} >
                        <Grid pr={{xs:4,md:10}}  container justifyContent='end'>
                            <Grid item> 
                                <Stack direction="row" spacing={4}>
                                    
                                        <Badge badgeContent={CartLength?.length} color="secondary">
                                                <AddShoppingCartOutlined sx={{cursor:'pointer'}}  onClick={() =>dispatch(toggleDrawer(true))}   color='action'/>
                                        </Badge>
                                   
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