import * as React from "react";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Stack from "@mui/material/Stack";
import { styled } from "@mui/material/styles";
import Typography from "@mui/material/Typography";

import MUIDataTable from "mui-datatables";

import gridlanguage from "../../gridlanguage.js";

var options = gridlanguage.options;

const Card = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "flex-start",
 
}));

const PageContainer = (props) => {
  return (
    <Stack spacing={2} sx={{ width: "100%" }}>
      <Card>
        {" "}
        <h1>{props.title}</h1>
      </Card>

      <MUIDataTable
        title={props.titleTable}
        data={props.data}
        columns={props.columns}
        options={options}
      />
    </Stack>
  );
};

export default PageContainer;
