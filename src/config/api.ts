import { environment } from "src/environments/environment"
 

export const baseUrl = environment.production?'https://localhost:3000/products':'http://localhost:3000/products';
export const productsUrl= baseUrl+ '/products';
export const cartsUrl=baseUrl+ '/carts'

 