import * as React from "react";
import { DataGrid, GRID_STRING_COL_DEF } from "@mui/x-data-grid";
import { SparkLineChart } from "@mui/x-charts/SparkLineChart";
import { tokens } from "../../theme";
import { Box, useTheme } from "@mui/material";
import { WatchList } from "../../data/mockData";
import Topbar from "../../scenes/global/Topbar";
import Sidebar from "../global/Sidebar";

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
    flex: 1,
  },
  {
    field: "name",
    headerName: "SHOP",
    width: 100,
    cellClassName: "name-column--cell",
    flex: 1,
  },
  {
    field: "GRAPH",
    headerName: "GRAPH",
    width: 50,
    flex: 1,
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
    flex: 1,
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
    width: 50,
    flex: 1,
    cellClassName: "name-column--cell",
    renderCell: () => <div style={{ color: "#ddd9d9" }}>Click to add note</div>,
  },
  {
    field: "monthlyDownloadsBar",
    ...sparklineColumnType,
    headerName: "SALES TREND",
    renderCell: (params) => <GridSparklineCell {...params} plotType="bar" />,
    width: 100,
    flex: 1,
    valueGetter: (params) => params.row.monthlyDownloads,
    cellClassName: "name-column--cell",
  },
  {
    field: "FRI",
    headerName: "FRI 1-DEC",
    width: 50,
    flex: 1,
    cellClassName: "name-column--cell",
  },
  {
    field: "SAT",
    headerName: "SAT 2-DEC",
    width: 50,
    flex: 1,
    cellClassName: "name-column--cell",
  },
  {
    field: "SUN",
    headerName: "SUN 3-DEC",
    width: 50,
    flex: 1,
    cellClassName: "name-column--cell",
  },
  {
    field: "MON",
    headerName: "MON 4-DEC",
    width: 50,
    flex: 1,
    cellClassName: "name-column--cell",
  },
  {
    field: "TUE",
    headerName: "TUE 5-DEC",
    width: 50,
    flex: 1,
    cellClassName: "name-column--cell",
  },
  {
    field: "WED",
    headerName: "WED 6-DEC",
    width: 50,
    flex: 1,
    cellClassName: "name-column--cell",
  },
  {
    field: "THU",
    headerName: "THU 7-DEC",
    width: 50,
    flex: 1,
    cellClassName: "name-column--cell",
  },
  {
    field: "DAYS",
    headerName: "7 DAYS SALES",
    width: 50,
    flex: 1,
    cellClassName: "name-column--cell",
  },
  {
    field: "TOTAL",
    headerName: "TOTAL SALES",
    width: 50,
    flex: 1,
    cellClassName: "name-column--cell",
  },
  {
    field: "ACTIVE",
    headerName: "ACTIVE LISTINGS",
    width: 50,
    flex: 1,
    cellClassName: "name-column--cell",
  },
  {
    field: "SHOP",
    headerName: "SHOP AGE",
    width: 50,
    flex: 1,
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
      <Box gridColumn="span 13" p="20px" height="100vh">
        <Topbar></Topbar>
        <Box
          m="40px 0 0 0"
          width="100%"
          height="75vh"
          display="flex"
          flexDirection="column"
          overflowX="scroll"
          sx={{
            "& .MuiDataGrid-root": {
              border: "none !important",
            },
            "& .MuiDataGrid-cell": {
              border: "none !important",
            },
            "& .name-column--cell": {
              color: colors.primary[500],
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
              border: "none !important",
              backgroundColor: colors.greenAccent[700],
            },
            "& .MuiCheckbox-root": {
              border: "none !important",
              color: `${colors.greenAccent[200]} !important`,
            },
          }}
        >
          <DataGrid rows={WatchList} columns={columns} />
        </Box>
      </Box>
    </Box>
  );
}
