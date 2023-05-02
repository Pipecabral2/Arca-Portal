import Card from "@mui/material/Card";
import MDBox from "components/MDBox";
import MDTypography from "components/MDTypography";
import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";

function OrdersOverview() {
  const VentasObjetivo = 25000;
  const VentasActual = 1700;
  const progress = Math.floor((VentasActual / VentasObjetivo) * 100);

  const colorStyles = buildStyles({
    pathColor: progress < 50 ? "#f65f53" : progress < 70 ? "#ffc107" : "#4CAF50",
    trailColor: "#e6e6e6",
    backgroundColor: "#f2f2f2"
  });

  return (
    <Card sx={{ height: "100%" }}>
      <MDBox pt={3} px={3}>
        <MDTypography variant="h6" fontWeight="medium">
          Porcentaje de ventas este mes.
        </MDTypography>
        <MDBox mt={0} mb={2}>
          <MDTypography variant="button" color="text" fontWeight="regular">
            <MDTypography display="inline" variant="body2" fontWeight="bold" verticalAlign="middle">
              {progress < 50 ? (
                <i className="fas fa-arrow-down" style={{ color: "#f65f53" }} />
              ) : (
                <i className="fas fa-arrow-up" style={{ color: "#4CAF50" }} />
              )}
            </MDTypography>
            &nbsp;
            <MDTypography variant="button" color="text" fontWeight="bold">
              ({VentasActual} / {VentasObjetivo})
            </MDTypography>{" "}
            <strong>este mes</strong>
          </MDTypography>
        </MDBox>
      </MDBox>
      <MDBox p={2}>
        <CircularProgressbar
          value={progress}
          text={`${progress}%`}
          strokeWidth={12}
          styles={colorStyles}
          fontWeight="bold"
        />
      </MDBox>
    </Card>
  );
}

export default OrdersOverview;
