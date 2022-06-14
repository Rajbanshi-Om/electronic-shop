import { Card, Typography,CardHeader, Grid, TextField, Stack, Button} from "@mui/material";
import { Box} from "@mui/system";
import  FilterAltIcon  from '@mui/icons-material/FilterAlt';
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import { useDispatch, useSelector } from "react-redux";
import { addFilter, addFilterArray, deleteFilterValue, maxPrice, minPrice } from "../../Redux/Features/Filter/FilterSlice";
import { useState } from "react";
const FilterComponent = () => {
    const dispatch = useDispatch()
    const filterArray =  useSelector((state) => state.filter.value)
    const [minMaxPrice, setMinMaxPrice] = useState({ min: '', max: '' })

    
    const handleCategories = async (e) => {
        if (!e.target.checked) { 
            dispatch(deleteFilterValue(e.target.value))
        } else {
            dispatch(addFilter(e.target.value))
            
        }  
    }
    
   const  handlePrice = (e) => {
       setMinMaxPrice({
           ...minMaxPrice,
           [e.target.name]:e.target.value
       })
    }
    const handleDonePrice = () => {
        dispatch(addFilterArray(filterArray))
        if(minMaxPrice.min > 0)
            dispatch(minPrice(minMaxPrice.min))
        if(minMaxPrice.max > 0)
        dispatch(maxPrice(minMaxPrice.max))
    }
    const handleReset = async () => {
        await setMinMaxPrice({ min: '', max: '' })
        dispatch(addFilterArray(''))
        dispatch(minPrice(0))
        dispatch(maxPrice(0))
        filterArray.forEach(element => {
            dispatch(deleteFilterValue(element))
        });
     
    }
    return (
        <Card  sx={{boxShadow:'5px 10px 18px  #eee'}}> 
            <CardHeader subheader={(
                <>
                    <Stack direction='row'  justifyContent='center'>
                        <FilterAltIcon />
                        <Typography>Filter</Typography>

                    </Stack>
                </>
            )} sx={{ maxWidth: 345 }}/>
            <Box sx={{ pl: 2, pr: 2, pb: 2 }}>
                <Grid container>
                <Grid item xs={12}>
                        <Typography sx={{ pb: 0.5 ,opacity:.7}} variant="body1">CATEGORIES</Typography>
                        <FormGroup>
                            <Grid container spacing={0}>
                                <Grid item xs={6} md={6}>
                                    <FormControlLabel  control={<Checkbox   checked={filterArray.includes('laptop')?true:false}  value='laptop' onChange={handleCategories}  />} label="Laptop" />
                                </Grid>
                                <Grid item xs={6} md={6}>
                                    <FormControlLabel control={<Checkbox checked={filterArray.includes('mobile')?true:false}  value='mobile' onChange={handleCategories}   />} label="Mobile" />
                                </Grid>
                                <Grid item xs={6} md={6}>
                                    <FormControlLabel control={<Checkbox  checked={filterArray.includes('watch')?true:false}  value='watch'   onChange={handleCategories} />}  label="Watch"  />
                                </Grid>
                                <Grid item xs={6} md={6}>
                                    <FormControlLabel control={<Checkbox   checked={filterArray.includes('keyboard')?true:false}  value='keyboard'   onChange={handleCategories}/>} label="Keyboard" />
                                </Grid>
                                <Grid item xs={6} md={6}>
                                     <FormControlLabel control={<Checkbox  checked={filterArray.includes('headseat')?true:false}  value='headseat'   onChange={handleCategories} />} label="Headset" />
                                </Grid>
                            </Grid>
                        </FormGroup>
                    </Grid>
                    <Grid item xs={12}>
                         <Typography sx={{ pb: 0.9, opacity: .7 }} variant="body1">   PRICE</Typography>
                        <Grid container spacing={2}>
                            <Grid item xs={6}>
                                <TextField size="small" name='min'  type="number"  id="outlined-size-small" value={minMaxPrice.min}  onChange={handlePrice}  label='Min'/>
                            </Grid>
                            <Grid item xs={6}>
                                <TextField size='small' sx={{display:'block',width:'100%'}}     name='max'  type="number"  id="outlined-size-small" value={minMaxPrice.max} onChange={handlePrice}   label="max"/>

                            </Grid>
                            <Grid item xs={12}>
                                <Grid container spacing={2}   justifyContent='end'>
                                <Grid item xs={6}>
                                        <Button size="small"  sx={{display:'block',width:'100%'}}   variant="outlined" color="warning"  onClick={handleReset}>Reset</Button>
                                    </Grid>
                                    <Grid item xs={6}>
                                        <Button size="small"  sx={{display:'block',width:'100%'}}   variant="contained" onClick={handleDonePrice}>Done</Button>
                                    </Grid>
                                </Grid>
                            </Grid>
                        </Grid>
                    </Grid>
                </Grid>
            </Box>
           
        </Card>
      );
}
 
export default FilterComponent;