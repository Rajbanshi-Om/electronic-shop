import { Card ,CardMedia , CardActions, Button, Typography, Grid, CardContent, Stack} from "@mui/material";

const CardComponent = (props) => {
    console.log("dkhfj" ,props)
    return ( 
        <Card sx={{ width:'100%' }}>
            <CardMedia
                sx={{objectFit:'fill'}}
                component="img"
                height="200"
                image={`https://electronic-ecommerce.herokuapp.com/${props?.val?.image}`}
                alt="electronic"
            />
            <CardContent>
                <Typography>{props?.val?.name}</Typography>
                <Typography>{props?.val?.price }</Typography>
                <Grid container justifyContent='space-between'>
                    <Grid item>
                         <Typography>{props?.val?.category}</Typography>
                    </Grid>
                    <Grid item>
                        <Typography>Stock {props?.val?.stock }</Typography>
                    </Grid>
               </Grid>
               
            </CardContent>
            <CardActions disableSpacing>
                <Grid container justifyContent='center'>
                    <Grid item >
                        <Button display="block"  variant="contained" size="small"> <Typography variant="caption">Add To Cart</Typography>  </Button>

                    </Grid>
                </Grid>
            </CardActions>
       </Card>
     );
}
 
export default CardComponent;