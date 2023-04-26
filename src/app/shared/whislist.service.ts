import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class WhislistService {
  
  constructor(private http:HttpClient) { }

  rootUrlWishlist='http://localhost:3000/wishlist'

  public getCartDetails():Observable<any>{
    return this.http.get<any>(this.rootUrlWishlist)
  }
  
  public addToWishlist(item):Observable<any>{
    return this.http.post<any>(this.rootUrlWishlist,item)
  }
  public removeFromWishList(item){
    return this.http.delete<any>(`${this.rootUrlWishlist}/${item.id}`)
  }
}
