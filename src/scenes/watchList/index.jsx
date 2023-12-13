import * as React from "react";
import { DataGrid, GRID_STRING_COL_DEF } from "@mui/x-data-grid";
import { SparkLineChart } from "@mui/x-charts/SparkLineChart";
import { tokens } from "../../theme";
import { IconButton, Box, useTheme, Button, Typography } from "@mui/material";
import { WatchList } from "../../data/mockData";
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

const columns = [
  {
    field: "id",
    headerName: "#",
    width: 50,
    cellClassName: "name-column--cell",
  },
  {
    field: "name",
    headerName: "SHOP",
    width: 100,
    cellClassName: "name-column--cell",
  },
  {
    field: "GRAPH",
    headerName: "GRAPH",
    width: 50,
    cellClassName: "name-column--cell",
    renderCell: () => (
      <div
        style={{
          width: "20px",
          height: "20px",
          backgroundColor: "#ddd9d9",
          borderRadius: 3,
        }}
      ></div>
    ),
  },
  {
    field: "FLAGS",
    headerName: "FLAGS",
    width: 50,
    cellClassName: "name-column--cell",
    renderCell: () => (
      <div
        style={{
          width: "20px",
          height: "20px",
          backgroundColor: "#ddd9d9",
          borderRadius: 20,
        }}
      ></div>
    ),
  },
  {
    field: "NOTES",
    headerName: "NOTES",
    width: 100,
    cellClassName: "name-column--cell",
    renderCell: () => <div style={{ color: "#ddd9d9" }}>Click to add note</div>,
  },
  {
    field: "monthlyDownloadsBar",
    ...sparklineColumnType,
    headerName: "SALES TREND",
    renderCell: (params) => <GridSparklineCell {...params} plotType="bar" />,
    width: 150,
    valueGetter: (params) => params.row.monthlyDownloads,
    cellClassName: "name-column--cell",
  },
  {
    field: "FRI",
    headerName: "FRI 1-DEC",
    width: 100,
    cellClassName: "name-column--cell",
  },
  {
    field: "SAT",
    headerName: "SAT 2-DEC",
    width: 100,
    cellClassName: "name-column--cell",
  },
  {
    field: "SUN",
    headerName: "SUN 3-DEC",
    width: 100,
    cellClassName: "name-column--cell",
  },
  {
    field: "MON",
    headerName: "MON 4-DEC",
    width: 100,
    cellClassName: "name-column--cell",
  },
  {
    field: "TUE",
    headerName: "TUE 5-DEC",
    width: 100,
    cellClassName: "name-column--cell",
  },
  {
    field: "WED",
    headerName: "WED 6-DEC",
    width: 100,
    cellClassName: "name-column--cell",
  },
  {
    field: "THU",
    headerName: "THU 7-DEC",
    width: 100,
    cellClassName: "name-column--cell",
  },
  {
    field: "DAYS",
    headerName: "7 DAYS SALES",
    width: 100,
    cellClassName: "name-column--cell",
  },
  {
    field: "TOTAL",
    headerName: "TOTAL SALES",
    width: 100,
    cellClassName: "name-column--cell",
  },
  {
    field: "ACTIVE",
    headerName: "ACTIVE LISTINGS",
    width: 100,
    cellClassName: "name-column--cell",
  },
  {
    field: "SHOP",
    headerName: "SHOP AGE",
    width: 100,
    cellClassName: "name-column--cell",
  },
];

export default function Lists() {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);

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
          mt="-30vh"
          pl="2%"
          pr="2%"
          pt="2%"
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
              outline: "none !important",
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
          <Typography color="white" pb="2vh" fontWeight="600" fontSize="2rem">
            Product Analytics
          </Typography>
          <Box
            backgroundColor="white"
            height="80vh"
            p="2%"
            border="1px solid white"
            borderRadius="2rem"
          >
            <Box
              display="flex"
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
            <DataGrid rows={WatchList} columns={columns} />
          </Box>
        </Box>
      </Box>
    </Box>
  );
}
