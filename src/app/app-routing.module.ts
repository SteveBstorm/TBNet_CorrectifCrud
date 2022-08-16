import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AjoutComponent } from './components/ajout/ajout.component';
import { DetailComponent } from './components/detail/detail.component';
import { ListeComponent } from './components/liste/liste.component';
import { MajComponent } from './components/maj/maj.component';

const routes: Routes = [
  {path : "", redirectTo : 'liste', pathMatch : 'full'},
  {path : "liste", component : ListeComponent},
  {path : "detail/:id", component : DetailComponent},
  {path : "ajout", component : AjoutComponent},
  {path : "maj/:id", component : MajComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
