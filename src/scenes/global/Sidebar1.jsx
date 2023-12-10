import { useState } from "react";
import { ProSidebar, Menu, MenuItem } from "react-pro-sidebar";
import { Box, IconButton, Typography, useTheme } from "@mui/material";
import { Link } from "react-router-dom";
import "react-pro-sidebar/dist/css/styles.css";
import { tokens } from "../../theme";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { DataGrid, GridToolbar } from "@mui/x-data-grid";
import { mockDataTeam } from "../../data/mockData";
import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined";
import PeopleOutlinedIcon from "@mui/icons-material/PeopleOutlined";
import ContactsOutlinedIcon from "@mui/icons-material/ContactsOutlined";
import ReceiptOutlinedIcon from "@mui/icons-material/ReceiptOutlined";
import PersonOutlinedIcon from "@mui/icons-material/PersonOutlined";
import CalendarTodayOutlinedIcon from "@mui/icons-material/CalendarTodayOutlined";
import HelpOutlineOutlinedIcon from "@mui/icons-material/HelpOutlineOutlined";
import CalculatorOutlinedIcon from "@mui/icons-material/CalculateOutlined";
import CloseIcon from "@mui/icons-material/Close";
import BarChartOutlinedIcon from "@mui/icons-material/BarChartOutlined";
import PieChartOutlineOutlinedIcon from "@mui/icons-material/PieChartOutlineOutlined";
import TimelineOutlinedIcon from "@mui/icons-material/TimelineOutlined";
import MenuOutlinedIcon from "@mui/icons-material/MenuOutlined";
import MapOutlinedIcon from "@mui/icons-material/MapOutlined";

const Item = ({ title, to, icon, selected, setSelected }) => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  return (
    <MenuItem
      active={selected === title}
      style={{
        color: colors.grey[800],
      }}
      onClick={() => setSelected(title)}
      icon={icon}
    >
      <Typography>{title}</Typography>
      <Link to={to} />
    </MenuItem>
  );
};

const Sidebar1 = ({ onClose }) => {
  const columns = [
    {
      field: "name",
      headerName: "Name",
      flex: 1,
      cellClassName: "name-column--cell",
      width: 150,
    },
    {
      field: "price",
      headerName: "Price",
      flex: 1,
      width: 150,
      cellClassName: "name-column--cell",
    },
    {
      field: "reviews",
      headerName: "Reviews",
      flex: 1,
      width: 150,
      cellClassName: "name-column--cell",
    },
    {
      field: "views",
      headerName: "Views",
      flex: 1,
      width: 150,
      cellClassName: "name-column--cell",
    },
  ];

  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const [isCollapsed, setIsCollapsed] = useState(false);
  const [selected, setSelected] = useState("Dashboard");

  return (
    <Box
      sx={{
        "& .pro-sidebar-inner": {
          background: `${colors.primary[50]} !important`,
        },
        "& .pro-icon-wrapper": {
          backgroundColor: "transparent !important",
        },
        "& .pro-inner-item": {
          padding: "5px 10px 5px 10px !important",
        },
        "& .pro-inner-item:hover": {
          color: "#3da58a !important",
        },
        "& .pro-menu-item.active": {
          color: "#3da58a !important",
        },
      }}
    >
      <ProSidebar collapsed={isCollapsed}>
        <Menu
          iconShape="square"
          style={{
            position: "fixed",
            right: "0",
            top: "0",
            backgroundColor: "white",
            height: "100%",
            overflowY: "scroll",
            overflowX: "scroll",
            width: "25%",
          }}
        >
          <MenuItem
            onClick={() => setIsCollapsed(!isCollapsed)}
            style={{
              margin: "10px 0 10px 0",
              color: colors.grey[100],
            }}
          >
            <Box
              display="flex"
              justifyContent="space-between"
              alignItems="center"
            >
              <Typography variant="h3" color={colors.grey[900]}>
                Listing Details
              </Typography>
              <IconButton>
                <CalculatorOutlinedIcon
                  style={{ color: "blue", marginRight: "15px" }}
                />
                <CloseIcon onClick={onClose} style={{ color: "black" }} />
              </IconButton>
            </Box>
            <Box
              // width="60%"
              m="5% auto"
              // p="5px"
              display="flex"
              justifyContent="space-between"
            >
              <Box>
                <img
                  alt="profile-user"
                  width="120"
                  height="120"
                  src={`https://images.unsplash.com/photo-1615572359976-1fe39507ed7b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTh8fGJsYWNrJTIwbWFufGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60`}
                  style={{ cursor: "pointer", objectFit: "cover" }}
                />
              </Box>
              <Box>
                <Typography color={colors.grey[500]}>
                  Cocktail Personalized ice Cube Sillence
                  <br /> Molds. 3D Printed then casted in Food
                  <br /> Grade Sillicone
                </Typography>
                <Box display="flex" m="3%" justifyContent="space-between">
                  <Typography color={colors.greenAccent[500]}>
                    $10000
                  </Typography>
                  <Typography color={colors.greenAccent[500]}>
                    TheBaggs3DShop
                  </Typography>
                </Box>
                <Box display="flex" m="3%" justifyContent="space-between">
                  <Typography color={colors.greenAccent[900]}>
                    View on Etsy
                  </Typography>
                  <Typography color={colors.greenAccent[900]}>US</Typography>
                </Box>
              </Box>
            </Box>
            <Box
              display="flex"
              justifyContent="space-between"
              alignItems="center"
              borderTop={`1px solid ${colors.primary[700]}`}
              p="15px"
            >
              <Box>
                <Typography
                  color={colors.greenAccent[500]}
                  fontSize="12px"
                  fontWeight="600"
                >
                  Est Mo.Sales
                </Typography>
                <Typography textAlign="center" color={colors.grey[500]}>
                  231
                </Typography>
              </Box>

              <Box>
                <Typography
                  color={colors.greenAccent[500]}
                  fontSize="12px"
                  fontWeight="600"
                >
                  Est Mo.Revenue
                </Typography>
                <Typography textAlign="center" color={colors.grey[500]}>
                  435
                </Typography>
              </Box>
              <Box>
                <Typography
                  color={colors.greenAccent[500]}
                  fontSize="12px"
                  fontWeight="600"
                >
                  Total Sales
                </Typography>
                <Typography textAlign="center" color={colors.grey[500]}>
                  231
                </Typography>
              </Box>
              <Box>
                <Typography
                  color={colors.greenAccent[500]}
                  fontSize="12px"
                  fontWeight="600"
                >
                  Listing Age
                </Typography>
                <Typography textAlign="center" color={colors.grey[500]}>
                  231
                </Typography>
              </Box>
            </Box>

            <Box>
              <Box display="flex" justifyContent="center">
                <Box
                  width="50%"
                  textAlign="center"
                  borderRight={`1px solid ${colors.primary[700]}`}
                  borderBottom={`1px solid ${colors.primary[700]}`}
                >
                  <Typography>Avg. Conv. Rate</Typography>
                  <Typography>11.58%</Typography>
                </Box>
                <Box width="50%" textAlign="center" borderLeft={`1px solid ${colors.primary[700]}`}
                  borderBottom={`1px solid ${colors.primary[700]}`}>
                  <Typography>Category</Typography>
                  <Typography>Clothing</Typography>
                </Box>
              </Box>
              <Box display="flex" justifyContent="center">
                <Box
                  textAlign="center"
                  width="50%"
                  borderRight={`1px solid ${colors.primary[700]}`}
                  borderTop={`1px solid ${colors.primary[700]}`}
                >
                  <Typography>Avg. Visibility Score</Typography>
                  <Typography>Clothing</Typography>
                  
                </Box>
                <Box width="50%" textAlign="center"  borderLeft={`1px solid ${colors.primary[700]}`}
                  borderTop={`1px solid ${colors.primary[700]}`}>
                  <Typography>Review Ratio</Typography>
                  <Typography>9.09%</Typography>
                </Box>
              </Box>
            </Box>

            <Box
              display="flex"
              justifyContent="space-between"
              alignItems="center"
              borderBottom={`1px solid ${colors.primary[700]}`}
              p="15px"
            >
              <Box>
                <Typography
                  color={colors.greenAccent[500]}
                  fontSize="12px"
                  fontWeight="600"
                >
                  Reviews
                </Typography>
                <Typography textAlign="center" color={colors.grey[500]}>
                  231
                </Typography>
              </Box>

              <Box>
                <Typography
                  color={colors.greenAccent[500]}
                  fontSize="12px"
                  fontWeight="600"
                >
                  Views
                </Typography>
                <Typography textAlign="center" color={colors.grey[500]}>
                  435
                </Typography>
              </Box>
              <Box>
                <Typography
                  color={colors.greenAccent[500]}
                  fontSize="12px"
                  fontWeight="600"
                >
                  Favorites
                </Typography>
                <Typography textAlign="center" color={colors.grey[500]}>
                  231
                </Typography>
              </Box>
              <Box>
                <Typography
                  color={colors.greenAccent[500]}
                  fontSize="12px"
                  fontWeight="600"
                >
                  Reviews per Mo
                </Typography>
                <Typography textAlign="center" color={colors.grey[500]}>
                  231
                </Typography>
              </Box>
            </Box>

            <Box marginTop="3vh">
              <Accordion defaultExpanded className="custom-accordion">
                <AccordionSummary
                  expandIcon={<ExpandMoreIcon style={{ color: "black" }} />}
                >
                  <Typography color={colors.greenAccent[500]} variant="h5">
                    Tags
                  </Typography>
                </AccordionSummary>
                <AccordionDetails
                  style={{ display: "flex", justifyContent: "space-between" }}
                  m="40px 0 0 0"
                  height="75vh"
                  sx={{
                    "& .MuiDataGrid-root": {
                      // border: "none !important",
                    },
                    "& .MuiDataGrid-cell": {
                      border: "none !important",
                    },
                    "& .name-column--cell": {
                      color: colors.primary[500],
                      fontSize: "16px",
                      textAlign: "center",
                      border: "none !important",
                    },
                    "& .MuiDataGrid-columnHeaders": {
                      backgroundColor: colors.greenAccent[700],
                      border: "none !important",
                    },
                    "& .MuiDataGrid-virtualScroller": {
                      backgroundColor: colors.primary[50],
                      border: "none !important",
                    },
                    "& .MuiDataGrid-footerContainer": {
                      display: "none",
                      border: "none !important",
                      backgroundColor: colors.greenAccent[700],
                    },
                    "& .MuiCheckbox-root": {
                      border: "none !important",
                      color: `${colors.greenAccent[200]} !important`,
                    },
                  }}
                >
                  {/* <Typography  color={colors.primary[500]}>
                    When Mode
                  </Typography>
                  <Typography color={colors.primary[500]}>
                    made_to_order
                  </Typography> */}
                  <DataGrid rows={mockDataTeam} columns={columns} />
                </AccordionDetails>
              </Accordion>
            </Box>

            <Box>
              <Accordion defaultExpanded className="custom-accordion">
                <AccordionSummary
                  expandIcon={<ExpandMoreIcon style={{ color: "black" }} />}
                >
                  <Typography color={colors.greenAccent[500]} variant="h5">
                    More details
                  </Typography>
                </AccordionSummary>
                <AccordionDetails
                  style={{ display: "flex", justifyContent: "space-between" }}
                >
                  <Typography color={colors.primary[500]}>When Mode</Typography>
                  <Typography color={colors.primary[500]}>
                    made_to_order
                  </Typography>
                </AccordionDetails>
                <AccordionDetails
                  style={{ display: "flex", justifyContent: "space-between" }}
                >
                  <Typography color={colors.primary[500]}>
                    Listing Type
                  </Typography>
                  <Typography color={colors.primary[500]}>physical</Typography>
                </AccordionDetails>
                <AccordionDetails
                  style={{ display: "flex", justifyContent: "space-between" }}
                >
                  <Typography color={colors.primary[500]}>
                    Customizable
                  </Typography>
                  <Typography color={colors.primary[500]}>No</Typography>
                </AccordionDetails>
                <AccordionDetails
                  style={{ display: "flex", justifyContent: "space-between" }}
                >
                  <Typography color={colors.primary[500]}>
                    Craft Supply
                  </Typography>
                  <Typography color={colors.primary[500]}>No</Typography>
                </AccordionDetails>
                <AccordionDetails
                  style={{ display: "flex", justifyContent: "space-between" }}
                >
                  <Typography color={colors.primary[500]}>
                    Personalized
                  </Typography>
                  <Typography color={colors.primary[500]}>Yes</Typography>
                </AccordionDetails>
                <AccordionDetails
                  style={{ display: "flex", justifyContent: "space-between" }}
                >
                  <Typography color={colors.primary[500]}>
                    Auto Renew
                  </Typography>
                  <Typography color={colors.primary[500]}>Yes</Typography>
                </AccordionDetails>
                <AccordionDetails
                  style={{ display: "flex", justifyContent: "space-between" }}
                >
                  <Typography color={colors.primary[500]}>
                    Has variations
                  </Typography>
                  <Typography color={colors.primary[500]}>No</Typography>
                </AccordionDetails>
                <AccordionDetails
                  style={{ display: "flex", justifyContent: "space-between" }}
                >
                  <Typography color={colors.primary[500]}>
                    Placements of listing Shops
                  </Typography>
                  <Typography color={colors.primary[500]}>yes</Typography>
                </AccordionDetails>
                <AccordionDetails
                  style={{ display: "flex", justifyContent: "space-between" }}
                >
                  <Typography color={colors.primary[500]}>
                    Placements of Listing Shops
                  </Typography>
                  <Typography color={colors.primary[500]}>No</Typography>
                </AccordionDetails>
                <AccordionDetails
                  style={{ display: "flex", justifyContent: "space-between" }}
                >
                  <Typography color={colors.primary[500]}>
                    Title character count
                  </Typography>
                  <Typography color={colors.primary[500]}>92</Typography>
                </AccordionDetails>
                <AccordionDetails
                  style={{ display: "flex", justifyContent: "space-between" }}
                >
                  <Typography color={colors.primary[500]}># of tags</Typography>
                  <Typography color={colors.primary[500]}>13</Typography>
                </AccordionDetails>
              </Accordion>
            </Box>
          </MenuItem>
        </Menu>
      </ProSidebar>
    </Box>
  );
};

export default Sidebar1;
