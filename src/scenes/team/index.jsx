import * as React from "react";
import { DataGrid, GridToolbar } from "@mui/x-data-grid";
import { tokens } from "../../theme";
import { mockDataTeam } from "../../data/mockData";
import { Box,useTheme } from "@mui/material";

export default function ColumnSelectorGrid() {

  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const columns = [
    {
      field: "photo",
      headerName: "Photo",
      cellClassName: "name-column--cell",
    },
    {
      field: "name",
      headerName: "Name",
      flex: 1,
      cellClassName: "name-column--cell",
    },
    {
      field: "productName",
      headerName: "Product Name",
      headerAlign: "left",
      align: "left",
      cellClassName: "name-column--cell",
    },
    {
      field: "shopeName",
      headerName: "Shop Name",
      flex: 1,
      cellClassName: "name-column--cell",
    },
    {
      field: "price",
      headerName: "Price",
      flex: 1,
      cellClassName: "name-column--cell",
    },
    {
      field: "moRevenue",
      headerName: "Mo.Revenue",
      flex: 1,
      cellClassName: "name-column--cell",
    },
    {
      field: "totalSales",
      headerName: "Total Sales",
      flex: 1,
      cellClassName: "name-column--cell",
    },
    {
      field: "reviews",
      headerName: "Reviews",
      flex: 1,
      cellClassName: "name-column--cell",
    },
    {
      field: "listingAge",
      headerName: "Listing Age",
      flex: 1,
      cellClassName: "name-column--cell",
    },
    {
      field: "favorites",
      headerName: "Favorites",
      flex: 1,
      cellClassName: "name-column--cell",
    },
    {
      field: "avgReviews",
      headerName: "Avg Reviews",
      flex: 1,
      cellClassName: "name-column--cell",
    },
    {
      field: "views",
      headerName: "Views",
      flex: 1,
      cellClassName: "name-column--cell",
    },
    {
      field: "category",
      headerName: "Category",
      flex: 1,
      cellClassName: "name-column--cell",
    },
    {
      field: "shopAge",
      headerName: "Shop Age",
      flex: 1,
      cellClassName: "name-column--cell",
    },
    {
      field: "visibilityScore",
      headerName: "Visibility Score",
      flex: 1,
      cellClassName: "name-column--cell",
    },
    {
      field: "conversionRate",
      headerName: "Conversion Rate",
      flex: 1,
      cellClassName: "name-column--cell",
    },
    {
      field: "totalShopSales",
      headerName: "Total Shop Sales",
      flex: 1,
      cellClassName: "name-column--cell",
    },
  ];

  return (
    <div style={{margin: "20px", display: 'flex',
    flexDirection: 'column',
    overflowX: 'scroll', }}>
      <Box
        m="40px 0 0 0"
        width="100%"
        height="75vh"
        display= 'flex'
        flexDirection= 'column'
        overflowX= 'scroll'
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
          rows={mockDataTeam}
          columns={columns}
          slots={{
            toolbar: GridToolbar,
          }}
          initialState={{
            ...mockDataTeam.initialState,
            pagination: {
              ...mockDataTeam.initialState?.pagination,
              paginationModel: {
                pageSize: 25,
                /* page: 0 // default value will be used if not passed */
              },
            },
          }}
        />
      </Box>
    </div>
  );
}
