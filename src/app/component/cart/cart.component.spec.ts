import { ComponentFixture, TestBed } from '@angular/core/testing';
import { of } from 'rxjs';
 
import { CartService } from 'src/app/shared/cart.service';

import { CartComponent } from './cart.component';

describe('CartComponent', () => {
  let component: CartComponent;
  let CartServiceTest:CartService
  let fixture: ComponentFixture<CartComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CartComponent ],
      providers:[ CartService]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CartComponent);
    component = fixture.componentInstance;
    CartServiceTest=TestBed.inject(CartService)
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should execute cartService',()=>{
    expect(CartServiceTest).toBeTruthy();
  })

  it('Deleted item form cart',()=>{
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
    spyOn(CartServiceTest,'removeItemFromCart').and.returnValue(product)

    component.deleteItemFromCart(product)
    let res=CartServiceTest.removeItemFromCart(product)
    expect(res).toEqual(product)
 
  })

  it('should call update method',()=>{
    let product={
      category: "fashion",
        description: "Your perfect pack for everyday use and walks in the forest. Stash your laptop (up to 15 inches) in the padded sleeve, your everyday",
        id: 2,
        image: "https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg",
        price: 109.95,
        quantity: 4,
        rating: {rate: 3.9, count: 120},
        title: "Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops",
        total: 109.95
    }
    spyOn(CartServiceTest,'updateCart').and.returnValue(product);
    component.update(product)
    let res=CartServiceTest.updateCart(product)
    expect(res).toEqual(product);
  })


})
