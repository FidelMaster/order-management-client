import React, { useEffect, useState } from "react";
import PageContainer from "../../components/PageContainer/PageContainer";
import { getUsers } from "../../services/user-service";

const UserScreen = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    // Fill History data
    getList().then();
  }, []);

  const getList = async () => {
    try {
      const request = await getUsers();

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
      name: "email",
      label: "Correo Electronico",
      options: {
        filter: true,
        sort: true,
      },
    },
    {
      name: "name",
      label: "Nombre",
      options: {
        sort: true,
      },
    },
  ];

  return (
    <PageContainer
      title="Listado de Usuarios"
      titleTable="Usuarios"
      columns={columns}
      data={data}
    />
  );
};

export default UserScreen;
