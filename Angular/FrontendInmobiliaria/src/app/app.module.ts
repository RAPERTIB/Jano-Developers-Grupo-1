import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './public/header/header.component';
import { NavbarComponent } from './public/navbar/navbar.component';
import { FooterComponent } from './public/footer/footer.component';
import { IndexComponent } from './public/index/index.component';
import { ErrorComponent } from './public/error/error.component';
import { HttpClientModule } from '@angular/common/http';
import { AdminComponent } from './modelos/seguridad/admin/admin.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    NavbarComponent,
    FooterComponent,
    IndexComponent,
    ErrorComponent,
    AdminComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
