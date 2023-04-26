import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/shared/api.service';
import { CartService } from 'src/app/shared/cart.service';
import { WhislistService } from 'src/app/shared/whislist.service';
import { Products } from 'src/Models/products';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css'],
})
export class ProductsComponent implements OnInit {
  constructor(
    public apiService: ApiService,
    private cartService: CartService,
    private whishList: WhislistService
  ) {}
  productList: any = [];
  cartList: any = [];
  searchKey: string = '';
  filterProductCategory: any = [];
  cartListApi: any = [];

  ngOnInit(): void {
    console.log('called ngoninit');
    this.loadCartDetails();
    this.apiService.getProducts().subscribe((res) => {
      this.productList = res;
      this.filterProductCategory = res;

      this.productList.forEach((product: any) => {
        if (
          product.category === "men's clothing" ||
          product.category === "women's clothing"
        ) {
          product.category = 'fashion';
        }
        Object.assign(product, { quantity: 1, total: product.price,wishListed:this.wishListitemExists});
      });
    });
    this.cartService.searchString.subscribe((res: string) => {
      this.searchKey = res;
    });
  }
  wishListButtonClicked:boolean=false
  itemPresent:any
  wishListitemExists=false
  // public addToWishList(item){
  //   this.whishList.getCartDetails().subscribe((wishList)=>{
      
  //     for(let wishListItem of wishList){
  //       if(wishListItem.id===item.id){
  //         this.wishListitemExists=true
  //         alert('item already present in the wish List');
  //       }
  //     }
      
  //     if(!this.wishListitemExists){
  //       this.whishList.addToWishlist(item).subscribe((res)=>{
  //         alert('added to wishlist')
  //       }
  //       )
  //     }
  //   })
 
  // }
  public addToWishList(item){
    item.wishListed=true
    this.whishList.addToWishlist(item).subscribe(()=>{
    }
    )
  }
  public removeFromWishList(item){
    item.wishListed=false
    this.whishList.removeFromWishList(item).subscribe(()=>{
    })

  }

  loadCartDetails(): any {
    this.cartService.getCartDetailsApi().subscribe((res) => {
      this.cartListApi = res;
      console.log(this.cartList);
    });
    return this.cartListApi;
  }

  showIteamPresentInCart: boolean = false;

  addToCart(product: Products) {
    this.cartService.getCartDetailsApi().subscribe((res) => {
      console.log(res);
      this.cartListApi = res;
      let prodExists = false;
      for (let i in this.cartListApi) {
        if (product.id === this.cartListApi[i].id) {
          console.log('present');
          this.cartListApi[i].quantity++;
          this.cartService
            .updateCartApi(this.cartListApi[i])
            .subscribe((res) => {
              this.cartService.getCartDetailsApi().subscribe((res) => {
                this.cartList = res;
                this.cartService.getGrandTotal();
                this.cartService.prodList.next(this.cartList);
              });
            });
          prodExists = true;
        }
      }
      if (!prodExists) {
        this.cartService.addToCartApi(product).subscribe((res) => {
          this.cartService.getCartDetailsApi().subscribe((res) => {
            this.cartList = res;
            this.cartService.getGrandTotal();
            this.cartService.prodList.next(this.cartList);
          });
        });
      }
    });
  }

  filterCategory(category) {
    if (category === '') {
      this.filterProductCategory = this.productList;
      return this.filterProductCategory;
    }
    this.filterProductCategory = this.productList.filter((product) => {
      return product.category === category;
    });
    console.log(this.filterProductCategory);
  }
}
