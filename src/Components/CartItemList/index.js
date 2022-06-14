import { Button, Card, CardMedia, Grid, Stack, Typography } from "@mui/material";
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';
import DeleteOutlineOutlinedIcon from '@mui/icons-material/DeleteOutlineOutlined';
import { useDispatch} from "react-redux";
import { addToBasket, deleteFromBasket, removeCount } from "../../Redux/Features/AddToCart/AddToCartSlice";
const CartItemList = (props) => {
    const dispatch = useDispatch()
    
    return (
        <Card sx={{position:'relative' ,boxShadow: '5px 10px 18px #eee', p: 1, m: 1 }}>
            <Button onClick={() => dispatch(deleteFromBasket(props?.val?.id))}  sx={{position:'absolute' ,right:0,top:0}}  color="error">Delete</Button>
            <Grid container spacing={2}>
                <Grid item xs={3}>
                    <CardMedia
                        sx={{objectFit:'contain'}}
                        component="img"
                        height="65"
                        image={`https://electronic-ecommerce.herokuapp.com/${props?.val?.image}`}
                        alt="Paella dish"
                    />
                </Grid>
                <Grid item xs={6} >
                    <Stack spacing={-0.5}>

                        <Typography sx={{ fontSize: { xs: '1rem', fontFamily: 'mono', fontWeight: 600, opacity: '.8' } }}>{props?.val?.name }</Typography>
                   <Typography sx={{fontSize:{xs:'.9rem',fontFamily:'mono',fontWeight:500,opacity:'.8'}}}>{props?.val?.category[1]}</Typography>
                    </Stack>
                    <Typography sx={{ fontSize: { xs: '1rem', fontFamily: 'mono', fontWeight: 600, opacity: '.8' } }}>{props?.val?.price }</Typography>

                </Grid>
                <Grid item xs={3}>
                    <Grid sx={{height:'100%'}}  container justifyContent='center'  alignItems="flex-end" >
                 
                        <Grid item>
                            <Stack direction='row' spacing={2}>
                                
                                <Button disabled={props?.val?.count <2 ? true: false}  sx={{padding:0,minWidth:0}} onClick={() => dispatch(removeCount(props?.val))} >
                                    <RemoveIcon sx={{ cursor: 'pointer' }} />
                                </Button> 
                                <Typography>{props?.val?.count}</Typography>
                                <Button sx={{padding:0,minWidth:0}} onClick={()=> dispatch(addToBasket(props?.val))}>
                                    <AddIcon    sx={{cursor:'pointer'}}/>
                                </Button>
                            </Stack>
                        </Grid>
                    </Grid>
                </Grid>

            </Grid>
        </Card>
      );
}
 
export default CartItemList;