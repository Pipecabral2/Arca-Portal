// @mui material components
import Card from "@mui/material/Card";
import Icon from "@mui/material/Icon";

// Material Dashboard 2 React components
import MDBox from "components/MDBox";
import MDTypography from "components/MDTypography";

// Material Dashboard 2 React example components
import TimelineItem from "examples/Timeline/TimelineItem";

function OrdersOverview() {
  return (
    <Card sx={{ height: "100%" }}>
      <MDBox pt={3} px={3}>
        <MDTypography variant="h6" fontWeight="medium">
          Ultimas Ordenes
        </MDTypography>
        <MDBox mt={0} mb={2}>
          <MDTypography variant="button" color="text" fontWeight="regular">
            <MDTypography display="inline" variant="body2" verticalAlign="middle">
              <Icon sx={{ color: ({ palette: { success } }) => success.main }}>arrow_upward</Icon>
            </MDTypography>
            &nbsp;
            <MDTypography variant="button" color="text" fontWeight="medium">
              24%
            </MDTypography>{" "}
            este mes
          </MDTypography>
        </MDBox>
      </MDBox>
      <MDBox p={2}>
        <TimelineItem
          color="primary"
          icon="inventory_2"
          title="New order #1832416"
          dateTime="22 DEC 07:20 PM"
        />
        <TimelineItem
          color="primary"
          icon="inventory_2"
          title="New order #1832415"
          dateTime="21 DEC 11:00 PM"
        />
        <TimelineItem
          color="primary"
          icon="inventory_2"
          title="New order #1832414"
          dateTime="21 DEC 09:34 PM"
        />
        <TimelineItem
          color="primary"
          icon="inventory_2"
          title="New order #1832413"
          dateTime="20 DEC 02:20 AM"
        />
        <TimelineItem
          color="primary"
          icon="inventory_2"
          title="New order #1832412"
          dateTime="18 DEC 04:54 AM"
          lastItem
        />
      </MDBox>
    </Card>
  );
}

export default OrdersOverview;
