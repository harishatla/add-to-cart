import { HttpClient } from '@angular/common/http';
import { isNgTemplate } from '@angular/compiler';
import { Injectable, IterableDiffers } from '@angular/core';
import { BehaviorSubject, Observable, of } from 'rxjs';
import {filter, map} from 'rxjs/operators'
import { Products } from 'src/Models/products';
 
 

@Injectable({
  providedIn: 'root'
})
  export class CartService {
  

  cartList:any=[];
  prodList:any=new BehaviorSubject<any>([])
  searchString:any=new BehaviorSubject<string>('')
  cartGrandTotal:any=new BehaviorSubject<number>(0)
  rootUrlCart:any='http://localhost:3000/cart'  
  rootUrlWishlist='http://localhost:3000/wishlist'
  cartListApi:any=[]

  ngOnInit(){
  }
  
  constructor(private http:HttpClient) { 
  }
  
  getProducts():Observable<any>{
    return this.prodList.asObservable();
  }

 //*******Add to cart Using array use case */  
  addToCart(product:any):any{
    let prodExists=false;
     for(let i in this.cartList){
      if(this.cartList.length===0){
        this.cartList.push(product)
        this.getGrandTotal()
        this.prodList.next(this.cartList)
      }
      if(this.cartList[i].id===product.id ){
        this.cartList[i].quantity++;
        // this.cartList[i]=product  
        this.getGrandTotal()
        this.prodList.next(this.cartList)
        prodExists=true;
      }
       
     }
    if(!prodExists){
      this.cartList.push(product)
      this.getGrandTotal()
      this.prodList.next(this.cartList)
    }
  }

  
  updateCart(product:any):any{
    console.log(product);
    for(let i in this.cartList){
      if(this.cartList[i].id===product.id){
        this.cartList[i].quantity=product.quantity
        this.getGrandTotal()
        this.prodList.next(this.cartList)   
      // this.prodList.next(this.cartList)
      // this.getGrandTotal()
      return this.cartList[i]
      }
      return 0
      
    }
  }

  removeItemFromCart(item:any):any{
    for(let i=0;i<this.cartList.length;i++){
      // console.log(i,this.cartList[i].id,item.id)
      if(this.cartList[i].id===item.id){
        console.log(` index id ${i},
                      CartList index Id ${this.cartList[i].id},
                      delete item index id ${item.id}`)
        var splices=this.cartList.splice(i,1)
      }
    }

    this.prodList.next(this.cartList)
    return splices
  }

  emptyCart(){
    this.cartList=[];
    this.prodList.next(this.cartList)
  }

  getGrandTotal(){
    let grandTotal1:number=0 
    // this.cartList.forEach((cartItem:any)=>{
    //    grandTotal+=cartItem.total*cartItem.quantity
    // })
    this.getCartDetailsApi().subscribe((res)=>{
      let grandTotal:number=0 
       this.cartList=res
       this.cartList.forEach((cartItem:any)=>{
        grandTotal+=cartItem.total*cartItem.quantity
       })
       console.log(grandTotal)
       this.cartGrandTotal.next(grandTotal)
    })
  }
  public getCartDetails():Observable<any>{
    return this.http.get(this.rootUrlCart);
  }


 //************Api integration methods from here */
  public getCartDetailsApi():Observable<any>{
    return this.http.get(this.rootUrlCart).pipe(map((res)=>{
      console.log(res);
      return res
    }))

  }
   public addToCartApi(product:any):Observable<Products>{
       return this.http.post<Products>(this.rootUrlCart,product)
  }
  public updateCartApi(product:any):Observable<Products>{
    console.log(typeof product);
    return this.http.put<Products>(`${this.rootUrlCart}/${product.id}/`,product)
  }
  public getCartApiId(product:any):Observable<Products>{
    console.log(product);
    return this.http.get<Products>(`this.rootUrlCart/${1}`)
  }
  public removeItemFromCartApi(item):Observable<any>{
    return this.http.delete<any>(`${this.rootUrlCart}/${item.id}/`)
  }
  public emptyCartApi(cartList:Products[]){
    let cartIds=cartList.map((cartItem)=>{
      return cartItem.id
    })
    console.log(cartIds)
    for(let id of cartIds){
      console.log(id)
      this.http.delete(`${this.rootUrlCart}/${id}`)
    }
  }
  public addToWishlist(item):Observable<any>{
    return this.http.post<any>(this.rootUrlWishlist,item)
  }

}
