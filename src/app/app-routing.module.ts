import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CartComponent } from './component/cart/cart.component';
import { ProductsComponent } from './component/products/products.component';

const routes: Routes = [
  {
    path:'allProducts',
    component:ProductsComponent
  },
  {
    path:'cart',
    component:CartComponent
  },
  {
    path: 'authentication',
    loadChildren:()=>import('./modules/authentication/authentication.module').then(m=>m.AuthenticationModule)
  },
  {
    path:'',
    component:ProductsComponent,
  },
  //{ path: 'module', loadChildren: () => import('./modules/login/login.module').then(m => m.LoginModule) },
  
  //{ path: 'authentication', loadChildren: () => import('./modules/authentication/authentication.module').then(m => m.AuthenticationModule) }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
