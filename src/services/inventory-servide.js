import { FetchRequest } from "./fetch-service";
import {
  SERVICE_MODULE_ENDPOINT,
  INTERNAL_STORAGE_KEY,
} from "../utils/constants";

export const getInventory = async () => {
  try {
    //let data = await AsyncStorage.getItem(INTERNAL_STORAGE_KEY.token)

    const response = await FetchRequest({
      endpoint: `${SERVICE_MODULE_ENDPOINT.inventory}/v1/warehouses/1/list-prices/1/articles`,
      method: "GET",
      token: null,
    });

    if (!response.data) {
      return {
        message: "Ha ocurrido un error interno, favor intente nuevamente.",
        success: false,
        data: null,
      };
    }

    return {
      message: "Datos obtenidos",
      success: true,
      data: response.data,
    };
  } catch (error) {
    return {
      message: "Ha ocurrido un error interno, favor intente nuevamente.",
      success: false,
      data: null,
    };
  }
};


export const getInventoryByWahreHouse = async (warehouse_id) => {
  try {
    //let data = await AsyncStorage.getItem(INTERNAL_STORAGE_KEY.token)

    const response = await FetchRequest({
      endpoint: `${SERVICE_MODULE_ENDPOINT.inventory}/v1/warehouses/1/list-prices/1/articles`,
      method: "GET",
      token: null,
    });

    if (!response.data) {
      return {
        message: "Ha ocurrido un error interno, favor intente nuevamente.",
        success: false,
        data: null,
      };
    }

    return {
      message: "Datos obtenidos",
      success: true,
      data: response.data,
    };
  } catch (error) {
    return {
      message: "Ha ocurrido un error interno, favor intente nuevamente.",
      success: false,
      data: null,
    };
  }
};
