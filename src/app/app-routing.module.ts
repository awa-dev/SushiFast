import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { PlateauxComponent } from './components/plateaux/plateaux.component';
import { RgpdComponent } from './components/rgpd/rgpd.component';


const routes: Routes = [
  { path: '', component: HomeComponent },
	{ path: 'plateaux', component: PlateauxComponent },
  { path: 'rgpd', component: RgpdComponent },
  
 

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
