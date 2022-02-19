import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { RgpdComponent } from './components/rgpd/rgpd.component';
import { PanierComponent } from './components/panier/panier.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'rgpd', component: RgpdComponent },
  { path: 'panier', component: PanierComponent},
  
 

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
