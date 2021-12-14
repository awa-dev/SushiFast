import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { HeaderComponent } from './components/header/header.component';
import { HttpClientModule } from '@angular/common/http';
import { PlateauxComponent } from './components/plateaux/plateaux.component';
import { FooterComponent } from './components/footer/footer.component';
import { BoxesService } from './service/boxes/boxes.service';
import { RgpdComponent } from './components/rgpd/rgpd.component';





@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    HeaderComponent,
    PlateauxComponent,
    FooterComponent,
    RgpdComponent,
   
   
   
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [
    BoxesService,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
