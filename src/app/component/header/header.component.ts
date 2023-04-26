import { Component, OnInit } from '@angular/core';
import { CartService } from 'src/app/shared/cart.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  
  cartList:any=[]
  public cartLength:number=0
  searchString:string=''
 

  constructor(private cartService:CartService) { }
 
  ngOnInit(): void {
    let tot=0
    this.cartService.getCartDetailsApi().subscribe((res)=>{
      this.cartService.prodList.next(res)
      this.cartService.getProducts().subscribe((res:[])=>{
        this.cartList=res;
        this.cartTotal()
      })
    })
  }
  search(){
    this.cartService.searchString.next(this.searchString)
  }

  cartTotal():any{
    let total=0
    this.cartList.map((res:any)=>{
      total+=res.quantity
    })
    this.cartLength=total;
    console.log(total)
  }
}
