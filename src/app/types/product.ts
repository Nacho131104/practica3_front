




export type  Producto = {
  id: number;
  thumbnail: string; // Imagen
  title: string;     // Título
  category: string;  // Categoría
  price: number;
}


export type ProductComplete = {
  id: number;
  title: string;
  description: string;
  price: number;
  discountPercentage: number;
  rating: number;
  stock: number;
  brand: string;
  category: string;
  thumbnail: string;
  images: string[];
}

export type ProductApi = {
  products: Producto[];
  total: number;
  skip: number;
  limit: number;

}