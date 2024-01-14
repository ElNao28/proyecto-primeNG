import { ViewProductPageComponent } from './pages/view-product-page/view-product-page.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LayoutPageComponent } from './pages/layout-page/layout-page.component';
import { InicioComponent } from './pages/inicio/inicio.component';
import { CardPageComponent } from './pages/card-page/card-page.component';
import { MyShoppingPageComponent } from './pages/my-shopping-page/my-shopping-page.component';
import { ViewProductsPageComponent } from './pages/view-products-page/view-products-page.component';
import { CustomerSupportComponent } from './pages/customer-support/customer-support.component';
import { LoginComponent } from './pages/login/login.component';
import { CreateAcountComponent } from './pages/create-acount/create-acount.component';
import { RecoverPasswordComponent } from './pages/recover-password/recover-password.component';

const routes: Routes = [
  {
    path:'',
    component: LayoutPageComponent,
    children:[
      {
        path:'Inicio',
        component:InicioComponent
      },
      {
        path:'carrito',
        component:CardPageComponent
      },
      {
        path:'mis-compras',
        component:MyShoppingPageComponent
      },
      {
        path:'atencion-cliente',
        component:CustomerSupportComponent
      },
      {
        path:'productos',
        component:ViewProductsPageComponent,
      },
      {
        path:'view/:id',
        component:ViewProductPageComponent
      },
      {
        path:'login',
        component:LoginComponent
      },
      {
        path:'crear-cuenta',
        component:CreateAcountComponent
      },
      {
        path:'recuperar-contraseña',
        component:RecoverPasswordComponent
      },
      {
        path:'**',
        redirectTo:'Inicio'
      },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UserRoutingModule { }
