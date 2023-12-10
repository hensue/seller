import React, { useState } from "react";
import { DataGrid, GRID_STRING_COL_DEF } from "@mui/x-data-grid";
import { tokens } from "../../theme";
import { Box, useTheme, Button } from "@mui/material";
import { mockSpotLight, mockSpotLightSort } from "../../data/mockData";
import { SparkLineChart } from "@mui/x-charts/SparkLineChart";
import Topbar from "../../scenes/global/Topbar";

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
    flex: 0.5,
  },
  {
    field: "shop",
    headerName: "Shop",
    width: 250,
    cellClassName: "name-column--cell",
    flex: 1,
  },
  {
    field: "sales",
    headerName: "Sales",
    width: 250,
    cellClassName: "name-column--cell",
    flex: 1,
  },
  {
    field: "monthlyDownloadsBar",
    ...sparklineColumnType,
    headerName: "Sales Trend",
    renderCell: (params) => <GridSparklineCell {...params} plotType="bar" />,
    width: 250,
    valueGetter: (params) => params.row.monthlyDownloads,
    cellClassName: "name-column--cell",
    flex: 1,
  },
  {
    field: "country",
    headerName: "Country",
    width: 250,
    cellClassName: "name-column--cell",
    flex: 1,
  },
];

export default function SpotLight() {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);

  const [isOpen, setIsOpen] = useState(false);

  const handleOpen = () => setIsOpen(true);
  const handleClose = () => setIsOpen(false);

  return (
    <Box p="20px"  height="100vh" >
      <Topbar></Topbar>
      <Box display="flex" pl="20px" pr="20px" flex="1">
      <Box
        flex="0.2"
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
        <DataGrid
          rows={mockSpotLight}
          columns={columns}
          onRowClick={handleOpen}
        />
      </Box>
      </Box>
    </Box>
  );
}
