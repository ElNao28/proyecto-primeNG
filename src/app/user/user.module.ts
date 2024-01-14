import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UserRoutingModule } from './user-routing.module';
import { InicioComponent } from './pages/inicio/inicio.component';
import { LayoutPageComponent } from './pages/layout-page/layout-page.component';
import { CardPageComponent } from './pages/card-page/card-page.component';
import { ViewProductsPageComponent } from './pages/view-products-page/view-products-page.component';
import { ViewProductPageComponent } from './pages/view-product-page/view-product-page.component';
import { MyShoppingPageComponent } from './pages/my-shopping-page/my-shopping-page.component';
import { PrimerNgModule } from '../primer-ng/primer-ng.module';
import { CustomerSupportComponent } from './pages/customer-support/customer-support.component';
import { LoginComponent } from './pages/login/login.component';
import { CreateAcountComponent } from './pages/create-acount/create-acount.component';
import { RecoverPasswordComponent } from './pages/recover-password/recover-password.component';

@NgModule({
  declarations: [
    InicioComponent,
    LayoutPageComponent,
    CardPageComponent,
    ViewProductsPageComponent,
    ViewProductPageComponent,
    MyShoppingPageComponent,
    CustomerSupportComponent,
    LoginComponent,
    CreateAcountComponent,
    RecoverPasswordComponent,
  ],
  imports: [
    CommonModule,
    UserRoutingModule,
    PrimerNgModule,
  ]
})
export class UserModule { }
