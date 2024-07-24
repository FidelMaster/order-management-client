import React, { useEffect, useState } from "react";
import { getDistributionRoutes } from "../../services/distributionRoute-service";
import PageContainer from '../../components/PageContainer/PageContainer';

const DistributionRouteScreen = () => {
    const [data, setData] = useState([]);

    useEffect(() => {
      // Fill History data
      getList().then();
    }, []);
  
    const getList = async () => {
      try {
        const request = await getDistributionRoutes();
  
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
        name: "id",
        label: "Codigo",
        options: {
          sort: true,
        },
      },
      {
        name: "description",
        label: "Descripcion",
        options: {
          filter: true,
          sort: true,
        },
      },
    ];

    return <PageContainer title="Rutas de Distribucion" titleTable="Rutas" columns={columns} data={data} />;
};

export default DistributionRouteScreen;