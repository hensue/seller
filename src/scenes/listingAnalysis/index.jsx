import React, { useState } from "react";
import { DataGrid, GRID_STRING_COL_DEF } from "@mui/x-data-grid";
import { SparkLineChart } from "@mui/x-charts/SparkLineChart";
import { tokens } from "../../theme";
import { Box, useTheme, Button } from "@mui/material";
import { mockListing } from "../../data/mockData";
import Topbar from "../../scenes/global/Topbar";

import { Modal, ModalBody } from "react-modern-modal";

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
    flex: 0.5,
  },
  {
    field: "name",
    headerName: "TAG",
    width: 250,
    cellClassName: "name-column--cell",
    flex: 1,
  },

  {
    field: "monthlyDownloadsBar",
    ...sparklineColumnType,
    headerName: "SEARCH TREND",
    renderCell: (params) => <GridSparklineCell {...params} plotType="bar" />,
    width: 250,
    valueGetter: (params) => params.row.monthlyDownloads,
    cellClassName: "name-column--cell",
    flex: 1,
  },
  {
    field: "search",
    headerName: "AVG SEARCHES (USA)",
    // type: 'number',
    // valueGetter: (params) =>
    //   params.row.monthlyDownloads[params.row.monthlyDownloads.length - 1],
    renderCell: (params) => {
      console.log(params);
      const colors = ["green", "yellow", "red", "#ff7300", "#00ff63"];
      const color = colors[Math.floor(Math.random() * 5)];
      const percent = Math.floor(Math.random() * 100);
      return (
        <div
          style={{
            backgroundColor: "#ddd9d9",
            borderRadius: 5,
            width: "100%",
            height: "20px",
            position: "relative",
          }}
        >
          <div
            style={{
              backgroundColor: color,
              borderRadius: 5,
              width: `${percent}%`,
              height: "20px",
            }}
          >
            <span
              style={{
                color: "white",
                position: "absolute",
                left: "50%",
                top: "50%",
                transform: "translate(-50%, -50%)",
              }}
            >
              {params.formattedValue}
            </span>
          </div>
        </div>
      );
    },
    width: 200,
    cellClassName: "name-column--cell",
    flex: 1,
  },
  {
    field: "clicks",
    headerName: "AVG CLICKS (USA)",
    width: 200,
    flex: 1,
    cellClassName: "name-column--cell",
    renderCell: (params) => {
      console.log(params);
      const colors = ["green", "yellow", "red", "#ff7300", "#00ff63"];
      const color = colors[Math.floor(Math.random() * 5)];
      const percent = Math.floor(Math.random() * 100);
      return (
        <div
          style={{
            backgroundColor: "#ddd9d9",
            borderRadius: 5,
            width: "100%",
            height: "20px",
            position: "relative",
          }}
        >
          <div
            style={{
              backgroundColor: color,
              borderRadius: 5,
              width: `${percent}%`,
              height: "20px",
            }}
          >
            <span
              style={{
                color: "white",
                position: "absolute",
                left: "50%",
                top: "50%",
                transform: "translate(-50%, -50%)",
              }}
            >
              {params.formattedValue}
            </span>
          </div>
        </div>
      );
    },
  },
  {
    field: "ctr",
    headerName: "AVG CTR (USA)",
    renderCell: (params) => {
      console.log(params);
      const colors = ["green", "yellow", "red", "#ff7300", "#00ff63"];
      const color = colors[Math.floor(Math.random() * 5)];
      const percent = Math.floor(Math.random() * 100);
      return (
        <div
          style={{
            backgroundColor: "#ddd9d9",
            borderRadius: 5,
            width: "100%",
            height: "20px",
            position: "relative",
          }}
        >
          <div
            style={{
              backgroundColor: color,
              borderRadius: 5,
              width: `${percent}%`,
              height: "20px",
            }}
          >
            <span
              style={{
                color: "white",
                position: "absolute",
                left: "50%",
                top: "50%",
                transform: "translate(-50%, -50%)",
              }}
            >
              {params.formattedValue}
            </span>
          </div>
        </div>
      );
    },
    width: 200,
    cellClassName: "name-column--cell",
    flex: 1,
  },
  {
    field: "etsy",
    headerName: "ETSY COMP (USA)",
    width: 200,
    flex: 1,
    cellClassName: "name-column--cell",
    renderCell: (params) => {
      console.log(params);
      const colors = ["green", "red", "#ff7300", "#00ff63"];
      const color = colors[Math.floor(Math.random() * 4)];
      const percent = Math.floor(Math.random() * 100);
      return (
        <div
          style={{
            backgroundColor: "#ddd9d9",
            borderRadius: 5,
            width: "100%",
            height: "20px",
            position: "relative",
          }}
        >
          <div
            style={{
              backgroundColor: color,
              borderRadius: 5,
              width: `${percent}%`,
              height: "20px",
            }}
          >
            <span
              style={{
                color: "white",
                position: "absolute",
                left: "50%",
                top: "50%",
                transform: "translate(-50%, -50%)",
              }}
            >
              {params.formattedValue}
            </span>
          </div>
        </div>
      );
    },
  },
];

export default function Contacts() {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);

  const [isOpen, setIsOpen] = useState(false);

  const handleOpen = () => setIsOpen(true);
  const handleClose = () => setIsOpen(false);

  return (
    <Box p="20px" height="100vh">
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
        <DataGrid
          rows={mockListing}
          columns={columns}
          onRowClick={handleOpen}
        />
      </Box>
      <Modal size="lg" isOpen={isOpen} onClose={handleClose}>
        {/* <ModalHeader>Sign Up</ModalHeader> */}
        <ModalBody style={{ backgroundColor: "#ddd9d9" }}>
          <div style={{ display: "flex" }}>
            <div
              style={{
                width: 250,
                height: 300,
                backgroundColor: "#76d4ac",
                borderRadius: 5,
              }}
            >
              <div
                style={{
                  display: "flex",
                  justifyContent: "center",
                  marginBottom: 20
                }}
              >
                <img
                  alt="product"
                  src="https://registry.globalcarbonstandard.org/rect.png"
                  width="300px"
                  height="200px"
                  style={{ borderRadius: 50 }}
                />
              </div>
              <div style={{display:'flex', justifyContent:'center',marginTop:'10px'}}>
                <Button style={{marginRight:'10px', borderRadius:'10px',backgroundColor:'white'}} type="submit" color="secondary" variant="contained">
                  Etsy
                </Button>
                <Button style={{ backgroundColor:'white',borderRadius:'10px',}} type="submit" color="secondary" variant="contained">
                  Create
                </Button>
              </div>
            </div>
            <div
              style={{
                width: 250,
                height: 300,
                marginLeft: 10,
                marginRight: 10,
                padding: 10,
                backgroundColor: "white",
                borderRadius: 5,
              }}
            >
              <h2 style={{ color: "#5368e0" }}>Listing Metrics</h2>
              <p
                style={{
                  paddingTop: 10,
                  color: "black",
                  display: "flex",
                  justifyContent: "space-between",
                  borderBottom: "1px #f0e8e8 solid",
                }}
              >
                <span>Estimated Sales</span>
                <span>637</span>
              </p>
              <p
                style={{
                  color: "black",
                  paddingTop: 10,
                  display: "flex",
                  justifyContent: "space-between",
                  borderBottom: "1px #f0e8e8 solid",
                }}
              >
                <span>Estimated Revenue</span>
                <span>$6,994</span>
              </p>
              <p
                style={{
                  color: "black",
                  paddingTop: 10,
                  display: "flex",
                  justifyContent: "space-between",
                  borderBottom: "1px #f0e8e8 solid",
                }}
              >
                <span>Estimated Conversion Rate</span>
                <span>2.51%</span>
              </p>
              <p
                style={{
                  color: "black",
                  paddingTop: 10,
                  display: "flex",
                  justifyContent: "space-between",
                  borderBottom: "1px #f0e8e8 solid",
                }}
              >
                <span>Daily Views</span>
                <span>241</span>
              </p>
              <p
                style={{
                  color: "black",
                  paddingTop: 10,
                  display: "flex",
                  justifyContent: "space-between",
                  borderBottom: "1px #f0e8e8 solid",
                }}
              >
                <span>Views</span>
                <span>25,412</span>
              </p>
              <p
                style={{
                  color: "black",
                  paddingTop: 10,
                  display: "flex",
                  justifyContent: "space-between",
                  borderBottom: "1px #f0e8e8 solid",
                }}
              >
                <span>Favorites</span>
                <span>225</span>
              </p>
              <p
                style={{
                  color: "black",
                  paddingTop: 10,
                  display: "flex",
                  justifyContent: "space-between",
                  borderBottom: "1px #f0e8e8 solid",
                }}
              >
                <span>Quantity Available</span>
                <span>13,321</span>
              </p>
              <p
                style={{
                  color: "black",
                  paddingTop: 10,
                  display: "flex",
                  justifyContent: "space-between",
                  borderBottom: "1px #f0e8e8 solid",
                }}
              >
                <span>Visibility</span>
                <span>100%</span>
              </p>
            </div>
            <div
              style={{
                width: 250,
                height: 300,
                padding: 10,
                backgroundColor: "white",
                borderRadius: 5,
              }}
            >
              <h2 style={{ color: "#5368e0  " }}>History</h2>
              <p
                style={{
                  paddingTop: 10,
                  color: "black",
                  display: "flex",
                  justifyContent: "space-between",
                  borderBottom: "1px #f0e8e8 solid",
                }}
              >
                <span>Listing Age</span>
                <span>106 days</span>
              </p>
              <p
                style={{
                  color: "black",
                  paddingTop: 10,
                  display: "flex",
                  justifyContent: "space-between",
                  borderBottom: "1px #f0e8e8 solid",
                }}
              >
                <span>Created</span>
                <span>23 Aug, 2023</span>
              </p>
              <p
                style={{
                  color: "black",
                  paddingTop: 10,
                  display: "flex",
                  justifyContent: "space-between",
                  borderBottom: "1px #f0e8e8 solid",
                }}
              >
                <span>Last Updated</span>
                <span>07 Dec, 2024</span>
              </p>
              <p
                style={{
                  color: "black",
                  paddingTop: 10,
                  display: "flex",
                  justifyContent: "space-between",
                  borderBottom: "1px #f0e8e8 solid",
                }}
              >
                <span>Expiry</span>
                <span>07 Apir, 2024</span>
              </p>
            </div>
          </div>
        </ModalBody>
      </Modal>
    </Box>
  );
}
