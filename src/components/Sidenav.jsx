import * as React from 'react';
import { styled, useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import MuiDrawer from '@mui/material/Drawer';
import AnalyticsIcon from '@mui/icons-material/Analytics';
import List from '@mui/material/List';
import CssBaseline from '@mui/material/CssBaseline';

import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import { useNavigate } from 'react-router-dom';

import { Stack, Typography } from '@mui/material';
import AccountBalanceIcon from '@mui/icons-material/AccountBalance';
import AdjustIcon from '@mui/icons-material/Adjust';
import InboxIcon from '@mui/icons-material/Inbox';
import GroupsIcon from '@mui/icons-material/Groups';
import BusinessCenterIcon from '@mui/icons-material/BusinessCenter';
import Diversity2Icon from '@mui/icons-material/Diversity2';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import DescriptionIcon from '@mui/icons-material/Description';
import LibraryBooksIcon from '@mui/icons-material/LibraryBooks';
import ReportGmailerrorredIcon from '@mui/icons-material/ReportGmailerrorred';
import SettingsIcon from '@mui/icons-material/Settings';
const drawerWidth = 240;

const openedMixin = (theme) => ({
  width: drawerWidth,
  transition: theme.transitions.create('width', {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.enteringScreen,
  }),
  overflowX: 'hidden',
});

const closedMixin = (theme) => ({
  transition: theme.transitions.create('width', {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  overflowX: 'hidden',
  width: `calc(${theme.spacing(7)} + 1px)`,
  [theme.breakpoints.up('sm')]: {
    width: `calc(${theme.spacing(8)} + 1px)`,
  },
});

const DrawerHeader = styled('div')(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'flex-end',
  padding: theme.spacing(0, 1),
  // necessary for content to be below app bar
  ...theme.mixins.toolbar,
}));



const Drawer = styled(MuiDrawer, { shouldForwardProp: (prop) => prop !== 'open' })(
  ({ theme, open }) => ({
    width: drawerWidth,
    flexShrink: 0,
    whiteSpace: 'nowrap',
    boxSizing: 'border-box',
    ...(open && {
      ...openedMixin(theme),
      '& .MuiDrawer-paper': openedMixin(theme),
    }),
    ...(!open && {
      ...closedMixin(theme),
      '& .MuiDrawer-paper': closedMixin(theme),
    }),
  }),
);

export default function Sidenav() {
  const theme = useTheme();
  // const [open, setOpen] = React.useState(true);
  const navigate = useNavigate();


  const first = [
    {
      title: 'Attendance',
      icon: <AdjustIcon />,
    },
    {
      title: 'Inbox',
      icon: <InboxIcon />,
    }
  ]

  const second = [
    {
      title: 'Candidates',
      icon: <GroupsIcon />,
    },
    {
      title: 'Job',
      icon: <BusinessCenterIcon />,
    },
    {
      title: 'Referral',
      icon: <Diversity2Icon />,
    }
  ]

  const organaisation = [
    {
      title: 'Calendar',
      icon: <CalendarMonthIcon />,
    },
    {
      title: 'Employee',
      icon: <GroupsIcon />,
    },
    {
      title: 'Projects',
      icon: <DescriptionIcon />,
    },
    {
      title: 'Analytics',
      icon: <AnalyticsIcon />,
    },
    {
      title: 'Reports',
      icon: <LibraryBooksIcon />,
    }
  ]

  const footer = [
    {
      title: 'Help',
      icon: <ReportGmailerrorredIcon />,
    },
    {
      title: 'Settings',
      icon: <SettingsIcon />,
    }
  ]



  return (
    <div className='bgcolor'>
      <Box sx={{ display: 'flex' }}>
        <CssBaseline />
        <Box height={30} />
        <Stack>
          <ListItem disablePadding onClick={() => navigate('/')}>
            <ListItemButton>
              <ListItemIcon>
                <AccountBalanceIcon sx={{ color: '#0d54dc' }} />
              </ListItemIcon >
              <ListItemText primary="Overview" primaryTypographyProps={{ style: { color: '#0d54dc', fontWeight: "bold" } }} />
            </ListItemButton>
          </ListItem>
          <List>
            {first.map((item) => (
              <ListItem key={item.title} disablePadding>
                <ListItemButton>
                  <ListItemIcon>
                    {item.icon}
                  </ListItemIcon>
                  <ListItemText primary={item.title} />
                </ListItemButton>
              </ListItem>
            ))}
          </List>
              <Box height={10}/>
          <Typography className='sidenavhead' gutterBottom variant="caption" component="div" sx={{ color: '#989eab', fontWeight: "bold" }}>
            Recruitment
          </Typography>

          <List>
            {second.map((item) => (
              <ListItem key={item.title} disablePadding>
                <ListItemButton>
                  <ListItemIcon>
                    {item.icon}
                  </ListItemIcon>
                  <ListItemText primary={item.title} />
                </ListItemButton>
              </ListItem>
            ))}
          </List>
          <Box height={10}/>
          <Typography className='sidenavhead' gutterBottom variant="caption" component="div" sx={{ color: '#989eab', fontWeight: "bold" }}>
            Organization
          </Typography>

          <List>
            {organaisation.map((item) => (
              <ListItem key={item.title} disablePadding>
                <ListItemButton>
                  <ListItemIcon>
                    {item.icon}
                  </ListItemIcon>
                  <ListItemText primary={item.title} />
                </ListItemButton>
              </ListItem>
            ))}
          </List>
          <Box height={235} />
          <List>
            {footer.map((item) => (
              <ListItem key={item.title} disablePadding>
                <ListItemButton>
                  <ListItemIcon>
                    {item.icon}
                  </ListItemIcon>
                  <ListItemText primary={item.title} />
                </ListItemButton>
              </ListItem>
            ))}
          </List>
        </Stack>

        {/* <Drawer variant="permanent" open={open}>
        <DrawerHeader>
          <IconButton>
            {theme.direction === 'rtl' ? <ChevronRightIcon /> : <ChevronLeftIcon />}
          </IconButton>
        </DrawerHeader>
        <Divider /> */}
        {/* <List>

          <ListItem disablePadding sx={{ display: 'block' }} onClick={() => navigate('/')}>
            <ListItemButton
              sx={{
                minHeight: 48,
                justifyContent: open ? 'initial' : 'center',
                px: 2.5,
              }}
            >
              <ListItemIcon
                sx={{
                  minWidth: 0,
                  mr: open ? 3 : 'auto',
                  justifyContent: 'center',
                }}
              >
                <HomeIcon />
              </ListItemIcon>

              <ListItemText primary='Home' sx={{ opacity: open ? 1 : 0 }} />
            </ListItemButton>
          </ListItem>
          <ListItem disablePadding sx={{ display: 'block' }} onClick={() => navigate('/analytics')}>
            <ListItemButton
              sx={{
                minHeight: 48,
                justifyContent: open ? 'initial' : 'center',
                px: 2.5,
              }}
            >
              <ListItemIcon
                sx={{
                  minWidth: 0,
                  mr: open ? 3 : 'auto',
                  justifyContent: 'center',
                }}
              >
                <AnalyticsIcon />
              </ListItemIcon>
              <ListItemText primary='Analytics' sx={{ opacity: open ? 1 : 0 }} />
            </ListItemButton>
          </ListItem>
          <Box height={20}></Box>
          <div>halopojfhgiudgh
          </div>

        </List> */}

        {/* </Drawer> */}

      </Box>
    </div>
  );
}
