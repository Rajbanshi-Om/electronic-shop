import { Card ,CardMedia , CardActions, Button, Typography, Grid, CardContent, Stack} from "@mui/material";
import {AddShoppingCartOutlined } from '@mui/icons-material';
import { addToBasket } from "../../Redux/Features/AddToCart/AddToCartSlice";
import { useDispatch, useSelector } from "react-redux";
import { toggleDrawer } from "../../Redux/Features/Drawer/DrawerSlice";
import { increseTotal } from "../../Redux/Features/SubTotal/SubTotalSlice";

const textResponsive = {
    fontSize:{xs:'.8rem',md:'.9rem',lg:'1rem'}
}
const CardComponent = (props) => {
    
    const dispatch = useDispatch()
    const handleCartDispatch = () => {
        // dispatch(increseTotal(props?.val?.priceData))
        dispatch(addToBasket(props?.val))
        dispatch(toggleDrawer(true))
    }
    return ( 
        <Card sx={{ width:'100%' }}>
            <CardMedia
                sx={{objectFit:'fill',height:{xs:120,sm:150,md:175 ,lg:194} }}
                component="img"
                // height={{}}
                image={`https://electronic-ecommerce.herokuapp.com/${props?.val?.image}`}
                alt="electronic"
            />
            <CardContent>
                <Typography sx={textResponsive}>{props?.val?.name}</Typography>
                <Typography sx={textResponsive}>{props?.val?.price }</Typography>
                <Grid container justifyContent='space-between'>
                    <Grid item>
                         <Typography sx={textResponsive}>{props?.val?.category[1]}</Typography>
                    </Grid>
                    <Grid item>
                        <Typography sx={textResponsive}>Stock {props?.val?.stock }</Typography>
                    </Grid>
               </Grid>
               
            </CardContent>
            <CardActions disableSpacing>
                <Grid container justifyContent='center'>
                    <Grid item xs={12} md={12} lg={10} >
                        <Button color="success" onClick={handleCartDispatch}  startIcon={<AddShoppingCartOutlined/>}  sx={{width:'100%'}} variant="outlined" size="small"> <Typography variant="caption"   >Add To Cart</Typography>  </Button>
                    </Grid>
                </Grid>
            </CardActions>
       </Card>
     );
}
 
export default CardComponent;