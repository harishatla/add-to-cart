import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Products } from 'src/Models/products';
 

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  rootUrl:any='http://localhost:3000/products'
  rootUrlCart:any='https://fakestoreapi.com/carts'
  

  constructor(private http:HttpClient) { }

  public getProducts():Observable<Products[]>{
    console.log('called getProducts');
    return this.http.get<Products[]>(this.rootUrl);
  }
}
