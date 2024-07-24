import { FetchRequest } from "./fetch-service";
import {
  SERVICE_MODULE_ENDPOINT,
  INTERNAL_STORAGE_KEY,
} from "../utils/constants";

export const getOrders = async () => {
  try {
    //let data = await AsyncStorage.getItem(INTERNAL_STORAGE_KEY.token)

    const response = await FetchRequest({
      endpoint: `${SERVICE_MODULE_ENDPOINT.administration}/v1/orders`,
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


export const getOrdersById = async (id) => {
    try {
      //let data = await AsyncStorage.getItem(INTERNAL_STORAGE_KEY.token)
  
      const response = await FetchRequest({
        endpoint: `${SERVICE_MODULE_ENDPOINT.administration}/v1/orders/${id}`,
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


  
export const getArticleSummaryByRoute = async (route_id) => {
  try {
    //let data = await AsyncStorage.getItem(INTERNAL_STORAGE_KEY.token)

    const response = await FetchRequest({
      endpoint: `${SERVICE_MODULE_ENDPOINT.administration}/v1/orders/distribution-route/${route_id}/articles/summary`,
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
