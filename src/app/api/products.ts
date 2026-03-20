
import type {ProductApi, Producto} from "../types/product";
import {api} from "./api";

export const getProducts = async (): Promise<ProductApi> => {
    const response = await api.get<ProductApi>("products?limit=194");
    return response.data;
}


export const getProductById = async (id: string): Promise<Producto> => {
    const response = await api.get<Producto>(`products/${id}`);
    return response.data;
}