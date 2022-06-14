import { Card, Grid, Typography } from "@mui/material";
import { Fragment, useState } from "react";
import { useSelector } from "react-redux";
import CardComponent from "../CardComponent";
import FilterComponent from "../Filter";
import HourglassEmptyIcon from '@mui/icons-material/HourglassEmpty';

const HomePageComponent = () => {
  const DataValue = useSelector((state) => state.home.value)
  const { filterArray:filterValue,min,max } = useSelector((state) => state.filter)
  const newValue = min !== 0 && max !== 0 ?
     DataValue?.filter((val) => val?.priceData >= min && val?.priceData <= max) 
      : min !== 0 && max === 0 ?
      DataValue?.filter((val) => val?.priceData >= min ) 
      : min === 0 && max !== 0 ?
      DataValue?.filter((val) => val?.priceData <= max) 
      :DataValue
  return (
    <>
      <Grid container spacing={2}>
        <Grid item xs={12}   md={4} lg={3}>
          <FilterComponent />
        </Grid>
        <Grid item xs={12}   md={8} lg={9} >
          <Typography sx={{ pb: 2,opacity:.8 }} variant="h6" >Products</Typography>
          <Grid container spacing={2}>
            {newValue?.length < 1 ? (
              <>
                <Grid sx={{height:100,textAlign:'center'}}  alignItems='center'  container justifyContent='center'>
                  <Grid item >
                    <Card sx={{p:4}}>

                     <HourglassEmptyIcon color="error" sx={{opacity:'.7'}}  fontSize="large"/>
                      <Typography sx={{ color: 'darkgreen', opacity:.6}} color='info'>No Products found</Typography>
                    </Card>
                  </Grid>
                </Grid>
              </>
            ) : newValue
              ?.filter((val, index) => {
                let mapData = '';
               filterValue !== '' && filterValue?.map((values, idx) => {
                  if (values === val.category[1]) {
                    mapData = values
                    return 0;
                 }
                 return 0;
                })
                return filterValue?.length > 0 ? (val.category[1] === mapData ) : true
              })
              ?.map((val, index) => {
              return (
                <Fragment key={index}>
                   <Grid item xs={6} sm={4}  md={4} lg={3}>
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