import { Grid, Typography } from "@mui/material";
import { Fragment } from "react";
import { useSelector } from "react-redux";
import CardComponent from "../CardComponent";
import FilterComponent from "../Filter";

const HomePageComponent = () => {
  const DataValue = useSelector((state) => state.home.value)
  console.log("dsadsa" ,DataValue)
  return (
    <>
      <Grid container spacing={2}>
        <Grid item xs={12} md={3}>

        <FilterComponent />
        </Grid>
        <Grid item xs={12} md={9}>
          <Typography sx={{ pb: 2 }} variant="h6" >Products</Typography>
          <Grid container spacing={4}>
            {DataValue && DataValue[0]?.map((val, index) => {
              console.log("val" ,val)
              return (
                <Fragment key={index}>
                   <Grid item xs={12} md={3}>
                      <CardComponent {...({val})}  />
                   </Grid>
                </Fragment>
              )
            })}
          </Grid>
           
        </Grid>
      </Grid>
    </>
      );
}
 
export default HomePageComponent;