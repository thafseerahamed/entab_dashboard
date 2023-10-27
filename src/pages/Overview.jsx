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
import AssignmentIcon from '@mui/icons-material/Assignment';
import BusinessCenterIcon from '@mui/icons-material/BusinessCenter';
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
                  <Typography className='pro' gutterBottom variant="body2" component="div" sx={{ color: 'success.light' ,fontWeight:"medium"}}>
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
                      <BusinessCenterIcon sx={{color:"#2e94fc"}}/>
                      </div>
                     
                    <Typography className='texttp'variant="subtitle2" component="div" sx={{ color: '#989eab' ,}}>
                     Total Applicant   </Typography>
                    </Stack>
                    <Stack direction='row' justifyContent="space-between">
                    <Typography gutterBottom variant="h5" component="div" sx={{ color: 'black' ,fontWeight:"bold"}}>
                      <CountUp delay={0.2} end={2563} duration={0.4}/>
                    </Typography>
                  <Typography className='pro' gutterBottom variant="body2" component="div" sx={{ color: 'success.light' ,fontWeight:"medium"}}>
                      ^ 4%
                    </Typography>
                

                    </Stack>
                    <Divider />
                    <Box height={4 }></Box>
                   
                    <Typography gutterBottom variant="caption" component="div" sx={{ color: '#989eab' }}>
                      Update:March 19,2023
                    </Typography>


                  </CardContent>

                </Card>
               
          
            </Grid><Grid item xs={3}>
              
              <Card sx={{ minWidth: 100 + "%", height: 119}}>

                <CardContent>
                  <Stack spacing={1} direction='row'>
                    
                      <div>
                    <AssignmentIcon sx={{color:"#2e94fc"}}/>
                    </div>
                   
                  <Typography className='texttp'variant="subtitle2" component="div" sx={{ color: '#989eab' ,}}>
                   Total Projects  </Typography>
                  </Stack>
               
                  <Typography gutterBottom variant="h5" component="div" sx={{ color: 'black' ,fontWeight:"bold"}}>
                    <CountUp delay={0.2} end={159} duration={0.3}/>
                  </Typography>
             
              

                 
                  <Divider />
                  <Box height={4 }></Box>
                 
                  <Typography gutterBottom variant="caption" component="div" sx={{ color: '#989eab' }}>
                    Update:March 19,2023
                  </Typography>


                </CardContent>

              </Card>
             
        
          </Grid><Grid item xs={3}>
              
              <Card sx={{ minWidth: 100 + "%", height: 119}}>

                <CardContent>
                  <Stack spacing={1} direction='row'>
                    
                      <div>
                    <AssignmentIcon sx={{color:"#2e94fc"}}/>
                    </div>
                   
                  <Typography className='texttp'variant="subtitle2" component="div" sx={{ color: '#989eab' ,}}>
                   Finished Projects   </Typography>
                  </Stack>
                 
                  <Typography gutterBottom variant="h5" component="div" sx={{ color: 'black' ,fontWeight:"bold"}}>
                    <CountUp delay={0.2} end={112} duration={0.3}/>
                  </Typography>
               

                
                  <Divider />
                  <Box height={4 }></Box>
                 
                  <Typography gutterBottom variant="caption" component="div" sx={{ color: '#989eab' }}>
                    Update:March 19,2023
                  </Typography>


                </CardContent>

              </Card>
             
        
          </Grid>
        
          </Grid>
          <Box height={20} />

          <Grid container spacing={2}>
            <Grid item xs={6}>
              <Card sx={{ minWidth: 100 + "%", height: 119}}>
                <Stack direction='row'> 
                 
                <Typography className='texttp'variant="subtitle2" component="div" sx={{ color: 'black' ,fontWeight:"bold"}}>
                   Enrollment Analytics   </Typography>
                   <Card sx={{width:30+"%",height:25}}>
                        <Stack direction='row'>
                        <Typography gutterBottom variant="caption" component="div" sx={{ color: '#989eab' }}>
                    time period
                  </Typography> <Typography gutterBottom variant="caption" component="div" sx={{ color: '#989eab' }}>
                    time period
                  </Typography>
                        </Stack>
                   </Card>
                </Stack>

              </Card>
          
              </Grid>
        
              </Grid>
        
          

        </Box>
      </Box>
    </div>

  )
}

export default Overview