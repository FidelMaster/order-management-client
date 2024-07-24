import React, { useEffect, useState } from "react";

import PageContainer from "../../components/PageContainer/PageContainer";
import { getInventory } from "../../services/inventory-servide";

const InventoryScreen = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    // Fill History data
    getList().then();
  }, []);

  const getList = async () => {
    try {
      const request = await getInventory();

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
      name: "article_code",
      label: "Codigo",
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
      name: "available",
      label: "Existencia",
      options: {
        filter: true,
        sort: true,
      },
    },

    {
      name: "price",
      label: "Precio",
      options: {
        filter: true,
        sort: true,
      },
    },
  ];

  return (
    <PageContainer
      title="Inventarios"
      titleTable="Articulos"
      columns={columns}
      data={data}
    />
  );
};

export default InventoryScreen;
