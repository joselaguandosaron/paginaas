import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { PagosComponent } from './components/pagos/pagos.component';
import { DolarComponent } from './dolar/dolar.component';
const routes: Routes = [
  { path: '', component: HomeComponent },
  { path:'pagos',component:PagosComponent},
  { path:'dolar',component:DolarComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
