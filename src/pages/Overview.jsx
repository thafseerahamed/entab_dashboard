import React from 'react'
import Sidenav from '../components/Sidenav'
import { Box, Button, ButtonGroup, Divider, Typography } from '@mui/material'
import Navbar from '../components/Navbar'
import Grid from '@mui/material/Grid';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Stack from '@mui/material/Stack'
import { Avatar } from '@mui/material';
import '../Dash.css'
import { useState } from 'react';
import CountUp from 'react-countup';
import GroupsIcon from '@mui/icons-material/Groups';
import AssignmentIcon from '@mui/icons-material/Assignment';
import BusinessCenterIcon from '@mui/icons-material/BusinessCenter';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import StkBarChart from '../Test/StkBarChart';
import LineChart from '../Test/LineChart';
import TableData from '../components/TableData';
import { DateRangePicker } from 'react-date-range';
import { format } from 'date-fns';
import 'react-date-range/dist/styles.css'; // main style file
import 'react-date-range/dist/theme/default.css'; // theme css file
const Overview = () => {
  const buttonStyle = {
    fontSize: '12px', // Adjust the font size as needed
  };
  const [openDate, setOpenDate] = useState(false)
  const [date, setDate] = useState({
    startDate: new Date(),
    endDate: new Date(),
    key: 'selection',
  })
  const handleChange = (ranges) => {
    setDate(ranges.selection)


  }
  const handleClick = () => {
    setOpenDate((prev) => !prev)
    console.log(date);
  }

  return (
    <div >
      <Navbar />
      <Box height={70} />
      <Box sx={{ display: 'flex' }}>
        <Sidenav />

        <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
          <Grid container spacing={2}>

            <Grid item xs={3}>

              <Card sx={{ minWidth: 100 + "%", height: 119 }}>

                <CardContent>
                  <Stack spacing={1} direction='row'>

                    <div>
                      <GroupsIcon sx={{ color: "#2e94fc" }} />
                    </div>

                    <Typography className='texttp' variant="subtitle2" component="div" sx={{ color: '#989eab', }}>
                      Total Employees   </Typography>
                  </Stack>
                  <Stack direction='row' justifyContent="space-between">
                    <Typography gutterBottom variant="h5" component="div" sx={{ color: 'black', fontWeight: "bold" }}>
                      <CountUp delay={0.2} end={5700} duration={0.3} />
                    </Typography>
                    <Typography className='pro' gutterBottom variant="body2" component="div" sx={{ color: 'success.light', fontWeight: "medium" }}>
                      ^ 12%
                    </Typography>


                  </Stack>
                  <Divider />
                  <Box height={4}></Box>

                  <Typography gutterBottom variant="caption" component="div" sx={{ color: '#989eab' }}>
                    Update:March 26,2023
                  </Typography>


                </CardContent>

              </Card>


            </Grid>
            <Grid item xs={3}>

              <Card sx={{ minWidth: 100 + "%", height: 119 }}>

                <CardContent>
                  <Stack spacing={1} direction='row'>

                    <div>
                      <BusinessCenterIcon sx={{ color: "#2e94fc" }} />
                    </div>

                    <Typography className='texttp' variant="subtitle2" component="div" sx={{ color: '#989eab', }}>
                      Total Applicant   </Typography>
                  </Stack>
                  <Stack direction='row' justifyContent="space-between">
                    <Typography gutterBottom variant="h5" component="div" sx={{ color: 'black', fontWeight: "bold" }}>
                      <CountUp delay={0.2} end={2563} duration={0.4} />
                    </Typography>
                    <Typography className='pro' gutterBottom variant="body2" component="div" sx={{ color: 'success.light', fontWeight: "medium" }}>
                      ^ 4%
                    </Typography>


                  </Stack>
                  <Divider />
                  <Box height={4}></Box>

                  <Typography gutterBottom variant="caption" component="div" sx={{ color: '#989eab' }}>
                    Update:March 19,2023
                  </Typography>


                </CardContent>

              </Card>


            </Grid><Grid item xs={3}>

              <Card sx={{ minWidth: 100 + "%", height: 119 }}>

                <CardContent>
                  <Stack spacing={1} direction='row'>

                    <div>
                      <AssignmentIcon sx={{ color: "#2e94fc" }} />
                    </div>

                    <Typography className='texttp' variant="subtitle2" component="div" sx={{ color: '#989eab', }}>
                      Total Projects  </Typography>
                  </Stack>

                  <Typography gutterBottom variant="h5" component="div" sx={{ color: 'black', fontWeight: "bold" }}>
                    <CountUp delay={0.2} end={159} duration={0.3} />
                  </Typography>




                  <Divider />
                  <Box height={4}></Box>

                  <Typography gutterBottom variant="caption" component="div" sx={{ color: '#989eab' }}>
                    Update:March 19,2023
                  </Typography>


                </CardContent>

              </Card>


            </Grid><Grid item xs={3}>

              <Card sx={{ minWidth: 100 + "%", height: 119 }}>

                <CardContent>
                  <Stack spacing={1} direction='row'>

                    <div>
                      <AssignmentIcon sx={{ color: "#2e94fc" }} />
                    </div>

                    <Typography className='texttp' variant="subtitle2" component="div" sx={{ color: '#989eab', }}>
                      Finished Projects   </Typography>
                  </Stack>

                  <Typography gutterBottom variant="h5" component="div" sx={{ color: 'black', fontWeight: "bold" }}>
                    <CountUp delay={0.2} end={112} duration={0.3} />
                  </Typography>



                  <Divider />
                  <Box height={4}></Box>

                  <Typography gutterBottom variant="caption" component="div" sx={{ color: '#989eab' }}>
                    Update:March 19,2023
                  </Typography>


                </CardContent>

              </Card>


            </Grid>

          </Grid>
          <Box height={20} />

          <Grid container className="datecard" spacing={2}>
            <Grid item xs={openDate ? 5 : 6}>
              <Card sx={{ minWidth: 100 + "%", height: 300, padding: "10px" }}>
                <CardContent>
                  <Stack direction='row' justifyContent="space-between">

                    <Typography className='texttp' variant="subtitle2" component="div" sx={{ color: 'black', fontWeight: "bold" }}>
                      Enrollment Analytics   </Typography>
                    <Card sx={{ width: 40 + "%", height: 25 }}>
                      <Stack direction='row' justifyContent="space-between">
                        {/* <Typography gutterBottom variant="caption" component="div" sx={{ color: '#989eab' }}>
                    time period
                  </Typography>  */}
                        <Typography className='calendartext' gutterBottom variant="caption" component="div" sx={{ color: 'black', fontWeight: "bold" }}>
                          {`${format(date.startDate, 'MMM,yyy')} - ${format(date.endDate, 'MMM,yyy')}`}
                        </Typography>
                        <CalendarMonthIcon onClick={handleClick} sx={{ color: "grey" }} />

                      </Stack>
                    </Card>
                  </Stack>
                  <Box height={3}></Box>
                  <StkBarChart />
                </CardContent>

              </Card>

            </Grid>
            {openDate && <Grid item xs={6}>
              <div className='Datepicker'>

                <DateRangePicker
                  ranges={[date]}
                  onChange={handleChange}
                  fixedHeight="100"
                  dragSelectionEnabled
                  showMonthAndYearPickers

                />

              </div>
            </Grid>}
            <Grid item xs={openDate ? 12 : 6}>
              <Card sx={{ minWidth: 100 + "%", height: 300, padding: "10px" }}>
                <CardContent>
                  <Stack direction='row' justifyContent="space-between">

                    <Typography className='texttp' variant="subtitle2" component="div" sx={{ color: 'black', fontWeight: "bold" }}>
                      Employee Attendance   </Typography>

                    <ButtonGroup variant="outlined" color='inherit' size='small' aria-label="small button group">
                      <Button >
                        <Typography variant="body2" style={{ fontSize: '8px', fontWeight: "bold", textTransform: "none" }}>
                          Today
                        </Typography>
                      </Button>
                      <Button>
                        <Typography variant="body2" style={{ fontSize: '8px', fontWeight: "bold", textTransform: "none" }}>
                          This week
                        </Typography>
                      </Button>
                      <Button >
                        <Typography variant="body2" style={{ fontSize: '8px', fontWeight: "bold", textTransform: "none" }}>
                          This month
                        </Typography>
                      </Button>
                    </ButtonGroup>

                  </Stack>
                  <Box height={3}></Box>
                  <LineChart />

                </CardContent>

              </Card>

            </Grid>

          </Grid>
          <Box height={20} />
          <Grid container spacing={2}>
            <Grid item xs={12}>
              <Card sx={{ minWidth: 100 + "%", height: 490 }}>

                <CardContent>
                  <Stack direction='row' justifyContent="space-between">

                    <Typography className='texttp' variant="subtitle2" component="div" sx={{ color: 'black', fontWeight: "bold" }}>
                      Recruits Rating  </Typography>
                    <Card sx={{ width: 20 + "%", height: 25 }}>
                      <Stack direction='row' justifyContent="space-between">
                        {/* <Typography gutterBottom variant="caption" component="div" sx={{ color: '#989eab' }}>
                    time period
                  </Typography>  */}
                        <Typography className='calendartext' gutterBottom variant="caption" component="div" sx={{ color: 'black', fontWeight: "bold" }}>
                          June2023 - Dec2023
                        </Typography>
                        <CalendarMonthIcon sx={{ color: "grey" }} />
                      </Stack>
                    </Card>
                  </Stack>
                  <Box height={9}></Box>
                  <TableData />
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