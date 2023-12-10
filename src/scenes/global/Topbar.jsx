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
    <Box display="grid" mt="2vh" gridTemplateColumns="repeat(15, 1fr)" gap="20px">
      {/* ROW 3 */}
      <Box gridColumn="span 10" gridRow="span 2" p={2}>
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

      <Box gridColumn="span 5" display="flex" justifyContent="flex-end" gridRow="span 2" p={2}>
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
    </Box>
  );
};

export default Topbar;
