"use client"

import type {Producto} from "../types/product";
import { useRouter } from "next/navigation";


const Product = ({product}: {product: Producto}) => {



    const router = useRouter();
    
    return (
        <div key={product.id} className="product-card">
            <img src={product.thumbnail} alt={product.title}/>
            <h2>Titulo: {product.title}</h2>
            <p>Categoría: {product.category}</p>
            <p>Precio: {product.price}€</p>
            <button>Ver detalles</button>
        </div>
      )
}

export default Product;