import { Component, OnInit } from '@angular/core';

import { ApiService } from 'src/app/shared/api.service';
import { CartService } from 'src/app/shared/cart.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css'],
})
export class CartComponent implements OnInit {
  constructor(
    private cartService: CartService,
    private apiService: ApiService
  ) {}
  cartLength: number = 0;
  cartList: any = [];
  public grandTotal: number = 0;
  cartListApi: any = [];

  ngOnInit(): void {
    this.cartService.getCartDetailsApi().subscribe((res: []) => {
      this.cartList = res;
      this.cartService.getGrandTotal();
      this.cartService.cartGrandTotal.subscribe((res) => {
        console.log(res);
        this.grandTotal = res;
      });
      console.log(this.grandTotal);
    });
  }



  deleteItemFromCart(item: any) {
    console.log(typeof item);
    this.cartService.removeItemFromCartApi(item).subscribe((res) => {
      this.cartService.getCartDetailsApi().subscribe((res) => {
        this.cartList = res;
        this.cartService.prodList.next(res);
      });
    });
  }

  msg = '';
  update(item: any) {
    this.cartService.updateCartApi(item).subscribe((res) => {
      this.cartService.getCartDetailsApi().subscribe((cartItems) => {
        this.cartService.getGrandTotal();
        this.cartList = cartItems;
      });
    });
  }

  emptyCart() {
    for(let item of this.cartList){
      this.cartService.removeItemFromCartApi(item).subscribe((res)=>{
        this.cartService.getCartDetailsApi().subscribe((res)=>{
          this.cartService.prodList.next(res)
        })
        this.ngOnInit()
      })
    }
}
}
