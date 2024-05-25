type Product = {
  id: number;
  imagen: string;
  nombre: string;
  descripcion: string;
  precioNormal: number;
  precioDescuento: number;
  unidades: number;
  stock: boolean;
};

type Cart = {
  cartId?: Number;
  userId: Number;
  resourceId: Number;
  resources?: Resource
};

type Resource = {
  resourceId: Number;
  userId: Number;
  resourceName: String;
  resource_name_data: String;
  description: String;
  category: String;
  state: String;
  available: boolean;
  price: Number;
  offer_price: Number;
  images: string[];
};

type Images = {
  imageId: Number;
  resourceId: Number;
  image: String;
};
