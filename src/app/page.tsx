"use client";
import { useEffect, useState } from "react";
import { Producto } from "./types/product";
import SectionContainer from "./components/SectionContainer";
import SearchBar from "./components/SectionBar";
import Product from "./components/product";
import { getProducts } from "./api/products";
import "./page.css";

const Home = () => {
  const [products, setProducts] = useState<Producto[]>([]);
  const [searchQuery, setSearchQuery] = useState<string>("");

  useEffect(() => {
      getProducts().then((data) => {
        setProducts(data.products);
      });
  }, []);

 
  const filteredProducts = products.filter((p) =>
    p.title.toLowerCase().includes(searchQuery.toLowerCase())
  );


  return (
    <div className="page">
      <SectionContainer titulo="Listado de productos">
        
        <SearchBar setSearchQuery={setSearchQuery} />

        <p className="text">Resultados: {filteredProducts.length} productos encontrados</p>

        <div className="product-container">
          {filteredProducts.map((p) => (
            <Product key={p.id} product={p} />
          ))}
        </div>

      </SectionContainer>
    </div>
  );
}

export default Home;