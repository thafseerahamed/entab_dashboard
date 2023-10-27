import React from 'react'
import Sidenav from '../components/Sidenav'
import { Box, Divider, Typography } from '@mui/material'
import Navbar from '../components/Navbar'
import Grid from '@mui/material/Grid';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Stack from '@mui/material/Stack'
import { Avatar} from '@mui/material';
import '../Dash.css'
import StorefrontIcon from '@mui/icons-material/Storefront';
import CreditCardIcon from '@mui/icons-material/CreditCard';
import ShoppingBagIcon from '@mui/icons-material/ShoppingBag';
import AccordionDash from '../components/AccordionDash';
import Barchart from '../charts/Barchart';
import CountUp from 'react-countup';
import GroupsIcon from '@mui/icons-material/Groups';
const Overview = () => {
  return (
    <div >
      <Navbar />
      <Box height={70} />
      <Box sx={{ display: 'flex' }}>
        <Sidenav />

        <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
          <Grid container spacing={2}>
       
            <Grid item xs={3}>
              
                <Card sx={{ minWidth: 100 + "%", height: 119}}>

                  <CardContent>
                    <Stack spacing={1} direction='row'>
                      
                        <div>
                      <GroupsIcon sx={{color:"#2e94fc"}}/>
                      </div>
                     
                    <Typography className='texttp'variant="subtitle2" component="div" sx={{ color: '#989eab' ,}}>
                     Total Employees   </Typography>
                    </Stack>
                    <Stack direction='row' justifyContent="space-between">
                    <Typography gutterBottom variant="h5" component="div" sx={{ color: 'black' ,fontWeight:"bold"}}>
                      <CountUp delay={0.2} end={5700} duration={0.3}/>
                    </Typography>
                  <Typography className='pro' gutterBottom variant="body2" component="div" sx={{ color: 'success.light' ,fontWeight:"bold"}}>
                      ^ 12%
                    </Typography>
                

                    </Stack>
                    <Divider />
                    <Box height={4 }></Box>
                   
                    <Typography gutterBottom variant="caption" component="div" sx={{ color: '#989eab' }}>
                      Update:March 26,2023
                    </Typography>


                  </CardContent>

                </Card>
               
          
            </Grid>
            <Grid item xs={3}>
              
                <Card sx={{ minWidth: 100 + "%", height: 119}}>

                  <CardContent>
                    <Stack spacing={1} direction='row'>
                      
                        <div>
                      <GroupsIcon sx={{color:"#2e94fc"}}/>
                      </div>
                     
                    <Typography className='texttp'variant="subtitle2" component="div" sx={{ color: '#989eab' ,}}>
                     Total Employees   </Typography>
                    </Stack>
                    <Stack direction='row' justifyContent="space-between">
                    <Typography gutterBottom variant="h5" component="div" sx={{ color: 'black' ,fontWeight:"bold"}}>
                      <CountUp delay={0.2} end={5700} duration={0.3}/>
                    </Typography>
                  <Typography className='pro' gutterBottom variant="body2" component="div" sx={{ color: 'success.light' ,fontWeight:"bold"}}>
                      ^ 12%
                    </Typography>
                

                    </Stack>
                    <Divider />
                    <Box height={4 }></Box>
                   
                    <Typography gutterBottom variant="caption" component="div" sx={{ color: '#989eab' }}>
                      Update:March 26,2023
                    </Typography>


                  </CardContent>

                </Card>
               
          
            </Grid><Grid item xs={3}>
              
              <Card sx={{ minWidth: 100 + "%", height: 119}}>

                <CardContent>
                  <Stack spacing={1} direction='row'>
                    
                      <div>
                    <GroupsIcon sx={{color:"#2e94fc"}}/>
                    </div>
                   
                  <Typography className='texttp'variant="subtitle2" component="div" sx={{ color: '#989eab' ,}}>
                   Total Employees   </Typography>
                  </Stack>
                  <Stack direction='row' justifyContent="space-between">
                  <Typography gutterBottom variant="h5" component="div" sx={{ color: 'black' ,fontWeight:"bold"}}>
                    <CountUp delay={0.2} end={5700} duration={0.3}/>
                  </Typography>
                <Typography className='pro' gutterBottom variant="body2" component="div" sx={{ color: 'success.light' ,fontWeight:"bold"}}>
                    ^ 12%
                  </Typography>
              

                  </Stack>
                  <Divider />
                  <Box height={4 }></Box>
                 
                  <Typography gutterBottom variant="caption" component="div" sx={{ color: '#989eab' }}>
                    Update:March 26,2023
                  </Typography>


                </CardContent>

              </Card>
             
        
          </Grid><Grid item xs={3}>
              
              <Card sx={{ minWidth: 100 + "%", height: 119}}>

                <CardContent>
                  <Stack spacing={1} direction='row'>
                    
                      <div>
                    <GroupsIcon sx={{color:"#2e94fc"}}/>
                    </div>
                   
                  <Typography className='texttp'variant="subtitle2" component="div" sx={{ color: '#989eab' ,}}>
                   Total Employees   </Typography>
                  </Stack>
                  <Stack direction='row' justifyContent="space-between">
                  <Typography gutterBottom variant="h5" component="div" sx={{ color: 'black' ,fontWeight:"bold"}}>
                    <CountUp delay={0.2} end={5700} duration={0.3}/>
                  </Typography>
                <Typography className='pro' gutterBottom variant="body2" component="div" sx={{ color: 'success.light' ,fontWeight:"bold"}}>
                    ^ 12%
                  </Typography>
              

                  </Stack>
                  <Divider />
                  <Box height={4 }></Box>
                 
                  <Typography gutterBottom variant="caption" component="div" sx={{ color: '#989eab' }}>
                    Update:March 26,2023
                  </Typography>


                </CardContent>

              </Card>
             
        
          </Grid>
        
          </Grid>
          <Box height={20} />
          <Grid container spacing={2}>
            <Grid item xs={8}>
              <Card sx={{ height: 55 + "vh" }}>

                <CardContent>

                  <Barchart />
                </CardContent>

              </Card>

            </Grid>
            <Grid item xs={4}>
              <Card sx={{ height: 55 + "vh" }}>

                <CardContent>
                  <div className='paddingAll'>

                    <span className='pricetitle'>Popular Products</span>
                  </div>
                  <AccordionDash />

                </CardContent>

              </Card>

            </Grid>

          </Grid>

        </Box>
      </Box>
    </div>

  )
}

export default Overview