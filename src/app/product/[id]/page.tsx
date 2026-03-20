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
  // Estado para el índice de la imagen actual
  const [imagenActual, setImagenActual] = useState<number>(0);

  useEffect(() => {
    if (id) {
      setLoading(true);
      getProductById(id as string)
        .then((data) => {
          setProduct(data);
          setImagenActual(0); 
          setLoading(false);
        })
        .catch(() => setLoading(false));
    }
  }, [id]);

  const ImagenAnterior = () => {
    if (!product || !product.images) return;

    setImagenActual((prevIndex) => 
      prevIndex === 0 ?  product.images!.length - 1 : prevIndex - 1
    );
  };

  const ImagenSiguiente = () => {
    if (!product || !product.images) return;
    setImagenActual((prevIndex) => 
      prevIndex === product.images!.length - 1 ? 0 : prevIndex + 1
    );
  };

  return (
    <div className="page">
      <SectionContainer titulo={product?.title || "Cargando..."}>
        
        {loading && <p className="text">Cargando información del producto...</p>}

        {!loading && product && (
          <div>
            <button className="search-btn" onClick={() => router.back()}>
                ← Volver al listado
            </button>

            <div className="detail-flex">
              <div>
                <div className="carrusel-container">
                    {product.images && product.images.length > 1 && (
                        <button className="carrusel-btn  btn-prev" onClick={ImagenAnterior}>
                            ‹
                        </button>
                    )}
                    {product.images && product.images.length > 0 && (
                        <img 
                          src={product.images[imagenActual]} 
                          className="carrusel-image" 
                          alt={`Imagen ${imagenActual + 1}`} 
                        />
                    )}
                    {product.images && product.images.length > 1 && (
                        <button className="carrusel-btn  btn-next" onClick={ImagenSiguiente}>
                            ›
                        </button>
                    )}
                </div>
              </div>
              <div>
                <p className="text">Precio: {product.price}€</p>
                <p className="text">Marca: {product.brand}</p>
                <p className="text">Categoría: {product.category}</p>
                <p className="text">Descripción: {product.description}</p>

                <p className="text">Valoración:  {product.rating} / 5</p>
                <p className="text">Stock: {product.stock} unidades</p>
                
                <div> 
                    <p className="text">Peso: {product.weight}g</p>
                    <p className="text" >Dimensiones: {product.dimensions?.width} x {product.dimensions?.height} x {product.dimensions?.depth} cm</p>
                </div>
              </div>

            </div>
          </div>
        )}
      </SectionContainer>
    </div>
  );
};

export default ProductDetail;