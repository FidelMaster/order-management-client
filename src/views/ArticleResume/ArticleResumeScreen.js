import React, { useEffect, useState } from "react";
import { getArticleSummaryByRoute } from "../../services/order-service";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Stack from "@mui/material/Stack";
import { styled } from "@mui/material/styles";
import Typography from "@mui/material/Typography";
import RouteDistributionDropDown from "../../components/RouteDistributionDropDown/RouteDistributionDropDown.js";
import MUIDataTable from "mui-datatables";

import gridlanguage from "../../gridlanguage.js";

var options = gridlanguage.options;

const Card = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "flex-start",
}));

const ArticleResumeScreen = () => {
  
  const [route, setRoute] = useState([]);
  const [data, setData] = useState([]);

  useEffect(() => {
    // Fill History data
    //   getList().then();
  }, []);

  const getList = async (route_id) => {
    try {
      const request = await getArticleSummaryByRoute(route_id);

      if (request.success) {
        setData(request.data);
      }
    } catch (error) {
      setData([]);
      console.error(error);
    }
  };

  
  const handleChangeValue = async (event) => {
    setData([]);
    setRoute(event.target.value);
    getList(event.target.value);
  };


  const columns = [
    {
      name: "article_code",
      label: "Corido Articulo",
      options: {
        sort: true,
      },
    },
    {
      name: "article_description",
      label: "Descripcion",
      options: {
        filter: true,
        sort: true,
      },
    },
    {
      name: "quantity",
      label: "Cantidad Solicitada",
      options: {
        filter: true,
        sort: true,
      },
    },
  ];

  return (
    <Stack spacing={2} sx={{ width: "100%" }}>
      <Card>
        {" "}
        <h1>Reporte de despacho por ruta</h1>
        <p>
          Resumen de articulos pendiente de entregar por ruta de distribucion
        </p>
      </Card>

      <Card>
        <h3>Filtros</h3>
        <RouteDistributionDropDown value={route} handleChangeValue={handleChangeValue} />
      </Card>

      <MUIDataTable
        title="Resumen Despacho por Articulos"
        data={data}
        columns={columns}
        options={options}
      />
    </Stack>
  );
};

export default ArticleResumeScreen;
