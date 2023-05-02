import { useState } from "react";

// @mui material components
import Card from "@mui/material/Card";
import Icon from "@mui/material/Icon";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";

// Material Dashboard 2 React components
import MDBox from "components/MDBox";
import MDTypography from "components/MDTypography";

// Material Dashboard 2 React examples
import DataTable from "examples/Tables/DataTable";

// Data
// import data from "layouts/dashboard/components/Projects/data";

function Projects() {
  // const { columns, rows } = data();

  const [menu, setMenu] = useState(null);

  const openMenu = ({ currentTarget }) => setMenu(currentTarget);
  const closeMenu = () => setMenu(null);

  const renderMenu = (
    <Menu
      id="simple-menu"
      anchorEl={menu}
      anchorOrigin={{
        vertical: "top",
        horizontal: "left",
      }}
      transformOrigin={{
        vertical: "top",
        horizontal: "right",
      }}
      open={Boolean(menu)}
      onClose={closeMenu}
    >
      <MenuItem onClick={closeMenu}>Action</MenuItem>
      <MenuItem onClick={closeMenu}>Another action</MenuItem>
      <MenuItem onClick={closeMenu}>Something else</MenuItem>
    </Menu>
  );

  return (
    <Card>
      <MDBox display="flex" justifyContent="space-between" alignItems="center" p={3}>
        <MDBox>
          <MDTypography variant="h6" gutterBottom>
            Vendedores
          </MDTypography>
          <MDBox display="flex" alignItems="center" lineHeight={0}>
            <Icon
              sx={{
                fontWeight: "bold",
                color: ({ palette: { info } }) => info.main,
                mt: -0.5,
              }}
            >
              done
            </Icon>
            <MDTypography variant="button" fontWeight="regular" color="text">
              &nbsp;<strong>Destacados</strong> este mes
            </MDTypography>
          </MDBox>
        </MDBox>
        <MDBox color="text" px={2}>
          <Icon sx={{ cursor: "pointer", fontWeight: "bold" }} fontSize="small" onClick={openMenu}>
            more_vert
          </Icon>
        </MDBox>
        {renderMenu}
      </MDBox>
      <MDBox>
        <DataTable
          table={{
            columns: [
              { Header: "Nombre", accessor: "Nombre", width: "25%" },
              { Header: "Zona", accessor: "Zona" },
              { Header: "Ventas", accessor: "Ventas", width: "12%" },
            ],
            rows: [
              {
                Nombre: "Hanny Baniard",
                Rol: "Data Coordiator",
                Zona: "Baorixile",
                Ventas: 42,
                startDate: "4/11/2021",
                salary: "$474,978",
              },
              {
                Nombre: "Lara Puleque",
                position: "Payment Adjustment Coordinator",
                Zona: "Cijangkar",
                Ventas: 47,
                startDate: "8/2/2021",
                salary: "$387,287",
              },
              {
                Nombre: "Torie Repper",
                position: "Administrative Officer",
                Zona: "Montpellier",
                Ventas: 25,
                startDate: "4/21/2021",
                salary: "$94,780",
              },
              {
                Nombre: "Nat Gair",
                position: "Help Desk Technician",
                Zona: "Imider",
                Ventas: 57,
                startDate: "12/6/2020",
                salary: "$179,177",
              },
              {
                Nombre: "Maggi Slowan",
                position: "Help Desk Technician",
                Zona: "Jaunpils",
                Ventas: 56,
                startDate: "11/7/2020",
                salary: "$440,874",
              },
              {
                Nombre: "Marleah Snipe",
                position: "Account Representative II",
                Zona: "Orekhovo-Borisovo",
                Ventas: 31,
                startDate: "7/18/2021",
                salary: "$404,983",
              },
              {
                Nombre: "Georgia Danbury",
                position: "Professor",
                Zona: "Gniezno",
                Ventas: 50,
                startDate: "10/1/2020",
                salary: "$346,576",
              },
              {
                Nombre: "Bev Castan",
                position: "Design Engineer",
                Zona: "Acharnés",
                Ventas: 19,
                startDate: "1/14/2021",
                salary: "$445,171",
              },
              {
                Nombre: "Reggi Westney",
                position: "Financial Advisor",
                Zona: "Piuí",
                Ventas: 56,
                startDate: "3/21/2021",
                salary: "$441,569",
              },
              {
                Nombre: "Bartholomeus Prosh",
                position: "Project Manager",
                Zona: "Kelīshād va Sūdarjān",
                Ventas: 28,
                startDate: "5/27/2021",
                salary: "$336,238",
              },
              {
                Nombre: "Sheffy Feehely",
                position: "Software Consultant",
                Zona: "Ndibène Dahra",
                Ventas: 27,
                startDate: "3/23/2021",
                salary: "$473,391",
              },
              {
                Nombre: "Euphemia Chastelain",
                position: "Engineer IV",
                Zona: "Little Baguio",
                Ventas: 63,
                startDate: "5/1/2021",
                salary: "$339,489",
              },
            ],
          }}
        />
      </MDBox>
    </Card>
  );
}

export default Projects;
