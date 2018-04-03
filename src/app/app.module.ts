import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { FormsModule } from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';

//Imports para usar RealTime DB:
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { AngularFireModule } from 'angularfire2';

//Import de la conexión con Firebase:
import { environment } from '../environments/environment';

//Import de los Componentes (components):
import { DatosComponent } from './components/datos/datos.component';
import { FaunaListComponent } from './components/datos/fauna-list/fauna-list.component';
import { FloraListComponent } from './components/datos/flora-list/flora-list.component';
import { FaunaComponent } from './components/datos/fauna/fauna.component';
import { FloraComponent } from './components/datos/flora/flora.component';


//Import de los Servicios (services):
import { FaunaService } from './services/fauna.service';
import { FloraService } from './services/flora.service';

//Import del Toastr:
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToastrModule } from 'ngx-toastr';


@NgModule({
  declarations: 
  [
    AppComponent,
    DatosComponent,
    FaunaComponent,
    FloraComponent,
    FaunaListComponent,
    FloraListComponent
  ],
  imports: 
  [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    
    //Para RealTime DB:
    AngularFireDatabaseModule,
    AngularFireModule.initializeApp(environment.firebase),
	   FormsModule,
    ToastrModule.forRoot(),
    BrowserAnimationsModule
  ],
  providers: [FaunaService, FloraService],
  bootstrap: [AppComponent]
})

export class AppModule { }