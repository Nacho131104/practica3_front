"use client";
import { Producto } from "../types/product";
import { useRouter } from "next/navigation";
import "../page.css";

type params = {
  product: Producto;
};

const Product = ({ product }: params) => {
  const router = useRouter();

  return (
    <div className="product-card">
      <img src={product.thumbnail} alt={product.title} />
      <h3 className="text">{product.title}</h3>
      <p className="text">{product.category}</p>
      <p className="text">{product.price}€</p>
      <button 
        className="btn"
        onClick={() => router.push(`/product/${product.id}`)}
      >
        Ver detalles
      </button>
    </div>
  );
};

export default Product;