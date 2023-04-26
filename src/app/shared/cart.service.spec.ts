import { TestBed } from '@angular/core/testing';

import { CartService } from './cart.service';

describe('CartService', () => {
  let service: CartService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CartService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
  
  it('Initial value of cartList should be empty',()=>{
    expect(0).toEqual(service.cartList.length);
  })
  // it('Expect Grand total method to return a number',()=>{
  //   expect(service.getGrandTotal()).toEqual(0)
  // })
});
