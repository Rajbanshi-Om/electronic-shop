import { Box, Button, Card, CardHeader, Drawer, Grid, Typography } from "@mui/material";
import { Fragment, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {  useNavigate } from "react-router-dom";
import { toggleDrawer } from "../../Redux/Features/Drawer/DrawerSlice";
import { increseTotal } from "../../Redux/Features/SubTotal/SubTotalSlice";
import CartItemList from "../CartItemList";

const RightDrawer = (props) => {
    const navigate = useNavigate()
    const TotalPrice =  useSelector((state)=>state.subtotal.count)
    const BasketList = useSelector((state) => state.cart.basket)
    const OpenDrawer = useSelector((state) => state.drawer.value)
    const dispatch = useDispatch()
    useEffect(() => {
        let totalCount = 0
        BasketList?.map(val => {
            let totalPrices = val?.priceData * val?.count
            totalCount += totalPrices
        });
        dispatch(increseTotal(totalCount))
    }, [BasketList])
    
    const handleCheckout = () => {
        dispatch(toggleDrawer(false))
        navigate('/checkout')
    }
    return ( 
        <Drawer
        anchor='right'
        open={OpenDrawer}
        onClose={()=>dispatch(toggleDrawer(false))}
        >
            <Box
                sx={{ width:{xs:350,md:500} ,height:'100%' ,position:'relative'}}
            >

                <Card size="small" sx={{position:'sticky' ,top:0}} >
                    <CardHeader title={(
                        <>
                          <Typography sx={{fontWeight:500,fontFamily:'mono',fontSize:{xs:'1rem',md:"1.2rem"}}}> My Cart</Typography>  
                            
                        </>
                    )} action={(
                        <>
                       <Button sx={{width:'100%'}}  size="small" onClick={() => dispatch(toggleDrawer(false))}  color="error" variant="contained"> Cancel</Button>
                            
                        </>
                    ) }/>
                </Card>
           
                <Box sx={{ height: '85%', overflowY: 'scroll', pb: 4 }}>
                    {BasketList?.length > 0 && BasketList?.map((val, idx) => {
                      
                        return (
                            <Fragment key={idx}>
                                <CartItemList {...({val})}/>
                            </Fragment>
                        )
                    })}
                   
                </Box>


                {/* checkout button */}
                <Grid sx={{position:'absolute',bottom:0,left:0,p:2,bgcolor:'#eee'}}   container justifyContent='space-between'>
                    <Grid item xs={6} md={4}>
                        <Button sx={{width:'100%' ,textAlign:'right'}}>

                          <Typography sx={{color:'#000',fontSize:{xs:'.9rem'}}}>Total : <span style={{color:'red'}}>$ {TotalPrice}  </span></Typography>  
                        </Button>
                    </Grid>
                    <Grid item xs={6} md={4}>
                         <Button disabled={BasketList?.length > 0 ? false :true}  sx={{width:'100%'}}  size="small" onClick={handleCheckout}  color="success" variant="contained"> Checkout</Button>
                    </Grid>
                </Grid>
             
           </Box>
        </Drawer>
     );
}
 
export default RightDrawer;