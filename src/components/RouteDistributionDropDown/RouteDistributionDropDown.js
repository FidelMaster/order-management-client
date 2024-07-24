import React, { useEffect, useState } from "react";
import { getDistributionRoutes } from "../../services/distributionRoute-service";
import DropDown from "../DropDown/DropDown";

const RouteDistributionDropDown = ({ value, handleChangeValue }) => {
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

  return (
    <DropDown
      id="dd-distributionRoute"
      keyValue="id"
      keyDescription="description"
      label="Ruta Distribucion"
      labelId="lblDropDownDistributionR"
      value={value}
      handleChangeValue={handleChangeValue}
      data={data}
    />
  );
};

export default RouteDistributionDropDown;
