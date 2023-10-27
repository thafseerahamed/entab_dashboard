import React from 'react'
import Sidenav from '../components/Sidenav'
import { Box, Typography } from '@mui/material'
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
              <Stack spacing={3} direction='row'>
                <Card sx={{ minWidth: 90 + "%", height: 150 }}>

                  <CardContent>
                    <Stack spacing={1} direction='row'>
                      
                        <div>
                      <GroupsIcon sx={{color:"#2e94fc"}}/>
                      </div>
                     
                    <Typography className='texttp'variant="body2" component="div" sx={{ color: '#989eab' ,}}>
                     Total Employees   </Typography>
                    </Stack>
                    <Stack direction='row'>
                    <Typography gutterBottom variant="h5" component="div" sx={{ color: 'black' ,fontWeight:"bold"}}>
                      <CountUp delay={0.2} end={5700} duration={0.3}/>
                    </Typography>
                    <Avatar variant='rounded' sx={{ backgroundColor: "lightgreen", border: '0.1px solid lightgray' }}>
                    <Typography gutterBottom variant="body2" component="div" sx={{ color: 'green' ,fontWeight:"bold"}}>
                    ^12
                    </Typography>
                    
                        </Avatar>

                    </Stack>
                    <Typography gutterBottom variant="body2" component="div" sx={{ color: '#ccd1d1' }}>
                      Total Earnings
                    </Typography>


                  </CardContent>

                </Card>
                <Card sx={{ minWidth: 49 + "%", height: 150 }} className='gradientlight'>

                  <CardContent>
                    <div className='iconwhite'>
                      <ShoppingBagIcon />
                    </div>

                    <Typography gutterBottom variant="h5" component="div" sx={{ color: '#ffffff' }}>
                      $<CountUp delay={0.2} end={8500} duration={0.3}/>
                    </Typography>
                    <Typography gutterBottom variant="body2" component="div" sx={{ color: '#ccd1d1' }}>
                      Total Earnings
                    </Typography>

                  </CardContent>

                </Card>
              </Stack>
            </Grid>
            <Grid item xs={4}>
              <Stack spacing={2}>
                <Card sx={{ maxWidth: 345 }} className='gradientlight'>
                  <Stack spacing={1} direction={'row'}>

                    <div className='paddingAll iconwhite'>
                      <StorefrontIcon />
                    </div>
                    <div className='paddingAll iconwhite'>

                      <span className='pricetitle'>$<CountUp delay={0.2} end={23} duration={0.3}/>k</span>
                      <br />
                      <span className='pricesubtitle 'style={{color:'#ccd1d1'}}>Total Income</span>
                    </div>
                  </Stack>

                </Card>
                <Card sx={{ maxWidth: 345 }} >
                  <Stack spacing={1} direction={'row'}>

                    <div className='paddingAll'>
                      <StorefrontIcon />
                    </div>
                    <div className='paddingAll'>

                      <span className='pricetitle'>$<CountUp delay={0.2} end={23} duration={0.3}/>k</span>
                      <br />
                      <span className='pricesubtitle'>Total Income</span>
                    </div>
                  </Stack>


                </Card>
              </Stack>
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