import * as React from "react";
import { useState } from "react";
import { DataGrid, GridToolbar } from "@mui/x-data-grid";
import { tokens } from "../../theme";
import { mockDataTeam } from "../../data/mockData";
import { Box, useTheme, Button } from "@mui/material";
import LockIcon from "@mui/icons-material/Lock";
import Sidebar from "../global/Sidebar1";
import Topbar from "../../scenes/global/Topbar";

export default function ColumnSelectorGrid() {
  const [selectedRow, setSelectedRow] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const columns = [
    {
      field: "photo",
      headerName: "Photo",
      headerAlign: "center",
      cellClassName: "name-column--cell",
      width: 50,
      renderCell: ({ row: { access } }) => {
        return (
          <Box
            // width="60%"
            m="0 auto"
            // p="5px"
            display="flex"
            justifyContent="center"
          >
            <img
              alt="profile-user"
              width="40"
              height="40"
              src={`https://images.unsplash.com/photo-1615572359976-1fe39507ed7b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTh8fGJsYWNrJTIwbWFufGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60`}
              style={{ cursor: "pointer", objectFit: "cover" }}
            />
          </Box>
        );
      },
    },
    {
      field: "name",
      headerName: "Name",
      flex: 1,
      cellClassName: "name-column--cell",
      width: 100,
    },
    {
      field: "productName",
      headerName: "Product Name",
      headerAlign: "left",
      width: 150,
      align: "left",
      cellClassName: "name-column--cell",
    },
    {
      field: "shopName",
      headerName: "Shop Name",
      flex: 1,
      width: 150,
      cellClassName: "name-column--cell",
    },
    {
      field: "price",
      headerName: "Price",
      flex: 1,
      width: 150,
      cellClassName: "name-column--cell",
    },
    {
      field: "moRevenue",
      headerName: "Mo.Revenue",
      flex: 1,
      width: 150,
      cellClassName: "name-column--cell",
      renderCell: ({ row: { access } }) => {
        return <LockIcon fontSize="small" color="secondary" />;
      },
    },
    {
      field: "totalSales",
      headerName: "Total Sales",
      flex: 1,
      width: 150,
      cellClassName: "name-column--cell",
      renderCell: ({ row: { access } }) => {
        return <LockIcon fontSize="small" color="secondary" />;
      },
    },
    {
      field: "reviews",
      headerName: "Reviews",
      flex: 1,
      width: 150,
      cellClassName: "name-column--cell",
    },
    {
      field: "listingAge",
      headerName: "Listing Age",
      flex: 1,
      width: 150,
      cellClassName: "name-column--cell",
    },
    {
      field: "favorites",
      headerName: "Favorites",
      flex: 1,
      width: 150,
      cellClassName: "name-column--cell",
    },
    {
      field: "avgReviews",
      headerName: "Avg Reviews",
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
    {
      field: "category",
      headerName: "Category",
      flex: 1,
      width: 150,
      cellClassName: "name-column--cell",
    },
    {
      field: "shopAge",
      headerName: "Shop Age",
      flex: 1,
      width: 150,
      cellClassName: "name-column--cell",
    },
    {
      field: "visibilityScore",
      headerName: "Visibility Score",
      flex: 1,
      width: 150,
      cellClassName: "name-column--cell",
      renderCell: ({ row: { access } }) => {
        return <LockIcon fontSize="small" color="secondary" />;
      },
    },
    {
      field: "conversionRate",
      headerName: "Conversion Rate",
      flex: 1,
      width: 150,
      cellClassName: "name-column--cell",
      renderCell: ({ row: { access } }) => {
        return <LockIcon fontSize="small" color="secondary" />;
      },
    },
    {
      field: "totalShopSales",
      headerName: "Total Shop Sales",
      flex: 1,
      width: 150,
      cellClassName: "name-column--cell",
    },
  ];

  const handleRowClick = (params) => {
    setSelectedRow(params.row);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <Box p="20px" height="100vh">
      <Topbar></Topbar>
      <Box
        m="40px 0 0 0"
        height="75vh"
        sx={{
          "& .MuiDataGrid-root": {
            border: "none !important",
          },
          "& .MuiDataGrid-cell": {
            border: "none !important",
          },
          "& .name-column--cell": {
            color: colors.primary[500],
            fontSize: "16px",
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
          onRowClick={handleRowClick}
        />
      </Box>
      {isModalOpen && <Sidebar rowData={selectedRow} onClose={closeModal} />}
      
    </Box>
  );
}
