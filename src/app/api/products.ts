
import type {Producto, ProductApi} from "../types/product";
import {api} from "./api";

export const getProducts = async (): Promise<ProductApi> => {
    const response = await api.get<ProductApi>("products");
    return response.data;
}