import { useState } from "react";
import { ProSidebar, Menu, MenuItem } from "react-pro-sidebar";
import { Box, IconButton, Typography, useTheme } from "@mui/material";
import { Link } from "react-router-dom";
import "react-pro-sidebar/dist/css/styles.css";
import { tokens } from "../../theme";
import useMediaQuery from "@mui/material/useMediaQuery";
import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined";
import LoginOutlinedIcon from "@mui/icons-material/LoginOutlined";
import AppRegistration from "@mui/icons-material/AppRegistration";
import AnalyticsOutlined from "@mui/icons-material/AnalyticsOutlined";
import CreateOutlined from "@mui/icons-material/CreateOutlined";
import PeopleOutlinedIcon from "@mui/icons-material/PeopleOutlined";
import ContactsOutlinedIcon from "@mui/icons-material/ContactsOutlined";
import ReceiptOutlinedIcon from "@mui/icons-material/ReceiptOutlined";
import PersonOutlinedIcon from "@mui/icons-material/PersonOutlined";
import CalendarTodayOutlinedIcon from "@mui/icons-material/CalendarTodayOutlined";
import HelpOutlineOutlinedIcon from "@mui/icons-material/HelpOutlineOutlined";
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

const Sidebar = () => {
  const isNonMobile = useMediaQuery("(min-width:600px)");
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const [isCollapsed, setIsCollapsed] = useState(false);
  const [selected, setSelected] = useState("");

  return isNonMobile ? (
    <Box
      height="100vh"
      width="13.3%"
      sx={{
        position: "fixed",
        top: "0",
        "& .pro-sidebar-inner": {
          backgroundColor: "white",
        },
        "& .pro-icon-wrapper": {
          backgroundColor: "transparent !important",
        },
        "& .pro-inner-item": {
          padding: "5px 35px 5px 20px !important",
        },
        "& .pro-inner-item:hover": {
          color: "#3da58a !important",
        },
        "& .pro-menu-item.active": {
          color: "#3da58a !important",
        },
      }}
    >
      <ProSidebar
        style={{ width: "100%", minWidth: "100%" }}
        collapsed={isCollapsed}
      >
        <Menu iconShape="square">
          {/* LOGO AND MENU ICON */}
          <MenuItem
            // onClick={() => setIsCollapsed(!isCollapsed)}
            icon={isCollapsed ? <MenuOutlinedIcon /> : undefined}
            style={{
              margin: "10px 0 20px 0",
              color: colors.grey[100],
            }}
          >
            {!isCollapsed && (
              <Box display="flex" justifyContent="center">
                <a href="/">
                  <img
                    alt="profile-user"
                    width="105"
                    height="105"
                    src="./7.png"
                    style={{
                      cursor: "pointer",
                      objectFit: "cover",
                      borderRadius: "50%",
                    }}
                  />
                </a>
              </Box>
            )}
          </MenuItem>

          <Box paddingLeft={isCollapsed ? undefined : "5%"}>
            <Item
              title="Dashboard"
              to="/"
              icon={<HomeOutlinedIcon />}
              selected={selected}
              setSelected={setSelected}
            />

            {/* <Typography
              variant="h6"
              color={colors.grey[800]}
              sx={{ m: "15px 0 5px 20px" }}
            >
              Auth
            </Typography>
            <Item
              title="Login"
              to="/login"
              icon={<LoginOutlinedIcon />}
              selected={selected}
              setSelected={setSelected}
            />
            <Item
              title="Register"
              to="/register"
              icon={<AppRegistration />}
              selected={selected}
              setSelected={setSelected}
            /> */}

            <Typography
              variant="h5"
              color={colors.grey[900]}
              sx={{ m: "15px 0 5px 20px" }}
            >
              Research Tools
            </Typography>
            <Item
              title="Product Analytics"
              to="/team"
              icon={<AnalyticsOutlined />}
              selected={selected}
              setSelected={setSelected}
            />
            <Item
              title="Listing Analytics"
              to="/contacts"
              icon={<ContactsOutlinedIcon />}
              selected={selected}
              setSelected={setSelected}
            />
            <Item
              title="Watch List"
              to="/invoices"
              icon={<ReceiptOutlinedIcon />}
              selected={selected}
              setSelected={setSelected}
            />
            <Item
              title="Spotlight"
              to="/spot"
              icon={<BarChartOutlinedIcon />}
              selected={selected}
              setSelected={setSelected}
            />
            <Item
              title="Listing Generator"
              to="/generator"
              icon={<CreateOutlined />}
              selected={selected}
              setSelected={setSelected}
            />
          </Box>
        </Menu>
      </ProSidebar>
    </Box>
  ) : (
    <Box
      height="100%"
      sx={{
        "& .pro-sidebar-inner": {
          // background: "linear-gradient(257deg,#e5ffea,rgba(224,255,229,0))",
          backgroundColor: "white !important",
        },
        "& .pro-icon-wrapper": {
          backgroundColor: "transparent !important",
        },
        "& .pro-inner-item": {
          padding: "5px 5px 5px 5px !important",
        },
        "& .pro-inner-item:hover": {
          color: "#3da58a !important",
        },
        "& .pro-menu-item.active": {
          color: "#3da58a !important",
        },
      }}
    >
      <ProSidebar
        style={{ width: "100%", minWidth: "100%" }}
        collapsed={isCollapsed}
      >
        <Menu iconShape="square">
          <MenuItem
            icon={<MenuOutlinedIcon color="black" />}
            style={{
              margin: "10px 5px 20px 5px",
              color: colors.grey[100],
            }}
          >
            {isNonMobile && (
              <Box display="flex" justifyContent="center">
                <a href="/">
                  <img
                    alt="profile-user"
                    width="50"
                    height="50"
                    src="./7.png"
                    style={{
                      cursor: "pointer",
                      objectFit: "cover",
                      borderRadius: "50%",
                    }}
                  />
                </a>
              </Box>
            )}
          </MenuItem>

          <Box paddingLeft={isCollapsed ? undefined : "5%"}>
            <Item
              title="Dashboard"
              to="/"
              icon={<HomeOutlinedIcon />}
              selected={selected}
              setSelected={setSelected}
            />

            {/* <Typography
              variant="h6"
              color={colors.grey[800]}
              sx={{ m: "15px 0 5px 20px" }}
            >
              Auth
            </Typography> */}
            <Item
              title="Login"
              to="/login"
              icon={<LoginOutlinedIcon />}
              selected={selected}
              setSelected={setSelected}
            />
            <Item
              title="Register"
              to="/register"
              icon={<AppRegistration />}
              selected={selected}
              setSelected={setSelected}
            />

            {/* <Typography
              variant="h6"
              color={colors.grey[800]}
              sx={{ m: "15px 0 5px 20px" }}
            >
              Analysis
            </Typography> */}
            <Item
              title="Product Analysis"
              to="/team"
              icon={<AnalyticsOutlined />}
              selected={selected}
              setSelected={setSelected}
            />
            <Item
              title="Listing Analysis"
              to="/contacts"
              icon={<ContactsOutlinedIcon />}
              selected={selected}
              setSelected={setSelected}
            />
            <Item
              title="Watch List"
              to="/invoices"
              icon={<ReceiptOutlinedIcon />}
              selected={selected}
              setSelected={setSelected}
            />
            <Item
              title="Spotlight"
              to="/spot"
              icon={<BarChartOutlinedIcon />}
              selected={selected}
              setSelected={setSelected}
            />
            <Item
              title="Listing Generator"
              to="/generator"
              icon={<CreateOutlined />}
              selected={selected}
              setSelected={setSelected}
            />
          </Box>
        </Menu>
      </ProSidebar>
    </Box>
  );
};

export default Sidebar;
