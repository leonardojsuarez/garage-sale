export interface ProductList {
    products: (Product)[] | [];
}
export interface Product {
    name: string;
    description: string;
    price: number | 0;
    main_image: string;
    pictures: (string)[] | [];
}
