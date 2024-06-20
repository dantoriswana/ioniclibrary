import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';  // Impor HttpClientModule untuk layanan HTTP

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';

@NgModule({
  declarations: [AppComponent],  // Deklarasi AppComponent
  imports: [
    BrowserModule,  // Impor BrowserModule untuk menjalankan aplikasi di browser web
    IonicModule.forRoot(),  // Inisialisasi Ionic dengan konfigurasi default
    AppRoutingModule,  // Impor AppRoutingModule untuk rute aplikasi
    HttpClientModule  // Impor HttpClientModule untuk menggunakan layanan HTTP
  ],
  providers: [{ provide: RouteReuseStrategy, useClass: IonicRouteStrategy }],  // Menyediakan IonicRouteStrategy sebagai strategi reuse rute
  bootstrap: [AppComponent],  // Bootstrap aplikasi dengan AppComponent
})
export class AppModule {}
