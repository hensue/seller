import { Box, Button, IconButton, Typography, useTheme } from "@mui/material";
import { useState } from "react";
import { tokens } from "../../theme";
import { mockTransactions } from "../../data/mockData";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import DownloadOutlinedIcon from "@mui/icons-material/DownloadOutlined";
import EmailIcon from "@mui/icons-material/Email";
import PointOfSaleIcon from "@mui/icons-material/PointOfSale";
import PersonAddIcon from "@mui/icons-material/PersonAdd";
import TrafficIcon from "@mui/icons-material/Traffic";
import HolidayVillage from "@mui/icons-material/HolidayVillage";
import useMediaQuery from "@mui/material/useMediaQuery";
import HeartBrokenIcon from "@mui/icons-material/HeartBroken";
import TrackChangesIcon from "@mui/icons-material/TrackChanges";
import Header from "../../components/Header";
import LineChart from "../../components/LineChart";
import GeographyChart from "../../components/GeographyChart";
import BarChart from "../../components/BarChart";
import StatBox from "../../components/StatBox";
import ProgressCircle from "../../components/ProgressCircle";
import Sidebar from "../global/Sidebar";
import Topbar from "../global/Topbar";

const Dashboard = () => {
  const isNonMobile = useMediaQuery("(min-width:600px)");
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const [isSidebar, setIsSidebar] = useState(true);

  return (
    <Box display="grid" gridTemplateColumns="repeat(15, 1fr)">
      <Box gridColumn="span 2">
        <Sidebar isSidebar={isSidebar} />
      </Box>

      {isNonMobile ? (
        <Box gridColumn="span 13">
          <Box
            height="35vh"
            sx={{
              backgroundImage:
                'url("https://app.everbee.io/ligthTheme-bg-img.png")',
              backgroundSize: "cover",
              backgroundRepeat: "no-repeat",
              backgroundPosition: "center",
            }}
          >
            <Topbar></Topbar>
          </Box>

          <Box
            marginTop="-15vh"
            gridColumn="span 13"
            p="20px"
            display="grid"
            gridTemplateColumns="repeat(15, 1fr)"
            gridAutoRows="20vh"
            gap="2%"
          >
            <Box
              gridColumn="span 3"
              backgroundColor={colors.primary[50]}
              padding="1.5rem"
              borderRadius={5}
            >
              <img src="https://app.everbee.io/cardIcon1.png"></img>
              <Typography pt="1vh" pb="1vh" color="black" fontSize="1.25rem">
                Gross revenue
              </Typography>
              <Typography color="black">- - -</Typography>
            </Box>
            <Box
              gridColumn="span 3"
              backgroundColor={colors.primary[50]}
              padding="1.5rem"
              borderRadius={5}
            >
              <img src="https://app.everbee.io/aov.png"></img>
              <Typography pt="1vh" pb="1vh" color="black" fontSize="1.25rem">
                Avg. Order Value
              </Typography>
              <Typography color="black">- - -</Typography>
            </Box>
            <Box
              gridColumn="span 3"
              backgroundColor={colors.primary[50]}
              padding="1.5rem"
              borderRadius={5}
            >
              <img src="https://app.everbee.io/totalOrderLight.png"></img>
              <Typography pt="1vh" pb="1vh" color="black" fontSize="1.25rem">
                Total Orders
              </Typography>
              <Typography color="black">- - -</Typography>
            </Box>
            <Box
              gridColumn="span 3"
              backgroundColor={colors.primary[50]}
              padding="1.5rem"
              borderRadius={5}
            >
              <img src="https://app.everbee.io/lvtLight.png"></img>
              <Typography pt="1vh" pb="1vh" color="black" fontSize="1.25rem">
                Lifetime Value
              </Typography>
              <Typography color="black">- - -</Typography>
            </Box>
            <Box
              gridColumn="span 3"
              backgroundColor={colors.primary[50]}
              padding="1.5rem"
              borderRadius={5}
            >
              <img src="https://app.everbee.io/shopRankLight.png"></img>
              <Typography pt="1vh" pb="1vh" color="black" fontSize="1.25rem">
                Repeat Rate
              </Typography>
              <Typography color="black">- - -</Typography>
            </Box>

            <Box
              gridColumn="span 15"
              gridRow="span 3"
              backgroundColor={colors.primary[50]}
              borderRadius={5}
            >
              <Box
                mt="30vh"
                p="0 2vh"
                display="flex "
                justifyContent="center"
                alignItems="center"
              >
                <Box>
                  <Typography
                    variant="h5"
                    fontWeight="600"
                    textAlign="center"
                    color={colors.grey[900]}
                  >
                    No shop data found! Connect your Etsy seller account to see
                    your insights
                  </Typography>
                </Box>
              </Box>
              <Box display="flex" justifyContent="center" mt="3vh">
                <Button
                  type="submit"
                  style={{ backgroundColor: "#b1f0bd" }}
                  variant="contained"
                >
                  <Typography
                    variant="h5"
                    fontWeight="600"
                    textAlign="center"
                    color={colors.grey[900]}
                  >
                    {" "}
                    Connect
                  </Typography>
                </Button>
              </Box>
            </Box>

            <Box
              gridColumn="span 10"
              gridRow="span 6"
              backgroundColor={colors.primary[50]}
              borderRadius={5}
            >
              <Box
                mt="3vh"
                p="0 30px"
                display="flex "
                justifyContent="space-between"
                alignItems="center"
              >
                <Typography
                  variant="h5"
                  fontWeight="600"
                  color={colors.grey[900]}
                >
                  Etsy News
                </Typography>
                <Typography
                  variant="h3"
                  fontWeight="bold"
                  color={colors.greenAccent[500]}
                ></Typography>
              </Box>

              <Box
                gridColumn="span 10"
                mt="5vh"
                p="0 30px"
                display="flex"
                justifyContent="space-start"
              >
                <img
                  gridColumn="span 2"
                  alt="profile-user"
                  width="100"
                  height="100"
                  src="https://i.etsystatic.com/inv/24d616/4315662966/inv_609x512.4315662966_nk31nmrf.jpg?version=0"
                  style={{
                    cursor: "pointer",
                    objectFit: "cover",
                    borderRadius: "5%",
                  }}
                />
                <Box p="2px 3%">
                  <Typography
                    gridColumn="span 8"
                    variant="h6"
                    fontSize="12px"
                    fontWeight="600"
                    color={colors.grey[300]}
                  >
                    4 November 2022
                  </Typography>
                  <Typography
                    gridColumn="span 8"
                    variant="h6"
                    fontSize="12px"
                    fontWeight="600"
                    color={colors.grey[800]}
                  >
                    Intellectual Property Rights and Resources for EU Sellers
                  </Typography>
                  <Typography
                    gridColumn="span 8"
                    variant="h6"
                    fontSize="12px"
                    fontWeight="600"
                    color={colors.grey[500]}
                  >
                    Insights from the European Union Intellectual Property
                    Office, along with the relevant tools and activities
                    intended for small businesses in the EU.
                  </Typography>
                  <Typography
                    gridColumn="span 8"
                    variant="h6"
                    fontSize="12px"
                    fontWeight="600"
                    color={colors.blueAccent[400]}
                  >
                    Read more
                  </Typography>
                </Box>
              </Box>
              <Box
                gridColumn="span 10"
                mt="5vh"
                p="0 30px"
                display="flex"
                justifyContent="space-start"
              >
                <img
                  gridColumn="span 2"
                  alt="profile-user"
                  width="100"
                  height="100"
                  src="https://i.etsystatic.com/inv/d8b99a/4282407172/inv_609x512.4282407172_i96u0kcd.jpg?version=0"
                  style={{
                    cursor: "pointer",
                    objectFit: "cover",
                    borderRadius: "5%",
                  }}
                />
                <Box p="2px 3%">
                  <Typography
                    gridColumn="span 8"
                    variant="h6"
                    fontSize="12px"
                    fontWeight="600"
                    color={colors.grey[300]}
                  >
                    4 November 2022
                  </Typography>
                  <Typography
                    gridColumn="span 8"
                    variant="h6"
                    fontSize="12px"
                    fontWeight="600"
                    color={colors.grey[800]}
                  >
                    Intellectual Property Rights and Resources for EU Sellers
                  </Typography>
                  <Typography
                    gridColumn="span 8"
                    variant="h6"
                    fontSize="12px"
                    fontWeight="600"
                    color={colors.grey[500]}
                  >
                    Insights from the European Union Intellectual Property
                    Office, along with the relevant tools and activities
                    intended for small businesses in the EU.
                  </Typography>
                  <Typography
                    gridColumn="span 8"
                    variant="h6"
                    fontSize="12px"
                    fontWeight="600"
                    color={colors.blueAccent[400]}
                  >
                    Read more
                  </Typography>
                </Box>
              </Box>
              <Box
                gridColumn="span 10"
                mt="5vh"
                p="0 30px"
                display="flex"
                justifyContent="space-start"
              >
                <img
                  gridColumn="span 2"
                  alt="profile-user"
                  width="100"
                  height="100"
                  src="https://i.etsystatic.com/inv/24d616/4315662966/inv_609x512.4315662966_nk31nmrf.jpg?version=0"
                  style={{
                    cursor: "pointer",
                    objectFit: "cover",
                    borderRadius: "5%",
                  }}
                />
                <Box p="2px 3%">
                  <Typography
                    gridColumn="span 8"
                    variant="h6"
                    fontSize="12px"
                    fontWeight="600"
                    color={colors.grey[300]}
                  >
                    4 November 2022
                  </Typography>
                  <Typography
                    gridColumn="span 8"
                    variant="h6"
                    fontSize="12px"
                    fontWeight="600"
                    color={colors.grey[800]}
                  >
                    Intellectual Property Rights and Resources for EU Sellers
                  </Typography>
                  <Typography
                    gridColumn="span 8"
                    variant="h6"
                    fontSize="12px"
                    fontWeight="600"
                    color={colors.grey[500]}
                  >
                    Insights from the European Union Intellectual Property
                    Office, along with the relevant tools and activities
                    intended for small businesses in the EU.
                  </Typography>
                  <Typography
                    gridColumn="span 8"
                    variant="h6"
                    fontSize="12px"
                    fontWeight="600"
                    color={colors.blueAccent[400]}
                  >
                    Read more
                  </Typography>
                </Box>
              </Box>
              <Box
                gridColumn="span 10"
                mt="5vh"
                p="0 30px"
                display="flex"
                justifyContent="space-start"
              >
                <img
                  gridColumn="span 2"
                  alt="profile-user"
                  width="100"
                  height="100"
                  src="https://i.etsystatic.com/inv/d8b99a/4282407172/inv_609x512.4282407172_i96u0kcd.jpg?version=0"
                  style={{
                    cursor: "pointer",
                    objectFit: "cover",
                    borderRadius: "5%",
                  }}
                />
                <Box p="2px 3%">
                  <Typography
                    gridColumn="span 8"
                    variant="h6"
                    fontSize="12px"
                    fontWeight="600"
                    color={colors.grey[300]}
                  >
                    4 November 2022
                  </Typography>
                  <Typography
                    gridColumn="span 8"
                    variant="h6"
                    fontSize="12px"
                    fontWeight="600"
                    color={colors.grey[800]}
                  >
                    Intellectual Property Rights and Resources for EU Sellers
                  </Typography>
                  <Typography
                    gridColumn="span 8"
                    variant="h6"
                    fontSize="12px"
                    fontWeight="600"
                    color={colors.grey[500]}
                  >
                    Insights from the European Union Intellectual Property
                    Office, along with the relevant tools and activities
                    intended for small businesses in the EU.
                  </Typography>
                  <Typography
                    gridColumn="span 8"
                    variant="h6"
                    fontSize="12px"
                    fontWeight="600"
                    color={colors.blueAccent[400]}
                  >
                    Read more
                  </Typography>
                </Box>
              </Box>
              <Box
                gridColumn="span 10"
                mt="5vh"
                p="0 30px"
                display="flex"
                justifyContent="space-start"
              >
                <img
                  gridColumn="span 2"
                  alt="profile-user"
                  width="100"
                  height="100"
                  src="https://i.etsystatic.com/inv/24d616/4315662966/inv_609x512.4315662966_nk31nmrf.jpg?version=0"
                  style={{
                    cursor: "pointer",
                    objectFit: "cover",
                    borderRadius: "5%",
                  }}
                />
                <Box p="2px 3%">
                  <Typography
                    gridColumn="span 8"
                    variant="h6"
                    fontSize="12px"
                    fontWeight="600"
                    color={colors.grey[300]}
                  >
                    4 November 2022
                  </Typography>
                  <Typography
                    gridColumn="span 8"
                    variant="h6"
                    fontSize="12px"
                    fontWeight="600"
                    color={colors.grey[800]}
                  >
                    Intellectual Property Rights and Resources for EU Sellers
                  </Typography>
                  <Typography
                    gridColumn="span 8"
                    variant="h6"
                    fontSize="12px"
                    fontWeight="600"
                    color={colors.grey[500]}
                  >
                    Insights from the European Union Intellectual Property
                    Office, along with the relevant tools and activities
                    intended for small businesses in the EU.
                  </Typography>
                  <Typography
                    gridColumn="span 8"
                    variant="h6"
                    fontSize="12px"
                    fontWeight="600"
                    color={colors.blueAccent[400]}
                  >
                    Read more
                  </Typography>
                </Box>
              </Box>
              <Box
                gridColumn="span 10"
                mt="5vh"
                p="0 30px"
                display="flex"
                justifyContent="space-start"
              >
                <img
                  gridColumn="span 2"
                  alt="profile-user"
                  width="100"
                  height="100"
                  src="https://i.etsystatic.com/inv/d8b99a/4282407172/inv_609x512.4282407172_i96u0kcd.jpg?version=0"
                  style={{
                    cursor: "pointer",
                    objectFit: "cover",
                    borderRadius: "5%",
                  }}
                />
                <Box p="2px 3%">
                  <Typography
                    gridColumn="span 8"
                    variant="h6"
                    fontSize="12px"
                    fontWeight="600"
                    color={colors.grey[300]}
                  >
                    4 November 2022
                  </Typography>
                  <Typography
                    gridColumn="span 8"
                    variant="h6"
                    fontSize="12px"
                    fontWeight="600"
                    color={colors.grey[800]}
                  >
                    Intellectual Property Rights and Resources for EU Sellers
                  </Typography>
                  <Typography
                    gridColumn="span 8"
                    variant="h6"
                    fontSize="12px"
                    fontWeight="600"
                    color={colors.grey[500]}
                  >
                    Insights from the European Union Intellectual Property
                    Office, along with the relevant tools and activities
                    intended for small businesses in the EU.
                  </Typography>
                  <Typography
                    gridColumn="span 8"
                    variant="h6"
                    fontSize="12px"
                    fontWeight="600"
                    color={colors.blueAccent[400]}
                  >
                    Read more
                  </Typography>
                </Box>
              </Box>
            </Box>

            <Box
              gridColumn="span 5"
              gridRow="span 1"
              backgroundColor={colors.primary[50]}
              borderRadius={5}
            >
              <Box
                gridColumn="span 3"
                gridRow="span 2"
                backgroundColor={colors.primary[50]}
                overflow="auto"
                borderRadius={5}
                maxHeight="50vh"
                marginBottom="3vh"
              >
                <img
                  gridColumn="span 2"
                  alt="profile-user"
                  width="100%"
                  height="300px"
                  src="https://i.etsystatic.com/inv/d8b99a/4282407172/inv_609x512.4282407172_i96u0kcd.jpg?version=0"
                  style={{
                    cursor: "pointer",
                    objectFit: "cover",
                    borderRadius: "5%",
                  }}
                />
                <Box
                  display="flex"
                  justifyContent="space-between"
                  alignItems="center"
                  p="20px"
                >
                  <Box>
                    <Typography
                      color={colors.primary[600]}
                      variant="h5"
                      fontWeight="600"
                    >
                      Watch how EverBee’s Dashboard will help Increase your
                      product’s conversion rate.
                    </Typography>
                  </Box>
                  <Box
                    backgroundColor="#b1f0bd"
                    p="5px 10px"
                    borderRadius="4px"
                    color="black"
                    borderColor={colors.primary[800]}
                  >
                    Watch
                  </Box>
                </Box>
              </Box>
              <Box
                gridColumn="span 3"
                gridRow="span 2"
                backgroundColor={colors.primary[50]}
                overflow="auto"
                borderRadius={5}
                maxHeight="50vh"
              >
                <Box
                  display="flex"
                  justifyContent="space-between"
                  alignItems="center"
                  colors={colors.grey[100]}
                  p="20px"
                >
                  <Typography
                    color={colors.grey[900]}
                    variant="h5"
                    fontWeight="600"
                  >
                    Upcoming Holidays
                  </Typography>
                </Box>
                {mockTransactions.map((transaction, i) => (
                  <Box
                    key={`${transaction.txId}-${i}`}
                    display="flex"
                    justifyContent="space-between"
                    alignItems="center"
                    p="20px"
                  >
                    <Box display="flex">
                      <HolidayVillage
                        style={{ color: "black" }}
                      ></HolidayVillage>
                      <Box>
                        <Typography
                          color={colors.primary[800]}
                          variant="h5"
                          fontWeight="600"
                        >
                          {transaction.txId}
                        </Typography>
                        <Typography color={colors.grey[300]}>
                          {transaction.date}
                        </Typography>
                      </Box>
                    </Box>

                    <Box
                      backgroundColor="#b1f0bd"
                      p="5px 10px"
                      borderRadius="4px"
                      color="black"
                      borderColor={colors.primary[800]}
                    >
                      View Products
                    </Box>
                  </Box>
                ))}
              </Box>
            </Box>
          </Box>
        </Box>
      ) : (
        <Box
          gridColumn="span 13"
          p="20px"
          display="grid"
          gridTemplateColumns="repeat(10, 1fr)"
          gridAutoRows="140px"
          gap="20px"
        >
          <Box
            gridColumn="span 10"
            gridRow="span 2"
            backgroundColor={colors.blueAccent[600]}
            borderRadius={5}
          >
            <Typography
              variant="h5"
              fontWeight="600"
              sx={{ padding: "30px 30px 0 30px" }}
            >
              Sales Quantity
            </Typography>
            <Box height="250px" mt="-20px">
              <BarChart isDashboard={true} />
            </Box>
          </Box>
          <Box
            gridColumn="span 5"
            backgroundColor={colors.blueAccent[600]}
            display="flex"
            alignItems="center"
            justifyContent="center"
            borderRadius={5}
          >
            <StatBox
              title="12,361"
              subtitle="VIEWS"
              progress="0.75"
              increase="+14%"
              icon={
                <EmailIcon
                  sx={{ color: colors.greenAccent[600], fontSize: "26px" }}
                />
              }
            />
          </Box>
          <Box
            gridColumn="span 5"
            backgroundColor={colors.blueAccent[700]}
            display="flex"
            alignItems="center"
            justifyContent="center"
            borderRadius={5}
          >
            <StatBox
              title="431,225"
              subtitle="FAVORITES"
              progress="0.50"
              increase="+21%"
              icon={
                <PointOfSaleIcon
                  sx={{ color: colors.greenAccent[600], fontSize: "26px" }}
                />
              }
            />
          </Box>
          <Box
            gridColumn="span 10"
            gridRow="span 2"
            backgroundColor={colors.blueAccent[500]}
            borderRadius={5}
          >
            <Box
              mt="25px"
              p="0 30px"
              display="flex "
              justifyContent="space-between"
              alignItems="center"
            >
              <Box>
                <Typography
                  variant="h5"
                  fontWeight="600"
                  color={colors.grey[100]}
                >
                  Google Keyword Analysis
                </Typography>
                <Typography
                  variant="h3"
                  fontWeight="bold"
                  color={colors.greenAccent[500]}
                >
                  {/* $59,342.32 */}
                </Typography>
              </Box>
              <Box>
                <IconButton>
                  <DownloadOutlinedIcon
                    sx={{ fontSize: "26px", color: colors.greenAccent[500] }}
                  />
                </IconButton>
              </Box>
            </Box>
            <Box height="250px" m="-20px 0 0 0">
              <LineChart isDashboard={true} />
            </Box>
          </Box>
        </Box>
      )}
    </Box>
  );
};

export default Dashboard;
