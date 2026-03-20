"use client";
import { useEffect, useState } from "react";
import { useParams, useRouter } from "next/navigation";
import { Producto } from "../../types/product";
import { getProductById } from "../../api/products";
import SectionContainer from "../../components/SectionContainer";
import "../../page.css";

const ProductDetail = () => {
  const { id } = useParams();
  const router = useRouter();
  const [product, setProduct] = useState<Producto | null>(null);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    if (id) {
      setLoading(true);
      getProductById(id as string)
        .then((data) => {
          setProduct(data);
          setLoading(false);
        })
        .catch(() => setLoading(false));
    }
  }, [id]);

  return (
    <div className="page">
      <SectionContainer titulo={product?.title || "Cargando..."}>
        
        {loading && <p className="text">Cargando información del producto...</p>}

        {!loading && product && (
          <div>
            <button className="search-btn" onClick={() => router.back()}>
                Volver al listado
            </button>

            <div className="detail-container">
              
              <div className="detail-media">
                    {product.images?.slice(0, 3).map((img, i) => (
                            <img src={img} alt="producto" className="image-detail" />
                    ))}
              </div>
              <div className="detail-info">
                <p className="text"> Precio: {product.price}€</p>
                <p className = "text">Marca: {product.brand}</p>
                <p className = "text">Categoría: {product.category}</p>
                <p className ="text"> Descripcion: {product.description}</p>
                <p className ="text">Valoración: {product.rating} / 5</p> 
                <p className = "text">Stock disponible: {product.stock} unidades</p>
                <p className = "text">Peso: {product.weight}g</p>
                <p className = "text">Dimensiones: {product.dimensions?.width} x {product.dimensions?.height} x {product.dimensions?.depth} cm</p>

              </div>

            </div>
          </div>
        )}
      </SectionContainer>
    </div>
  );
};

export default ProductDetail;