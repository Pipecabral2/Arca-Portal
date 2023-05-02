/* eslint-disable react/prop-types */
/* eslint-disable react/function-component-definition */

// @mui material components
import Icon from "@mui/material/Icon";

// Material Dashboard 2 React components
import MDBox from "components/MDBox";
import MDTypography from "components/MDTypography";
import MDAvatar from "components/MDAvatar";
import MDProgress from "components/MDProgress";

// Images
import LogoAsana from "assets/images/small-logos/logo-asana.svg";

// import logoGithub from "assets/images/small-logos/github.svg";
// import logoAtlassian from "assets/images/small-logos/logo-atlassian.svg";
// import logoSlack from "assets/images/small-logos/logo-slack.svg";
// import logoSpotify from "assets/images/small-logos/logo-spotify.svg";
// import logoInvesion from "assets/images/small-logos/logo-invision.svg";

export default function data() {
  const Project = ({ image, name }) => (
    <MDBox display="flex" alignItems="center" lineHeight={1}>
      <MDAvatar src={image} name={name} size="sm" variant="rounded" />
      <MDTypography display="block" variant="button" fontWeight="medium" ml={1} lineHeight={1}>
        {name}
      </MDTypography>
    </MDBox>
  );

  const Progress = ({ color, value }) => (
    <MDBox display="flex" alignItems="center">
      <MDTypography variant="caption" color="text" fontWeight="medium">
        {value}%
      </MDTypography>
      <MDBox ml={0.5} width="9rem">
        <MDProgress variant="gradient" color={color} value={value} />
      </MDBox>
    </MDBox>
  );

  return {
    columns: [
      { Header: "Zona", accessor: "project", width: "30%", align: "left" },
      { Header: "Meta", accessor: "budget", align: "left" },
      { Header: "Actual", accessor: "actual", align: "center" },
      { Header: "Progreso", accessor: "completion", align: "center" },
      { Header: "Accion", accessor: "action", align: "center" },
    ],

    rows: [
      {
        project: <Project image={LogoAsana} name="Santa Catarina" />,
        budget: (
          <MDTypography component="a" href="#" variant="button" color="text" fontWeight="medium">
            $25,500
          </MDTypography>
        ),
        actual: (
          <MDTypography component="a" href="#" variant="caption" color="text" fontWeight="medium">
            $actualSells.zone
          </MDTypography>
        ),
        completion: <Progress color="info" value={60} />,
        action: (
          <MDTypography component="a" href="#" color="text">
            <Icon>more_vert</Icon>
          </MDTypography>
        ),
      },
      {
        project: <Project image={LogoAsana} name="Zona Tec" />,
        budget: (
          <MDTypography component="a" href="#" variant="button" color="text" fontWeight="medium">
            $50,000
          </MDTypography>
        ),
        actual: (
          <MDTypography component="a" href="#" variant="caption" color="text" fontWeight="medium">
            $actualSells.zone
          </MDTypography>
        ),
        completion: <Progress color="success" value={100} />,
        action: (
          <MDTypography component="a" href="#" color="text">
            <Icon>more_vert</Icon>
          </MDTypography>
        ),
      },
      {
        project: <Project image={LogoAsana} name="Zona Centro" />,
        budget: (
          <MDTypography component="a" href="#" variant="button" color="text" fontWeight="medium">
            $30,400
          </MDTypography>
        ),
        actual: (
          <MDTypography component="a" href="#" variant="caption" color="text" fontWeight="medium">
            $actualSells.zone
          </MDTypography>
        ),
        completion: <Progress color="error" value={30} />,
        action: (
          <MDTypography component="a" href="#" color="text">
            <Icon>more_vert</Icon>
          </MDTypography>
        ),
      },
      {
        project: <Project image={LogoAsana} name="San Pedro" />,
        budget: (
          <MDTypography component="a" href="#" variant="button" color="text" fontWeight="medium">
            $140,000
          </MDTypography>
        ),
        actual: (
          <MDTypography component="a" href="#" variant="caption" color="text" fontWeight="medium">
            $actualSells.zone
          </MDTypography>
        ),
        completion: <Progress color="info" value={80} />,
        action: (
          <MDTypography component="a" href="#" color="text">
            <Icon>more_vert</Icon>
          </MDTypography>
        ),
      },
      {
        project: <Project image={LogoAsana} name="San Nicolas" />,
        budget: (
          <MDTypography component="a" href="#" variant="button" color="text" fontWeight="medium">
            $10,000
          </MDTypography>
        ),
        actual: (
          <MDTypography component="a" href="#" variant="caption" color="text" fontWeight="medium">
            $actualSells.zone
          </MDTypography>
        ),
        completion: <Progress color="error" value={0} />,
        action: (
          <MDTypography component="a" href="#" color="text">
            <Icon>more_vert</Icon>
          </MDTypography>
        ),
      },
      {
        project: <Project image={LogoAsana} name="Zona Cumbres" />,
        budget: (
          <MDTypography component="a" href="#" variant="button" color="text" fontWeight="medium">
            $20,300
          </MDTypography>
        ),
        actual: (
          <MDTypography component="a" href="#" variant="caption" color="text" fontWeight="medium">
            $actualSells.zone
          </MDTypography>
        ),
        completion: <Progress color="success" value={100} />,
        action: (
          <MDTypography component="a" href="#" color="text">
            <Icon>more_vert</Icon>
          </MDTypography>
        ),
      },
    ],
  };
}
