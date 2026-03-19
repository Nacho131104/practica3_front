"use client"

import Image from "next/image";
import "./page.css";
import { useEffect, useState } from "react";
import type { Producto } from "./types/product";
import { getProducts } from "./api/products";
import Product from "./components/product";

const Home = ()  =>{


  const [products, setProducts] = useState<Producto[]>([]);
  const [contador, setContador] = useState<number>(0);
  const [filtro, setFiltro] = useState<string>("");
  const [filtroFinal, setFiltroFinal] = useState<string>("");

  useEffect(() => {
    getProducts().then((data) => {
      setProducts(data.products);
    });
  }, []);


  return (
    <div className="page">
          <h1> Listado de productos</h1>
          <input type = "text" placeholder="Buscar producto" onChange = {(e) => setFiltro(e.target.value)} />
          <button onClick={() => setFiltroFinal(filtro)}>Aplicar filtro</button>

          <div className="product-container">
            {products.map((product) => <Product key={product.id} product={product} />)}
          </div>
    </div>
  );
}

export default Home;
