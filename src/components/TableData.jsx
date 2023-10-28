import * as React from 'react';
import { DataGrid } from '@mui/x-data-grid';
import { Avatar, Button, Stack, Typography,CircularProgress, Box } from '@mui/material';
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';


const customDataGridStyle = {
    paddingLeft: '28px',  // Adjust the padding as needed
    paddingRight: '28px', // Adjust the padding as needed
  };

const columns = [
  { field: 'candiadate', headerName: 'Candidate', width: 170,renderCell:(params)=>{
    return <Stack direction='row' spacing={1}>
    <Avatar 
    src={params.row.img}
     sx={{ height:"5",width:"5" }}>
    </Avatar>
    <Stack>
        <Box height={9}></Box>
    <Typography
    variant="body2"
    noWrap
    component="div"
    sx={{ display: { xs: 'none', sm: 'block' }, fontWeight:"bold"}}
>
   {params.row.firstName} {params.row.lastName}
</Typography>
</Stack>
</Stack>
  } },
  { field: 'vacancy', headerName: 'Vacancy', width: 170 },
  { field: 'email', headerName: 'Contact', width: 170 , renderCell: (params) => (
    <Typography
    variant="body2"
    noWrap
    component="div"
    sx={{ display: { xs: 'none', sm: 'block' }, fontWeight:"bold"}}
>
   {params.row.email}
</Typography>
  ),},
  {
    field: 'experience',
    headerName: 'Experience',
    type: 'number',
    width: 100,
  },
  {
    field: 'score',
    headerName: 'Score',
    type: 'number',
    width: 110,
    renderCell:(params)=>{
        return(<div style={{ position: 'relative' }}>
        <CircularProgress size={35} variant="determinate" value={params.row.score} thickness={3} color="primary" />
        <div style={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)' }}>
          <Typography variant="caption" sx={{fontWeight:"bold"}}>{params.row.score}%</Typography>
        </div>
      </div>)
    }

  },
  {
    field: 'action', // The field name for the custom element
    headerName: 'Action',
    width: 140,
    headerClassName: 'custom-header-class', // Add this line
    cellClassName: 'custom-cell-class', //
    renderCell: (params) => (
      <Button
        variant="cooutli"
        color="primary"
        sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center'}}
        onClick={() => {
          // Define the action you want to perform when the button is clicked here
          console.log(`Edit button clicked for row with ID ${params.row.id}`);
        }}
      >
        <Avatar sx={{ bgcolor: "white",border: '0.1px solid lightgray',width: 24, height: 24 , }}>
        <MoreHorizIcon sx={{color :"grey"}}/>
        </Avatar>
      </Button>
    ),
  },
];

const rows = [
    {
        id: 1,
        img: "https://img.freepik.com/free-photo/portrait-white-man-isolated_53876-40306.jpg?size=626&ext=jpg&ga=GA1.1.386372595.1698192000&semt=ais",
        lastName: "Hubbard",
        firstName: "Eula",
        email: "kewez@@gmail.com",
        phone: "123 456 789",
        createdAt: "01.02.2023",
        verified: true,
        vacancy:"Ux Researcher",
        experience:"6 Years",
        score:"85"
    },
    {
        id: 2,
        img: "https://images.pexels.com/photos/1181519/pexels-photo-1181519.jpeg?auto=compress&cs=tinysrgb&w=1600",
        lastName: "Manning",
        firstName: "Stella",
        email: "comhuhmit@gmail.com",
        phone: "123 456 789",
        createdAt: "01.02.2023",
        verified: true,
        vacancy:"Software Developer",
        experience:"5 Years",
        score:"90"
    },
    {
        id: 3,
        img: "https://images.pexels.com/photos/1587009/pexels-photo-1587009.jpeg?auto=compress&cs=tinysrgb&w=1600",
        lastName: "Greer",
        firstName: "Mary",
        email: "ujudokon@hottmail.com",
        phone: "123 456 789",
        createdAt: "01.02.2023",
        verified: true,
        vacancy:"Data Engineer",
        experience:"7 Years",
        score:"50"
    },
    {
        id: 4,
        img: "https://images.pexels.com/photos/871495/pexels-photo-871495.jpeg?auto=compress&cs=tinysrgb&w=1600",
        lastName: "Williamson",
        firstName: "Mildred",
        email: "tinhavabe@gmail.com",
        phone: "123 456 789",
        createdAt: "01.02.2023",
        verified: true,
        vacancy:"Ux Developer",
        experience:"9 Years",
        score:"65"
    },
    {
        id: 5,
        img: "https://images.pexels.com/photos/1758144/pexels-photo-1758144.jpeg?auto=compress&cs=tinysrgb&w=1600",
        lastName: "Gross",
        firstName: "Jose",
        email: "gobtagbes@yahoo.com",
        phone: "123 456 789",
        createdAt: "01.02.2023",
        vacancy:"Automation Engineer",
        experience:"3 Years",
        score:"85"
    },
    {
        id: 6,
        img: "https://images.pexels.com/photos/769745/pexels-photo-769745.jpeg?auto=compress&cs=tinysrgb&w=1600",
        lastName: "Sharp",
        firstName: "Jeremy",
        email: "vulca.eder@mail.com",
        phone: "123 456 789",
        createdAt: "01.02.2023",
        verified: true,
        vacancy:"Ux Researcher",
        experience:"4 Years",
        score:"80"
    },
    {
        id: 7,
        img: "https://images.pexels.com/photos/1043474/pexels-photo-1043474.jpeg?auto=compress&cs=tinysrgb&w=1600",
        lastName: "Lowe",
        firstName: "Christina",
        email: "reso.bilic@gmail.com",
        phone: "123 456 789",
        createdAt: "01.02.2023",
        vacancy:"Ux Researcher",
        experience:"8 Years",
        score:"75"
    },
];

export default function TableData() {
  return (
    <div style={{ height: 400, width: '100%' }}>
      <DataGrid
      className='custom-data-grid'
        rows={rows}
        columns={columns}
        initialState={{
          pagination: {
            paginationModel: { page: 0, pageSize: 5 },
          },
        }}
        pageSizeOptions={[5, 10]}
        checkboxSelection
      />
   
    </div>
  );
}
