import { Box, Button, TextField, Typography } from "@mui/material";
import { Formik } from "formik";
import * as yup from "yup";
import useMediaQuery from "@mui/material/useMediaQuery";
import Header from "../../components/Header";
import Sidebar from "../global/Sidebar";

const Generator = () => {
  const isNonMobile = useMediaQuery("(min-width:600px)");

  const handleFormSubmit = (values) => {
    console.log(values);
  };

  const inputStyles = {
    backgroundColor: "white",
    color: "black",
    borderRadius: "10px",
  };

  const inputStyles1 = {
    backgroundColor: "white",
    height: "30vh",
    color: "black",
    borderRadius: "10px",
    display: "flex",
    flexDirection: "column",
    justifyContent: "flex-start",
  };

  const inputLabelStyles = {
    backgroundColor: "white",
    color: "black",
  };

  return (
    <Box display="grid" gridTemplateColumns="repeat(15, 1fr)">
      <Box gridColumn="span 2">
        <Sidebar />
      </Box>
      <Box gridColumn="span 13"height="100vh">
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
        <Box mt="-30vh"  pt="10vh" pl="10%" pr="10%" >
        <Header
          title="Listing Generator"
          subtitle="Etsy Description Generatpr, AI Written, SEO Optimized Description with One Click."
        />

        <Formik
          onSubmit={handleFormSubmit}
          initialValues={initialValues}
          validationSchema={checkoutSchema}
        >
          {({
            values,
            errors,
            touched,
            handleBlur,
            handleChange,
            handleSubmit,
          }) => (
            <form onSubmit={handleSubmit}>
              <Box
                display="grid"
                gridTemplateColumns="repeat(4, minmax(0, 1fr))"
                sx={{
                  "& > div": { gridColumn: isNonMobile ? undefined : "span 4" },
                }}
              >
                <Typography gridColumn="span 2" variant="h5" color="black" mt="2vh" mb="2vh">
                  Product Title
                </Typography>
                <TextField
                  fullWidth
                  variant="outlined"
                  type="text"
                  label="title"
                  onBlur={handleBlur}
                  onChange={handleChange}
                  value={values.email}
                  name="email"
                  InputProps={{ style: inputStyles }}
                  InputLabelProps={{ style: inputLabelStyles }}
                  // error={!!touched.email && !!errors.email}
                  // helperText={touched.email && errors.email}
                  sx={{
                    gridColumn: "span 4",
                  }}
                />
                <Typography gridColumn="span 2" variant="h5" color="black" mt="4vh" mb="2vh">
                  Product Tags
                </Typography>
                <TextField
                  fullWidth
                  variant="outlined"
                  type="text"
                  label="Tags"
                  onBlur={handleBlur}
                  onChange={handleChange}
                  value={values.contact}
                  name="contact"
                  multiline
                  rows={10}
                  InputProps={{ style: inputStyles1 }}
                  InputLabelProps={{ style: inputLabelStyles }}
                  // error={!!touched.contact && !!errors.contact}
                  // helperText={touched.contact && errors.contact}
                  sx={{ gridColumn: "span 4" }}
                />
              </Box>
              <Box display="flex" justifyContent="center" mt="20px">
                <Button type="submit" color="secondary" variant="contained">
                  Generate
                </Button>
              </Box>
            </form>
          )}
        </Formik>
        </Box>
      </Box>
    </Box>
  );
};

const phoneRegExp =
  /^((\+[1-9]{1,4}[ -]?)|(\([0-9]{2,3}\)[ -]?)|([0-9]{2,4})[ -]?)*?[0-9]{3,4}[ -]?[0-9]{3,4}$/;

const checkoutSchema = yup.object().shape({
  firstName: yup.string().required("required"),
  lastName: yup.string().required("required"),
  email: yup.string().email("invalid email").required("required"),
  contact: yup
    .string()
    .matches(phoneRegExp, "Phone number is not valid")
    .required("required"),
  address1: yup.string().required("required"),
  address2: yup.string().required("required"),
});
const initialValues = {
  firstName: "",
  lastName: "",
  email: "",
  contact: "",
  address1: "",
  address2: "",
};

export default Generator;
