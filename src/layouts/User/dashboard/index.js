// @mui material components
import Grid from "@mui/material/Grid";

// Material Dashboard 2 React components
import MDBox from "components/MDBox";

import bestseller from "assets/images/test.png";

// Material Dashboard 2 React example components
import DashboardLayout from "examples/LayoutContainers/DashboardLayout";
import DashboardNavbar from "examples/Navbars/DashboardNavbar";
import Footer from "examples/Footer";
import ReportsBarChart from "examples/Charts/BarCharts/ReportsBarChart";
import ReportsLineChart from "examples/Charts/LineCharts/ReportsLineChart";
import ComplexStatisticsCard from "examples/Cards/StatisticsCards/ComplexStatisticsCard";

// import SimpleBlogCard from "examples/Cards/BlogCards/SimpleBlogCard";

import SimpleBlogCardNoButton from "examples/Cards/SimpleBlogCardNoButton/index";

// Data
import reportsBarChartData from "layouts/User/dashboard/data/reportsBarChartData";
import reportsLineChartData from "layouts/User/dashboard/data/reportsLineChartData";

// Dashboard components
import Projects from "layouts/User/dashboard/components/Projects";
import GraficaCircular from "layouts/User/dashboard/components/GraficaCircular";
import OrdersOverview from "layouts/User/dashboard/components/OrdersOverview";

function DashboardUser() {
  const { sales } = reportsLineChartData;

  return (
    <DashboardLayout>
      <DashboardNavbar />
      <MDBox py={3}>
        <Grid container spacing={3}>
          <Grid item xs={12} md={6} lg={3}>
            <MDBox mb={1.5}>
              <ComplexStatisticsCard
                color="dark"
                icon="assignment_ind"
                title="Posicion"
                count={4}
                percentage={{
                  color: "success",
                  amount: "+55%",
                  label: "Semanal",
                }}
              />
            </MDBox>
          </Grid>
          <Grid item xs={12} md={6} lg={3}>
            <MDBox mb={1.5}>
              <ComplexStatisticsCard
                icon="leaderboard"
                title="Completadas"
                count="2,300"
                percentage={{
                  color: "success",
                  amount: "+3%",
                  label: "Mensual",
                }}
              />
            </MDBox>
          </Grid>
          <Grid item xs={12} md={6} lg={3}>
            <MDBox mb={1.5}>
              <ComplexStatisticsCard
                color="success"
                icon="sell"
                title="Ventas"
                count="34444k"
                percentage={{
                  color: "error",
                  amount: "+1%",
                  label: "Anual",
                }}
              />
            </MDBox>
          </Grid>
          <Grid item xs={12} md={6} lg={3}>
            <MDBox mb={1.5}>
              <ComplexStatisticsCard
                color="primary"
                icon="person_add"
                title="Servicio"
                count="+91"
                percentage={{
                  color: "success",
                  amount: "",
                  label: "Mensual",
                }}
              />
            </MDBox>
          </Grid>
        </Grid>
        <MDBox mt={4.5}>
          <Grid container spacing={4}>
            <Grid item xs={12} md={6} lg={4}>
              <MDBox mb={4}>
                <ReportsBarChart
                  color="info"
                  title="Citas"
                  description="Durante la semana"
                  date="Hace 2 min"
                  chart={reportsBarChartData}
                />
              </MDBox>
            </Grid>
            <Grid item xs={12} md={6} lg={4}>
              <MDBox mb={4}>
                <ReportsLineChart
                  color="info"
                  title="Ventas"
                  description={
                    <>
                      (<strong>+7%</strong>) Durante el mes
                    </>
                  }
                  date="Hace 4 min"
                  chart={sales}
                />
              </MDBox>
            </Grid>
            <Grid item xs={12} md={6} lg={4}>
              <MDBox mb={4}>
                <SimpleBlogCardNoButton
                  image={bestseller}
                  title="Popular"
                  description="'{bestselling}' es el mas popular!"
                  action={{
                    type: "internal",
                    route: "/somewhere",
                    color: "info",
                    label: "Go Somewhere",
                  }}
                />
              </MDBox>
            </Grid>
          </Grid>
        </MDBox>
        <MDBox>
          <Grid container spacing={3}>
            <Grid item xs={12} md={6} lg={4}>
              <Projects />
            </Grid>
            <Grid item xs={12} md={6} lg={4}>
              <GraficaCircular />
            </Grid>
            <Grid item xs={12} md={6} lg={4}>
              <OrdersOverview />
            </Grid>
          </Grid>
        </MDBox>
      </MDBox>
      <Footer />
    </DashboardLayout>
  );
}

export default DashboardUser;
