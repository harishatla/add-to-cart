import { HttpClientModule } from '@angular/common/http';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { of } from 'rxjs';
import { FilterPipe } from 'src/app/pipes/filter.pipe';
import { CartService } from 'src/app/shared/cart.service';
 

import { ProductsComponent } from './products.component';

describe('ProductsComponent', () => {
  let component: ProductsComponent;
  let fixture: ComponentFixture<ProductsComponent>;
  let component1:ProductsComponent
  let mockApiService
  let mockCartService
  let products:any=[
    {
      category: "fashion",
      description: "Your perfect pack for everyday use and walks in the forest. Stash your laptop (up to 15 inches) in the padded sleeve, your everyday",
      id: 1,
      image: "https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg",
      price: 109.95,
      quantity: 1,
      rating: {rate: 3.9, count: 120},
      title: "Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops",
      total: 109.95
    },
    {
      category: "fashion",
      description: "Your perfect pack for everyday use and walks in the forest. Stash your laptop (up to 15 inches) in the padded sleeve, your everyday",
      id: 2,
      image: "https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg",
      price: 109.95,
      quantity: 1,
      rating: {rate: 3.9, count: 120},
      title: "Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops",
      total: 109.95
    }
  ]
  let product={
    category: "fashion",
      description: "Your perfect pack for everyday use and walks in the forest. Stash your laptop (up to 15 inches) in the padded sleeve, your everyday",
      id: 2,
      image: "https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg",
      price: 109.95,
      quantity: 1,
      rating: {rate: 3.9, count: 120},
      title: "Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops",
      total: 109.95
  }

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProductsComponent,FilterPipe ],
      imports:[HttpClientModule],
      providers:[CartService]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductsComponent);
    component = fixture.componentInstance;
    
    mockCartService=jasmine.createSpyObj(['addToCart','cartList'])
     mockApiService=jasmine.createSpyObj(['products'])
    // component1=new ProductsComponent(mockApiService,mockCartService)
    fixture.detectChanges();

  });
  it('test add to cart',()=>{
    mockCartService.addToCart.and.returnValue(of(true));
    //let len=mockCartService.cartList.length
     component1.addToCart(products[1])
     expect(mockCartService.addToCart).toHaveBeenCalledTimes(1)
  })

  it('hjj',()=>{
    mockCartService.addToCart.and.returnValue(of(true));
    component1.addToCart(products[1]) 
    console.log(mockCartService.cartList.length)
  })


  // it('should create', () => {
  //   expect(component).toBeTruthy();
  // });
  
});
