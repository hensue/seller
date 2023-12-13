import { Box, IconButton, Typography, useTheme } from "@mui/material";
import { useContext } from "react";
import { ColorModeContext, tokens } from "../../theme";
import InputBase from "@mui/material/InputBase";

import LightModeOutlinedIcon from "@mui/icons-material/LightModeOutlined";
import DarkModeOutlinedIcon from "@mui/icons-material/DarkModeOutlined";
import NotificationsOutlinedIcon from "@mui/icons-material/NotificationsOutlined";
import SettingsOutlinedIcon from "@mui/icons-material/SettingsOutlined";
import { ArrowDropDown } from "@mui/icons-material";
import PersonOutlinedIcon from "@mui/icons-material/PersonOutlined";
import SearchIcon from "@mui/icons-material/Search";

const Topbar = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const colorMode = useContext(ColorModeContext);

  return (
    <Box
      display="grid"
      pt="8vh"
      pl="4%"
      pr="4%"
      gridTemplateColumns="repeat(15, 1fr)"
      gap="20px"
    >
      {/* ROW 3 */}
      <Box gridColumn="span 5" gridRow="span 2">
        <Typography fontSize="32px" fontWeight="700">
          Hello, Linh and Symone
        </Typography>
        {/* <Box
          display="flex"
          backgroundColor={colors.primary[50]}
          borderRadius="10px"
        >
          <InputBase
            sx={{ ml: 2, flex: 1, width: 350, color: "black" }}
            placeholder="Search Products"
          />
          <IconButton type="button" sx={{ p: 1, color: "black" }}>
            <SearchIcon />
          </IconButton>
        </Box> */}
      </Box>

      <Box
        gridColumn="span 10"
        display="flex"
        justifyContent="flex-end"
        gridRow="span 2"
      >
        {/* <IconButton onClick={colorMode.toggleColorMode}>
          {theme.palette.mode === "dark" ? (
            <DarkModeOutlinedIcon />
          ) : (
            <LightModeOutlinedIcon />
          )}
        </IconButton>
        <IconButton>
          <NotificationsOutlinedIcon />
        </IconButton> */}
        {/* <IconButton style={{ color: "black" }}>
          <SettingsOutlinedIcon />
        </IconButton> */}
        <IconButton style={{ color: "black" }}>
          <PersonOutlinedIcon />
          <Typography ml="10%" color="white" fontSize="20px">
            Linh
          </Typography>
          <ArrowDropDown color="black" />
        </IconButton>
      </Box>
    </Box>
  );
};

export default Topbar;
