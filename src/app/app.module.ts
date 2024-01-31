import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UserModule } from './user/user.module';
import { SharedModule } from './shared/shared.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgxUiLoaderModule } from "ngx-ui-loader";
import { InterceptorsInterceptor } from './user/services/interceptors.interceptor';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    UserModule,
    SharedModule,
    NgxUiLoaderModule,
  ],
  providers: [{ provide: HTTP_INTERCEPTORS, useClass: InterceptorsInterceptor, multi: true },],
  bootstrap: [AppComponent]
})
export class AppModule { }
