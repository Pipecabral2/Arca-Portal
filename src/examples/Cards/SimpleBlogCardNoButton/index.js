/**
=========================================================
* Material Dashboard 2 React - v2.1.0
=========================================================

* Product Page: https://www.creative-tim.com/product/material-dashboard-react
* Copyright 2022 Creative Tim (https://www.creative-tim.com)

Coded by www.creative-tim.com

 =========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.
*/

// react-router components

// prop-types is a library for typechecking of props
import PropTypes from "prop-types";

// @mui material components
import Card from "@mui/material/Card";
import Divider from "@mui/material/Divider";

// Material Dashboard 2 React components
import MDBox from "components/MDBox";
import MDTypography from "components/MDTypography";

function SimpleBlogCardNoButton({ image, title, description }) {
  return (
    <Card sx={{ height: "100%" }}>
      <MDBox position="relative" borderRadius="lg" mt={-3} mx={2}>
        <MDBox
          component="img"
          src={image}
          alt={title}
          borderRadius="lg"
          shadow="md"
          width="100%"
          height="12.5rem"
          position="relative"
          zIndex={1}
        />
        <MDBox
          borderRadius="lg"
          shadow="md"
          width="100%"
          height="12.75rem"
          position="absolute"
          left={0}
          top="3%"
          sx={{
            backgroundImage: `url(${image})`,
            transform: "scale(0.94)",
            filter: "blur(12px)",
            backgroundSize: "cover",
          }}
        />
      </MDBox>
      <MDBox p={2}>
        <MDTypography display="inline" variant="h4" textTransform="capitalize" fontWeight="bold">
          {title}
        </MDTypography>
        <Divider />
        <MDBox mt={2} mb={2}>
          <MDTypography variant="body2" component="p" color="text">
            {description}
          </MDTypography>
        </MDBox>
      </MDBox>
    </Card>
  );
}

// Typechecking props for the SimpleBlogCardNoButton
SimpleBlogCardNoButton.propTypes = {
  image: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
};

export default SimpleBlogCardNoButton;
