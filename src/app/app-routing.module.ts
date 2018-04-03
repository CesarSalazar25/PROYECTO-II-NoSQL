import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FaunaComponent }   from './components/datos/fauna/fauna.component';
import { FloraComponent }      from './components/datos/flora/flora.component';

const routes: Routes = [
  { path: '', redirectTo: ' https://cesarsalazar25.github.io/datos', pathMatch: 'full' },
  { path: ' https://cesarsalazar25.github.io/fauna', component:  FaunaComponent },
  { path: ' https://cesarsalazar25.github.io/flora', component: FloraComponent },
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}
