import { NgModule }  from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FaunaComponent }   from './components/datos/fauna/fauna.component';
import { FloraComponent }   from './components/datos/flora/flora.component';
import { DatosComponent }   from './components/datos/datos.component';

const routes: Routes = [
  { path: '', redirectTo: ' /datos', pathMatch: 'full' },
  { path: 'fauna', component:  FaunaComponent },
  { path: 'flora', component: FloraComponent },
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}
