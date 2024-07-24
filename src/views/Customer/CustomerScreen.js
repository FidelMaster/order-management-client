import React, { useEffect, useState } from "react";
import { getCustomers } from "../../services/customer-service";
import PageContainer from "../../components/PageContainer/PageContainer";

const CustomerScreen = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    // Fill History data
    getList().then();
  }, []);

  const getList = async () => {
    try {
      const request = await getCustomers();

      if (request.success) {
        setData(request.data);
      }
    } catch (error) {
      setData([]);
      console.error(error);
    }
  };

  const columns = [
    {
      name: "name",
      label: "Nombre",
      options: {
        sort: true,
      },
    },
    {
      name: "contact_name",
      label: "Contacto",
      options: {
        filter: true,
        sort: true,
      },
    },
    {
      name: "contact_phone",
      label: "Telefono",
      options: {
        filter: true,
        sort: true,
      },
    },

    {
      name: "contact_email",
      label: "Corre Electronico",
      options: {
        filter: true,
        sort: true,
      },
    },
    {
      name: "address",
      label: "Direccion",
      options: {
        filter: false,
        sort: true,
      },
    },
  ];

  return <PageContainer title="Listado Clientes" titleTable="Clientes" columns={columns} data={data} />;
};

export default CustomerScreen;
