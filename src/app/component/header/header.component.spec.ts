import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CartService } from 'src/app/shared/cart.service';

import { HeaderComponent } from './header.component';

describe('HeaderComponent', () => {
  let component: HeaderComponent;
  let fixture: ComponentFixture<HeaderComponent>;
  let cartServiceTest:CartService

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HeaderComponent ],
      providers:[CartService]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HeaderComponent);
    component = fixture.componentInstance;
    cartServiceTest=TestBed.inject(CartService)
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  // it('should call cartTotal once',()=>{
  //   let products:any=[
  //     {
  //       category: "fashion",
  //       description: "Your perfect pack for everyday use and walks in the forest. Stash your laptop (up to 15 inches) in the padded sleeve, your everyday",
  //       id: 1,
  //       image: "https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg",
  //       price: 109.95,
  //       quantity: 1,
  //       rating: {rate: 3.9, count: 120},
  //       title: "Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops",
  //       total: 109.95
  //     },
  //     {
  //       category: "fashion",
  //       description: "Your perfect pack for everyday use and walks in the forest. Stash your laptop (up to 15 inches) in the padded sleeve, your everyday",
  //       id: 2,
  //       image: "https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg",
  //       price: 109.95,
  //       quantity: 1,
  //       rating: {rate: 3.9, count: 120},
  //       title: "Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops",
  //       total: 109.95
  //     }
  //   ]
  //   spyOn(component.cartTotal,"cartTotal").and.callThrough
  //   component.cartList=products
  //   component.cartTotal()
  //   expect(cartTotal).toHaveBeenCalledTimes(1)
  // })

  // it('should add',()=>{ 
     
  //   let res=component.add(1,2)
  //   expect(res).toEqual(3);
     
  // })
});
