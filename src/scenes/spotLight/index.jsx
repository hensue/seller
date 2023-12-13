import React, { useState } from "react";
import { DataGrid, GRID_STRING_COL_DEF } from "@mui/x-data-grid";
import { tokens } from "../../theme";
import { Box, useTheme, Button, IconButton, Typography } from "@mui/material";
import { mockSpotLight, mockSpotLightSort } from "../../data/mockData";
import { SparkLineChart } from "@mui/x-charts/SparkLineChart";
import Topbar from "../../scenes/global/Topbar";
import Sidebar from "../global/Sidebar";
import InputBase from "@mui/material/InputBase";
import SearchIcon from "@mui/icons-material/Search";
import LockIcon from "@mui/icons-material/Lock";

function GridSparklineCell(props) {
  if (props.value == null) {
    return null;
  }

  return (
    <SparkLineChart
      data={props.value}
      width={props.colDef.computedWidth}
      plotType={props.plotType}
    />
  );
}

const sparklineColumnType = {
  ...GRID_STRING_COL_DEF,
  resizable: false,
  filterable: false,
  sortable: false,
  editable: false,
  groupable: false,
  renderCell: (params) => <GridSparklineCell {...params} />,
};

const columns1 = [
  {
    field: "id",
    headerName: "Find By Category",
    width: 50,
    cellClassName: "name-column--cell",
    flex: 0.5,
  },
];

const columns = [
  {
    field: "id",
    headerName: "Rank",
    width: 50,
    cellClassName: "name-column--cell",
  },
  {
    field: "shop",
    headerName: "Shop",
    width: 200,
    cellClassName: "name-column--cell",
  },
  {
    field: "sales",
    headerName: "Sales",
    width: 200,
    cellClassName: "name-column--cell",
  },
  {
    field: "monthlyDownloadsBar",
    ...sparklineColumnType,
    headerName: "Sales Trend",
    renderCell: (params) => <GridSparklineCell {...params} plotType="bar" />,
    width: 250,
    valueGetter: (params) => params.row.monthlyDownloads,
    cellClassName: "name-column--cell",
  },
  {
    field: "country",
    headerName: "Country",
    width: 200,
    cellClassName: "name-column--cell",
  },
];

export default function SpotLight() {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);

  const [isOpen, setIsOpen] = useState(false);

  const handleOpen = () => setIsOpen(true);
  const handleClose = () => setIsOpen(false);

  return (
    <Box display="grid" gridTemplateColumns="repeat(15, 1fr)">
      <Box gridColumn="span 2">
        <Sidebar />
      </Box>
      <Box gridColumn="span 13" height="100vh">
        <Box
          height="35vh"
          sx={{
            backgroundImage:
              'url("https://app.everbee.io/ligthTheme-bg-img.png")',
            backgroundSize: "cover",
            backgroundRepeat: "no-repeat",
            backgroundPosition: "center",
          }}
        ></Box>

        <Box
          p="2%"
          mt="-18vh"
          ml="2%"
          mr="2%"
          backgroundColor="white"
          height="80vh"
          border="1px solid white"
          borderRadius="2rem"
        >
           <Typography
                color="white"
                pb="2vh"
                ml='-2%'
                mt="-12vh"
                fontWeight="600"
                fontSize="2rem"
              >
                Spotlight
              </Typography>
          <Box
            display="flex"
            mt="4vh"
            border="1px solid black"
            backgroundColor={colors.primary[50]}
            borderRadius="10px"
            mb="2vh"
          >
            <InputBase
              sx={{ ml: 2, flex: 1, width: 350, color: "black" }}
              placeholder="Search Products"
            />
            <IconButton type="button" sx={{ p: 1, color: "black" }}>
              <SearchIcon />
            </IconButton>
          </Box>

          <Box display="flex" flex="1">
            <Box
              flex="0.2"
              p="2%"
              sx={{
                "& .MuiDataGrid-root": {
                  border: "none !important",
                  height: "65vh !important",
                  width: "100%",
                },
                "& .MuiDataGrid-cell": {
                  border: "none !important",
                },
                "& .name-column--cell": {
                  color: colors.primary[500],
                  fontSize: "16px",
                  border: "none !important",
                },

                "& .MuiDataGrid-cell:focus": {
                  outline: "none",
                },
                "& .MuiDataGrid-columnHeaders": {
                  backgroundColor: "white",
                  color: "black",
                  borderBottom: "1px solid grey",
                },
                "& .MuiDataGrid-sortIcon": {
                  color: "#ff0000",
                },
                "& .MuiDataGrid-columnHeader:focus": {
                  outline: "none !important",
                },
                "& .MuiDataGrid-menuIcon": {
                  color: "#00ff00",
                },
                "& .MuiDataGrid-menuIcon:focus": {
                  outline: "none !important",
                },
                "& .MuiDataGrid-sortIcon:focus": {
                  outline: "none",
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
             

              <DataGrid
                rows={mockSpotLightSort}
                columns={columns1}
                onRowClick={handleOpen}
                hideFooter={true}
              />
            </Box>
            <Box flex="0.02"></Box>
            <Box
              flex="0.78"
              // mt="-30vh"
              p="2%"
              sx={{
                "& .MuiDataGrid-root": {
                  border: "none !important",
                  height: "65vh !important",
                  width: "100%",
                },
                "& .MuiDataGrid-cell": {
                  border: "none !important",
                },
                "& .name-column--cell": {
                  color: colors.primary[500],
                  fontSize: "16px",
                  border: "none !important",
                },

                "& .MuiDataGrid-cell:focus": {
                  outline: "none",
                },
                "& .MuiDataGrid-columnHeaders": {
                  backgroundColor: "white",
                  color: "black",
                  borderBottom: "1px solid grey",
                },
                "& .MuiDataGrid-sortIcon": {
                  color: "#ff0000",
                },
                "& .MuiDataGrid-columnHeader:focus": {
                  outline: "none !important",
                },
                "& .MuiDataGrid-menuIcon": {
                  color: "#00ff00",
                },
                "& .MuiDataGrid-menuIcon:focus": {
                  outline: "none !important",
                },
                "& .MuiDataGrid-sortIcon:focus": {
                  outline: "none",
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
              <DataGrid
                rows={mockSpotLight}
                columns={columns}
                onRowClick={handleOpen}
              />
            </Box>
          </Box>
        </Box>
      </Box>
    </Box>
  );
}
