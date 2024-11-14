export interface ProductList {
    products: (Product)[] | [];
}
export interface Product {
    name: string;
    reference: string | '';
    description: string;
    price: number | 0;
    pictures: (string)[] | [];
}
