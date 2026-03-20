export type Producto =  {
  id: number;
  title: string;
  price: number;
  category: string;
  thumbnail: string;
  description?: string;
  discountPercentage?: number;
  rating?: number;
  stock?: number;
  brand?: string;
  images?: string[];
  dimensions?: {
    width: number;
    height: number;
    depth: number;
  };
  weight?: number;
}

export type ProductApi =  {
  products: Producto[];
  total: number;
  skip: number;
  limit: number;
}