import React from 'react';
import { Box, Button, IconButton, Typography, useTheme } from "@mui/material";
import { tokens } from "../../theme";
import { mockTransactions } from "../../data/mockData";
import DownloadOutlinedIcon from "@mui/icons-material/DownloadOutlined";
import EmailIcon from "@mui/icons-material/Email";
import PointOfSaleIcon from "@mui/icons-material/PointOfSale";
import PersonAddIcon from "@mui/icons-material/PersonAdd";
import TrafficIcon from "@mui/icons-material/Traffic";
import Header from "../../components/Header";
import { ColorModeContext, useMode } from "../../theme";
import { useState } from "react";
import { CssBaseline, ThemeProvider } from "@mui/material";
import Sidebar from "../global/Sidebar";
import QuickLinks from "../../components/QuickLinks"
import Reservations from "../../components/Reservations"
import LatestBookings from "../../components/LatestBookings"
import Random1 from '../../components/ran1';
import Random3 from '../../components/ran3';
import Random2 from '../../components/ran2';

const Dashboard = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);

  const [theme1, colorMode] = useMode();
  const [isSidebar, setIsSidebar] = useState(true);

  const currDate = new Date().toLocaleDateString();
 const currTime = new Date().toLocaleTimeString();

  const todayBookings = 10; 
  const totalBookings = 100; 
  const latestBookings = [
    {
      meetingRoom: 'Room A',
      date: '2023-06-30',
      customerName: 'Mahir',
      customerId: '123',
    },
    {
      meetingRoom: 'Room B',
      date: '2023-07-30',
      customerName: 'Ravi',
      customerId: '124',
    }
    
    
  ];

  return (
    <>
        <Box m="20px">
            <Box display="flex" justifyContent="space-between" alignItems="center">
              <Header title="Meeting Room Booking" />
              <Box>
            
  
</Box>
</Box>


<ColorModeContext.Provider value={colorMode}>

        <CssBaseline />
        <div className="app">
          <main className="content" style={{ display: "flex" }}>
            {isSidebar && <Sidebar isSidebar={isSidebar} />}
            <Box flexGrow={1}>

        <Box
        display="grid"
        gridTemplateColumns="repeat(12, 1fr)"
        gridAutoRows="140px"
        gap="20px"
      >
        <Box
          gridColumn="span 4"
          gridRow="span 1"
          
          padding="30px"
        >
          <Typography
            variant="h9"
            fontWeight="600"
            sx={{ marginBottom: "15px" }}
          >
          </Typography>
          <Box height="240px">
            <Random1 />
            </Box>
        </Box>
        <Box
          gridColumn="span 4"
          gridRow="span 1"
          
          padding="30px"
        >
          <Typography
            variant="h9"
            fontWeight="600"
            sx={{ marginBottom: "15px" }}
          >
          </Typography>
          <Box height="240px">
            <Random2 />
            </Box>
        </Box>
        <Box
          gridColumn="span 4"
          gridRow="span 1"
          
          padding="30px"
        >
          <Typography
            variant="h9"
            fontWeight="600"
            sx={{ marginBottom: "15px" }}
          >
          </Typography>
          <Box height="240px">
            <Random3 />
            </Box>
        </Box>
        <Box
          gridColumn="span 4"
          gridRow="span 2"
          
          padding="30px"
        >
          <Typography
            variant="h9"
            fontWeight="600"
            sx={{ marginBottom: "15px" }}
          >
          </Typography>
          <Box height="240px">
            <LatestBookings bookings={latestBookings} />
            </Box>
        </Box>

        <Box
          gridColumn="span 4"
          gridRow="span 2"
          
        >
          <Typography
            variant="h5"
            fontWeight="600"
            sx={{ padding: "20px 20px 10px 20px" }}
          >
          </Typography>
          <Box height="280px" mt="-20px">
            <Reservations />
          </Box>
        </Box>
        <Box
          gridColumn="span 4"
          gridRow="span 2"
          
          padding="30px"
        >
          <Typography
            variant="h9"
            fontWeight="600"
            sx={{ marginBottom: "15px" }}
          >
          </Typography>
          <Box height="240px">
          <QuickLinks />        
            </Box>
        </Box>
        <Box
          gridColumn="span 4"
          gridRow="span 2"
          
          padding="30px"
        >
          <Typography
            variant="h9"
            fontWeight="600"
            sx={{ marginBottom: "15px" }}
          >
          </Typography>
          <Box height="240px">
            </Box>
        </Box>
        <Box
          gridColumn="span 4"
          gridRow="span 2"
          
          padding="30px"
        >
          <Typography
            variant="h9"
            fontWeight="600"
            sx={{ marginBottom: "15px" }}
          >
          </Typography>
          <Box height="240px">
          </Box>
        </Box>

        <Box 
        gridRow="span 1"
        fontWeight="700"
        alignItems="end"
        height="5000px" mt="50px"
        >
        <p>{currTime}</p>
         <p>{currDate}</p>
         </Box>   
      </Box>
    </Box>
          </main>
        </div>
     
    </ColorModeContext.Provider>
    </Box>

    </>
  );
};

export default Dashboard;
