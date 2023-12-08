import { Box, IconButton, useTheme } from "@mui/material";
import { useContext } from "react";
import { ColorModeContext, tokens } from "../../theme";
import InputBase from "@mui/material/InputBase";

import LightModeOutlinedIcon from "@mui/icons-material/LightModeOutlined";
import DarkModeOutlinedIcon from "@mui/icons-material/DarkModeOutlined";
import NotificationsOutlinedIcon from "@mui/icons-material/NotificationsOutlined";
import SettingsOutlinedIcon from "@mui/icons-material/SettingsOutlined";
import PersonOutlinedIcon from "@mui/icons-material/PersonOutlined";
import SearchIcon from "@mui/icons-material/Search";

const Topbar = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const colorMode = useContext(ColorModeContext);

  return (
    <Box>
      {/* ICONS */}
      <Box display="flex" justifyContent="flex-end" p={2} pb={0}>
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
        <IconButton style={{ color: "black" }}>
          <SettingsOutlinedIcon />
        </IconButton>
        <IconButton style={{ color: "black" }}>
          <PersonOutlinedIcon />
        </IconButton>
      </Box>
      <Box display="flex" justifyContent="flex-start" p={2} pb={0}>
        {/* SEARCH BAR */}
        <Box
          display="flex"
          backgroundColor={colors.primary[50]}
          borderRadius="10px"
        >
          <InputBase
            sx={{ ml: 3, flex: 1, width: 350, color: "black" }}
            placeholder="Search Products"
          />
          <IconButton type="button" sx={{ p: 1, color: "black" }}>
            <SearchIcon />
          </IconButton>
        </Box>
      </Box>
    </Box>
  );
};

export default Topbar;
