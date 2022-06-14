import { Button, Card, Checkbox, Container, CssBaseline, FormControlLabel, Grid, TextField, Typography } from "@mui/material";
import { useState } from "react";

const CheckoutComponent = () => {
    const [sameInfo, setSameInfo] = useState(false)
    const [shippingAddress,setShippingAddress] = useState({name:'',address:'',phone:'',date:''})
    const [billingAddress, setBillingAddress] = useState({name:'',address:'',phone:'',date:''})

    const handleShipping = (e) => {
        setShippingAddress({
            ...shippingAddress,
            [e.target.name] : e.target.value
        })
    }
    const handleBilling = (e) => {
        setBillingAddress({
            ...billingAddress,
            [e.target.name] : e.target.value
        })
    }
    const handleCheckInfo = (e) => {
        if (e.target.checked) {
            setSameInfo(true)
            setBillingAddress({
                ...shippingAddress
            })
        } else {
            setSameInfo(false)
            setBillingAddress({name:'',address:'',phone:'',date:''})
        }
    }
    const handleSubmit = () => {
        console.log("shipping",shippingAddress)
        console.log("billing",billingAddress)
    }
    return ( 
        <>
            <CssBaseline/>
            <Container maxWidth='sm' >
                <Card sx={{ p:2 }}>
                    <Grid container  spacing={1}>
                        <Grid item xs={12}>
                            <Typography sx={{fontFamily:'mono',fontWeight:'600',fontSize:'1.1rem'}}>Shiping Address</Typography>
                        </Grid>
                        <Grid item xs={12} >
                             <TextField size="small"  fullWidth  id="outlined-basic" label="Full Name" variant="outlined" name="name" value={shippingAddress.name}  onChange={handleShipping} />
                        </Grid>
                        <Grid item xs={12}>
                             <TextField size="small"  fullWidth  id="outlined-basic" label="Address" variant="outlined" name="address"value={shippingAddress.address} onChange={handleShipping} />
                        </Grid>
                        <Grid item xs={12}>
                             <TextField size="small"  fullWidth type='number'  id="outlined-basic" label="Phone Number" variant="outlined" name="phone" value={shippingAddress.phone}  onChange={handleShipping} />
                        </Grid>
                        <Grid item xs={12}>
                             <TextField size="small"  fullWidth type='date'  id="outlined-basic"  variant="outlined" name="date" value={shippingAddress.date}  onChange={handleShipping} />
                        </Grid>
                        <Grid item xs={12} sx={{mt:2}}>
                            <Typography sx={{fontFamily:'mono',fontWeight:'600',fontSize:'1.1rem'}}>Billing Address</Typography>
                              <FormControlLabel control={<Checkbox size="small" checked={sameInfo} onChange={handleCheckInfo}  />} label="Same as Shipping?" />
                        </Grid>
                        <Grid item xs={12} >
                             <TextField size="small"  fullWidth  id="outlined-basic" label="Full Name" variant="outlined" name="name" value={billingAddress.name} onChange={handleBilling} />
                        </Grid>
                        <Grid item xs={12}>
                             <TextField size="small"  fullWidth  id="outlined-basic" label="Address" variant="outlined" name="address" value={billingAddress.address} onChange={handleBilling} />
                        </Grid>
                        <Grid item xs={12}>
                             <TextField size="small"  fullWidth type='number'  id="outlined-basic" label="Phone Number" variant="outlined" name="phone" value={billingAddress.phone}  onChange={handleBilling} />
                        </Grid>
                        <Grid item xs={12}>
                             <TextField size="small"  fullWidth type='date'  id="outlined-basic"  variant="outlined" name="date"value={billingAddress.date} onChange={handleBilling} />
                        </Grid>
                        <Grid item xs={12} sx={{mt:1}} >
                            <Grid container   justifyContent='flex-end'>
                                <Grid item xs={12} md={3} >
                                    <Button fullWidth  variant="contained" onClick={handleSubmit}>Submit</Button>
                                </Grid>
                            </Grid>
                        </Grid>
                    </Grid>
                </Card>
       </Container>
        </>
     );
}
 
export default CheckoutComponent;