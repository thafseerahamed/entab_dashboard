import React from 'react'
import Sidenav from '../components/Sidenav'
import Navbar from '../components/Navbar'

import { Box, Card,CardContent, Grid, Stack, Typography } from '@mui/material'
import Geochart from '../charts/Geochart';
import Piechart from '../charts/Piechart';
import Hbarchart from '../charts/Hbarchart';
import CountUp from 'react-countup';

const Analytics = () => {
    return (
        <div >
            <Navbar />
            <Box height={60} />
            <Box sx={{ display: 'flex' }}>
                <Sidenav />
                <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
                    <Grid container spacing={2}>

                        <Grid item xs={5} spacing={2}>
                            <Stack spacing={2} direction={'row'}>
                                <Box width={50 + '%'}>
                                    <Card className='gradient' sx={{ height: 100 }}>
                                        <CardContent>

                                            <Typography sx={{ fontSize: 14, color: '#ffffff' }} >
                                                Visitors
                                            </Typography>
                                            <Typography sx={{ color: '#ffffff' }} variant="h5" component="div">
                                            <CountUp delay={0.2} end={23500} duration={0.3}/>
                                            </Typography>
                                            <Typography variant="body2" sx={{ color: '#ccd1d1' }}>
                                                Since Last Week


                                            </Typography>
                                        </CardContent>

                                    </Card>
                                    <Box height={16} />
                                    <Card className='gradient' sx={{ height: 100 }}>
                                        <CardContent>
                                            <Typography sx={{ fontSize: 14, color: '#ffffff' }} >
                                                Visitors
                                            </Typography>
                                            <Typography sx={{ color: '#ffffff' }} variant="h5" component="div">
                                            <CountUp delay={0.2} end={45500} duration={0.3}/>
                                            </Typography>
                                            <Typography variant="body2" sx={{ color: '#ccd1d1' }}>
                                                Since Last Week


                                            </Typography>

                                        </CardContent>

                                    </Card>
                                </Box>
                                <Box width={50 + '%'}>
                                    <Card className='gradientlight' sx={{ height: 100 }} >
                                        <CardContent >

                                            <Typography sx={{ fontSize: 14, color: '#ffffff' }} >
                                                Visitors
                                            </Typography>
                                            <Typography sx={{ color: '#ffffff' }} variant="h5" component="div">
                                            <CountUp delay={0.2} end={33500} duration={0.3}/>
                                            </Typography>
                                            <Typography variant="body2" sx={{ color: '#ccd1d1' }}>
                                                Since Last Week


                                            </Typography>
                                        </CardContent>

                                    </Card>
                                    <Box height={16} />
                                    <Card sx={{ height: 100 }} className='gradientlight'>
                                        <CardContent>
                                            <Typography sx={{ fontSize: 14, color: '#ffffff' }} >
                                                Visitors
                                            </Typography>
                                            <Typography sx={{ color: '#ffffff' }} variant="h5" component="div">
                                            <CountUp delay={0.2} end={55500} duration={0.3}/>
                                            </Typography>
                                            <Typography variant="body2" sx={{ color: '#ccd1d1' }}>
                                                Since Last Week


                                            </Typography>

                                        </CardContent>

                                    </Card>
                                </Box>
                            </Stack>


                        </Grid>
                        <Box height={16} /> 
                        <Grid item xs={7}  >

                        <Card sx={{ height: 215 }}>
                            <CardContent>
                        <Hbarchart/>
                            </CardContent>
                        </Card>

                        </Grid>

                    </Grid>
                    <Box height={30} />
                    <Grid container spacing={2}>
                        <Grid item xs={7}>
                            <Card sx={{ height: 45 + "vh" }}>
                                <CardContent>
                                    <Geochart />
                                </CardContent>
                            </Card>

                        </Grid>
                        <Grid item xs={5}>
                            <Card sx={{ height: 45 + "vh" }}>
                                <CardContent>
                                    <Piechart />
                                </CardContent>
                            </Card>

                        </Grid>

                    </Grid>
                </Box>
            </Box>
        </div>
    )
}

export default Analytics