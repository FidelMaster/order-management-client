import React, { useEffect, useState } from "react";
import PageContainer from "../../components/PageContainer/PageContainer";
import { getOrders, getOrdersById } from "../../services/order-service";
import Modal from "@mui/material/Modal";
import { Stack, Typography, Box } from "@mui/material";
import Button from "@mui/material/Button";
import Visibility from "@mui/icons-material/Visibility";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import ListItemAvatar from "@mui/material/ListItemAvatar";
import Avatar from "@mui/material/Avatar";
import ImageIcon from "@mui/icons-material/Image";
import WorkIcon from "@mui/icons-material/Work";
import BeachAccessIcon from "@mui/icons-material/BeachAccess";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};

const OrderScreen = () => {
  const [data, setData] = useState([]);
  const [open, setOpen] = React.useState(false);

  const [orderId, setOrderId] = useState();
  const [order, setOrder] = useState();
  const [orderDetail, setOrderDetail] = useState([]);

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  useEffect(() => {
    // Fill History data
    getList().then();
  }, []);

  const getList = async () => {
    try {
      const request = await getOrders();

      if (request.success) {
        setData(request.data);
      }
    } catch (error) {
      setData([]);
      console.error(error);
    }
  };

  const getDetail = async (id) => {
    try {
      const request = await getOrdersById();

      if (request.success) {
        setData(request.data);
      }
    } catch (error) {
      setData([]);
      console.error(error);
    }
  };

  const handleSelectedOrder = async (id) => {
    setOrderId(id);
    const request = await getOrdersById(id);
    if (request.success) {
      setOrder(request.data.dataValues);
      setOrderDetail(request.data.items);
    }
    handleOpen();
  };

  const columns = [
    {
      name: "id",
      label: "# orden",
      options: {
        sort: true,
      },
    },
    {
      name: "customer_name",
      label: "Cliente",
      options: {
        filter: true,
        sort: true,
      },
    },
    {
      name: "createdAt",
      label: "Fecha",
      options: {
        filter: false,
        sort: true,
      },
    },
    {
      name: "total_item",
      label: "Total Articulos",
      options: {
        filter: true,
        sort: true,
      },
    },
    {
      name: "total_order",
      label: "Total C$",
      options: {
        filter: true,
        sort: true,
      },
    },
    {
      name: "id",
      label: "Acciones",
      options: {
        filter: true,
        filterType: "multiselect",
        customBodyRenderLite: (dataIndex) => {
          let id = data[dataIndex]["id"];
          return (
            <Button
              variant="contained"
              color="primary"
              size="small"
              endIcon={<Visibility />}
              onClick={(e) => {
                handleSelectedOrder(id).then();
              }}
            >
              ver
            </Button>
          );
        },
      },
    },
  ];

  return (
    <>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Stack gap={3}>
            <Typography id="modal-modal-title" variant="h6" component="h2">
              Detalle Orden # {orderId}
            </Typography>

            <Stack gap={3}>
              <Typography variant="h6" component="h3">
                Cliente: {order?.customer_name}
              </Typography>

              <Typography variant="h6" component="h3">
                Observaciones:
              </Typography>

              <Typography variant="h6" component="h3">
                {order?.description}
              </Typography>

              <Typography variant="h6" component="h3">
                Total Item: {order?.total_item}
              </Typography>

              <Typography variant="h6" component="h3">
                Total Orden: {order?.total_order}
              </Typography>

              <List
                sx={{
                  width: "100%",
                  maxWidth: 360,
                  bgcolor: "background.paper",
                }}
              >
                {orderDetail.map((item, index) => {
                  return (
                    <ListItem>
                      <ListItemAvatar>
                        <Avatar>
                          <WorkIcon />
                        </Avatar>
                      </ListItemAvatar>
                      <ListItemText
                        primary={item.article_description}
                        secondary={"Cantidad:" + item.quantity}
                      />
                    </ListItem>
                  );
                })}
              </List>
            </Stack>
          </Stack>
        </Box>
      </Modal>

      <PageContainer
        title="Historial de Ordenes"
        titleTable="Ordenes"
        columns={columns}
        data={data}
      />
    </>
  );
};

export default OrderScreen;
