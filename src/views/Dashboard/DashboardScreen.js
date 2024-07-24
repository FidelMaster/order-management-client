import React from "react";
import Avatar from '@mui/material/Avatar';
import Stack from "@mui/material/Stack";
import Paper from "@mui/material/Paper";
import MUIDataTable from "mui-datatables";
import InventoryIcon from '@mui/icons-material/Inventory';
import AltRouteIcon from '@mui/icons-material/AltRoute';
import List from '@mui/material/List';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemSecondaryAction from '@mui/material/ListItemSecondaryAction';
import ListItemText from '@mui/material/ListItemText';
import CardIndicator from "../../components/CardIndicator/CardIndicator";
import { Grid, Typography } from "@mui/material";
import { styled } from "@mui/material/styles";

import gridlanguage from "../../gridlanguage.js";

import TotalCard from "../../components/TotalOrderLineChartCard/TotalCard ";
const Card = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "flex-start",
}));

var options = gridlanguage.options;

const avatarSX = {
  width: 36,
  height: 36,
  fontSize: '1rem'
};

// action style
const actionSX = {
  mt: 0.75,
  ml: 1,
  top: 'auto',
  right: 'auto',
  alignSelf: 'flex-start',
  transform: 'none'
};


const DashboardScreen = () => {
  const columns = [
    {
      name: "article_code",
      label: "Codigo Orden",
      options: {
        sort: true,
      },
    },
    {
      name: "article_description",
      label: "Cliente",
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
    {
      name: "quantity",
      label: "Total",
      options: {
        filter: true,
        sort: true,
      },
    },
  ];

  return (
    <Grid container rowSpacing={4.5} columnSpacing={2.75}>
      <Grid item xs={12} sx={{ mb: -2.25 }}>
        <h1>Tablero</h1>
      </Grid>
      <Grid item xs={12} sm={6} md={4} lg={4}>
        <TotalCard
          title="Ordenes Totales"
          count="4,42,236"
          description="Total ordenes generadas"
          extra="35,000"
        />
      </Grid>
      <Grid item xs={12} sm={6} md={4} lg={4}>
        <TotalCard
          title="Ordenes Pendientes"
          count="4,42,236"
          description="Ordenes pendientes de entrega"
          extra="35,000"
        />
      </Grid>
      <Grid item xs={12} sm={6} md={4} lg={4}>
        <TotalCard
          title="Ventas Totales"
          count="4,42,236"
          description="Ventas totales"
          extra="35,000"
        />
      </Grid>

      <Grid item xs={12} sm={6} md={7} lg={8}>
        <Grid container alignItems="center" justifyContent="space-between">
          <Grid item>
            <Typography variant="h5" sx={{ m: 2 }}>Ultimos Pedidos</Typography>
          </Grid>
          <Grid item />
        </Grid>
        <MUIDataTable
          title="Resumen"
          data={[]}
          columns={columns}
          options={options}
        />
      </Grid>
      <Grid item xs={12} sm={6} md={3} lg={4}>
        <Grid container alignItems="center" justifyContent="space-between">
          <Grid item>
            <Typography variant="h5" sx={{ m: 2 }}>Facturacion por ruta </Typography>
          </Grid>
          <Grid item />
        </Grid>
        <CardIndicator   content={false}>
        <List
            component="nav"
            sx={{
              px: 0,
              py: 0,
              '& .MuiListItemButton-root': {
                py: 1.5,
                '& .MuiAvatar-root': avatarSX,
                '& .MuiListItemSecondaryAction-root': { ...actionSX, position: 'relative' }
              }
            }}
          >
            <ListItemButton divider>
              <ListItemAvatar>
                <Avatar sx={{ color: 'success.main', bgcolor: 'rgb(246, 255, 237)' }}>
                   <AltRouteIcon  color="rgb(82, 196, 26)" />
                </Avatar>
              </ListItemAvatar>
              <ListItemText primary={<Typography variant="subtitle1">Ruta Norte Distrito 1</Typography>} secondary="descripcion" />
              <ListItemSecondaryAction>
                <Stack alignItems="flex-end">
                  <Typography variant="subtitle1" noWrap>
                   C$1,430
                  </Typography>
          
                </Stack>
              </ListItemSecondaryAction>
            </ListItemButton>
         
          </List>
        </CardIndicator>
      </Grid>
      <Grid item xs={12} sm={6} md={3} lg={4}>
        <Grid container alignItems="center" justifyContent="space-between">
          <Grid item>
            <Typography variant="h5" sx={{ m: 2 }}>Top 10 articulos mas vendidos</Typography>
          </Grid>
          <Grid item />
        </Grid>
        <CardIndicator   content={false}>
        <List
            component="nav"
            sx={{
              px: 0,
              py: 0,
              '& .MuiListItemButton-root': {
                py: 1.5,
                '& .MuiAvatar-root': avatarSX,
                '& .MuiListItemSecondaryAction-root': { ...actionSX, position: 'relative' }
              }
            }}
          >
            <ListItemButton divider>
              <ListItemAvatar>
                <Avatar sx={{ color: 'success.main', bgcolor: 'rgb(246, 255, 237)' }}>
                   <InventoryIcon  color="rgb(82, 196, 26)" />
                </Avatar>
              </ListItemAvatar>
              <ListItemText primary={<Typography variant="subtitle1">Quezo Mozarella Bolsa </Typography>} secondary="descripcion" />
              <ListItemSecondaryAction>
                <Stack alignItems="flex-end">
                  <Typography variant="subtitle1" noWrap>
                   C$23,025.02
                  </Typography>
          
                </Stack>
              </ListItemSecondaryAction>
            </ListItemButton>
         
          </List>
        </CardIndicator>
      </Grid>
    </Grid>
  );
};

export default DashboardScreen;
