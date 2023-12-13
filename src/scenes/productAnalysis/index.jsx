import * as React from "react";
import { useState } from "react";
import { DataGrid, GridToolbar } from "@mui/x-data-grid";
import { tokens } from "../../theme";
import { mockDataTeam } from "../../data/mockData";
import { IconButton, Box, useTheme, Button, Typography } from "@mui/material";
import LockIcon from "@mui/icons-material/Lock";
import Sidebar from "../global/Sidebar1";
import Topbar from "../../scenes/global/Topbar";
import Sidebar1 from "../global/Sidebar";
import InputBase from "@mui/material/InputBase";
import SearchIcon from "@mui/icons-material/Search";

export default function ColumnSelectorGrid() {
  const [selectedRow, setSelectedRow] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const columns = [
    {
      field: "photo",
      headerName: "Photo",
      headerAlign: "left",
      cellClassName: "name-column--cell",
      width: 100,
      renderCell: ({ row: { access } }) => {
        return (
          <Box
            // width="60%"
            m="0 auto"
            // p="5px"
            display="flex"
            justifyContent="left"
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
      width: 150,
      cellClassName: "name-column--cell",
    },
    {
      field: "price",
      headerName: "Price",
      width: 100,
      cellClassName: "name-column--cell",
    },
    {
      field: "moRevenue",
      headerName: "Mo.Revenue",
      width: 100,
      cellClassName: "name-column--cell",
      renderCell: ({ row: { access } }) => {
        return <LockIcon fontSize="small" color="secondary" />;
      },
    },
    {
      field: "totalSales",
      headerName: "Total Sales",
      width: 100,
      cellClassName: "name-column--cell",
      renderCell: ({ row: { access } }) => {
        return <LockIcon fontSize="small" color="secondary" />;
      },
    },
    {
      field: "reviews",
      headerName: "Reviews",
      width: 150,
      cellClassName: "name-column--cell",
    },
    {
      field: "listingAge",
      headerName: "Listing Age",
      width: 150,
      cellClassName: "name-column--cell",
    },
    {
      field: "favorites",
      headerName: "Favorites",
      width: 150,
      cellClassName: "name-column--cell",
    },
    {
      field: "avgReviews",
      headerName: "Avg Reviews",
      width: 150,
      cellClassName: "name-column--cell",
    },
    {
      field: "views",
      headerName: "Views",
      width: 150,
      cellClassName: "name-column--cell",
    },
    {
      field: "category",
      headerName: "Category",
      width: 150,
      cellClassName: "name-column--cell",
    },
    {
      field: "shopAge",
      headerName: "Shop Age",
      width: 150,
      cellClassName: "name-column--cell",
    },
    {
      field: "visibilityScore",
      headerName: "Visibility Score",
      width: 150,
      cellClassName: "name-column--cell",
      renderCell: ({ row: { access } }) => {
        return <LockIcon fontSize="small" color="secondary" />;
      },
    },
    {
      field: "conversionRate",
      headerName: "Conversion Rate",
      width: 150,
      cellClassName: "name-column--cell",
      renderCell: ({ row: { access } }) => {
        return <LockIcon fontSize="small" color="secondary" />;
      },
    },
    {
      field: "totalShopSales",
      headerName: "Total Shop Sales",
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
    <Box display="grid" gridTemplateColumns="repeat(15, 1fr)">
      <Box gridColumn="span 2">
        <Sidebar1 />
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
            <DataGrid
              rows={mockDataTeam}
              columns={columns}
              slots={{
                toolbar: GridToolbar,
              }}
              onRowClick={handleRowClick}
            />
          </Box>
        </Box>
        {isModalOpen && <Sidebar rowData={selectedRow} onClose={closeModal} />}
      </Box>
    </Box>
  );
}
