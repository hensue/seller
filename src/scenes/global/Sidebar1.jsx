import { useState } from "react";
import { ProSidebar, Menu, MenuItem } from "react-pro-sidebar";
import { Box, IconButton, Typography, useTheme, Button, TextField } from "@mui/material";
import { Link } from "react-router-dom";
import "react-pro-sidebar/dist/css/styles.css";
import { tokens } from "../../theme";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { DataGrid, GridToolbar } from "@mui/x-data-grid";
import { mockDataTeam } from "../../data/mockData";
import { Modal, ModalBody } from "react-modern-modal";
import { Formik } from "formik";
import * as yup from "yup";
import useMediaQuery from "@mui/material/useMediaQuery";
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

  const phoneRegExp =
  /^((\+[1-9]{1,4}[ -]?)|(\([0-9]{2,3}\)[ -]?)|([0-9]{2,4})[ -]?)*?[0-9]{3,4}[ -]?[0-9]{3,4}$/;

const checkoutSchema = yup.object().shape({
  firstName: yup.string().required("required"),
  lastName: yup.string().required("required"),
  email: yup.string().email("invalid email").required("required"),
  contact: yup
    .string()
    .matches(phoneRegExp, "Phone number is not valid")
    .required("required"),
  password: yup.string().required("required"),
  address2: yup.string().required("required"),
});
const initialValues = {
  firstName: "",
  lastName: "",
  email: "",
  contact: "",
  password: "",
  address2: "",
};
  
  const isNonMobile = useMediaQuery("(min-width:600px)");

  const handleFormSubmit = (values) => {
    console.log(values);
  };

  const inputStyles = {
   backgroundColor:'white',
   color:'black',
   borderRadius: '10px'
  }
  const inputLabelStyles = {
    backgroundColor: "white",
    color: "black",
  };

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
  const [isOpen, setIsOpen] = useState(false);

  const handleOpen = () => setIsOpen(true);
  const handleClose = () => setIsOpen(false);

  return (
    <Box
      sx={{
         position: 'sticky',
        top: 0,
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
                  onClick={handleOpen}
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
                <Box
                  width="50%"
                  textAlign="center"
                  borderLeft={`1px solid ${colors.primary[700]}`}
                  borderBottom={`1px solid ${colors.primary[700]}`}
                >
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
                <Box
                  width="50%"
                  textAlign="center"
                  borderLeft={`1px solid ${colors.primary[700]}`}
                  borderTop={`1px solid ${colors.primary[700]}`}
                >
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
      <Modal size="lg" isOpen={isOpen} onClose={handleClose}>
        {/* <ModalHeader>Sign Up</ModalHeader> */}
        <ModalBody style={{ backgroundColor: "white" }}>
          <div style={{ display: "flex" }}>
            <div className="calculator">
              <h1 style={{ color: "black", marginBottom:'2vh' }}>Profile Calculator</h1>

              <Formik
                onSubmit={handleFormSubmit}
                initialValues={initialValues}
                validationSchema={checkoutSchema}
              >
                {({
                  values,
                  errors,
                  touched,
                  handleBlur,
                  handleChange,
                  handleSubmit,
                }) => (
                  <form onSubmit={handleSubmit}>
                    <Box
                      display="grid"
                      gap="30px"
                      gridTemplateColumns="repeat(4, minmax(0, 1fr))"
                      sx={{
                        "& > div": {
                          gridColumn: isNonMobile ? undefined : "span 4",
                        },
                      }}
                    >
                      <TextField
                        fullWidth
                        variant="filled"
                        type="text"
                        label="Selling Price(USD)"
                        InputProps={{ style: inputStyles }}
                        InputLabelProps={{ style: inputLabelStyles }}
                        onBlur={handleBlur}
                        onChange={handleChange}
                        value={values.email}
                        name="sell"
                        error={!!touched.email && !!errors.email}
                        helperText={touched.email && errors.email}
                        sx={{ gridColumn: "span 4" }}
                      />
                      <TextField
                        fullWidth
                        variant="filled"
                        type="text"
                        label="Product Cost(USD)"
                        InputProps={{ style: inputStyles }}
                        InputLabelProps={{ style: inputLabelStyles }}
                        onBlur={handleBlur}
                        onChange={handleChange}
                        value={values.password}
                        name="product"
                        error={!!touched.password && !!errors.password}
                        helperText={touched.password && errors.password}
                        sx={{ gridColumn: "span 4" }}
                      />
                       <TextField
                        fullWidth
                        variant="filled"
                        type="text"
                        label="Shipping Cost(USD)"
                        InputProps={{ style: inputStyles }}
                        InputLabelProps={{ style: inputLabelStyles }}
                        onBlur={handleBlur}
                        onChange={handleChange}
                        value={values.password}
                        name="ship"
                        error={!!touched.password && !!errors.password}
                        helperText={touched.password && errors.password}
                        sx={{ gridColumn: "span 4" }}
                      />
                    </Box>
                    <Box display="flex" justifyContent="start" mt="2vh">
                      <Button
                        type="submit"
                        color="secondary"
                        variant="contained"
                      >
                        Calculate
                      </Button>
                    </Box>
                  </form>
                )}
              </Formik>

              {/* <div
                style={{
                  display: "flex",
                  justifyContent: "center",
                  marginTop: "10px",
                }}
              >
                <Button
                  style={{ backgroundColor: "white", borderRadius: "10px" }}
                  type="submit"
                  color="secondary"
                  variant="contained"
                >
                  Calculate
                </Button>
              </div> */}
            </div>
            <div className="calculator1">
              <h1 style={{ color: "black", marginBottom:'2vh' }}>Calculation Results</h1>
              <p
                style={{
                  paddingTop: 10,
                  color: "black",
                  display: "flex",
                  justifyContent: "space-between",
                  borderBottom: "1px grey solid",
                }}
              >
                <span>Listing Fee</span>
                <span>0.00USD</span>
              </p>
              <p
                style={{
                  color: "black",
                  paddingTop: 20,
                  display: "flex",
                  justifyContent: "space-between",
                  borderBottom: "1px grey solid",
                }}
              >
                <span>Transaction Fee</span>
                <span>0.00USD</span>
              </p>
              <p
                style={{
                  color: "black",
                  paddingTop: 20,
                  display: "flex",
                  justifyContent: "space-between",
                  borderBottom: "1px grey solid",
                }}
              >
                <span>Processing Fee</span>
                <span>0.00USD</span>
              </p>
              <p
                style={{
                  color: "black",
                  paddingTop: 20,
                  display: "flex",
                  justifyContent: "space-between",
                  borderBottom: "1px grey solid",
                }}
              >
                <span>Total Cost</span>
                <span>0.00USD</span>
              </p>
              <p
                style={{
                  color: "black",
                  marginTop: 30,
                  padding: 10,
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                  backgroundColor: "grey",
                  // background: 'transparent'
                  // borderBottom: "1px grey solid",
                }}
              >
                <span>Profit</span>
                <span>0.00USD</span>
              </p>
              <p
                style={{
                  color: "black",
                  paddingTop: 20,
                  fontSize: "10px",
                  display: "flex",
                  justifyContent: "space-between",
                }}
              >
                This calculation is a rough estimate and subject to change.
              </p>
            </div>
          </div>
        </ModalBody>
      </Modal>
    </Box>
  );
};

export default Sidebar1;
