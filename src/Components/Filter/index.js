import { Card, Typography,CardHeader, Grid, TextField, Stack} from "@mui/material";
import { Box } from "@mui/system";
import  FilterAltIcon  from '@mui/icons-material/FilterAlt';
import AttachMoneyIcon from '@mui/icons-material/AttachMoney';
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
const FilterComponent = () => {
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
            <Box sx={{ pl: 2, pr:2,pb:2}}>
                <Typography sx={{ pb: 0.9,opacity:.7 }} variant="body1">   PRICE</Typography>
                <Grid container spacing={2}>
                    <Grid item xs={6}>
                        <TextField size="small"  type="number"  id="outlined-size-small"  label='Min'/>
                    </Grid>
                    <Grid item xs={6}>
                        <TextField size='small'  type="number"  id="outlined-size-small"     label="max"/>

                    </Grid>
                    <Grid item xs={12}>
                        <Typography sx={{ pb: 0.5 ,opacity:.7}} variant="body1">CATEGORIES</Typography>
                        <FormGroup>
                            <Grid container spacing={3}>
                                <Grid item xs={6} md={6}>
                                    <FormControlLabel control={<Checkbox defaultChecked />} label="Laptop" />
                                </Grid>
                                <Grid item xs={6} md={6}>
                                    <FormControlLabel control={<Checkbox />} label="Mobile" />
                                </Grid>
                                <Grid item xs={6} md={6}>
                                    <FormControlLabel control={<Checkbox />} label="Watch" />
                                </Grid>
                                <Grid item xs={6} md={6}>
                                    <FormControlLabel control={<Checkbox />} label="Keyboard" />
                                </Grid>
                                <Grid item xs={6} md={6}>
                                     <FormControlLabel control={<Checkbox />} label="Headset" />
                                </Grid>
                            </Grid>
                        </FormGroup>
                    </Grid>
                </Grid>
            </Box>
           
        </Card>
      );
}
 
export default FilterComponent;