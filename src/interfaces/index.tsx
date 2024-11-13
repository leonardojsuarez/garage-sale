export interface ProductList {
    products: (Product)[] | [];
}
export interface Product {
    name: string;
    description: string;
    price?: number | 0;
    pictures: (string)[] | [];
}
