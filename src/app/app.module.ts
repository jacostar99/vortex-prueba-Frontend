import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {HttpClientModule} from '@angular/common/http'
import {FormsModule} from '@angular/forms'
import { AngularFireModule } from '@angular/fire';
import { AngularFireAuthModule } from '@angular/fire/auth';


//RUTAS
import { APP_ROUTING } from './app-routing.module';


//SERVICIOS
import { EstrenosService } from './services/estrenos.service';
import { UsuariosService } from './services/usuarios.service';




//COMPONENTES
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/compartido/navbar/navbar.component';
import { RegistroComponent } from './components/registro/registro.component';
import { LoginComponent } from './components/login/login.component';
import { EstrenoComponent } from './components/estreno/estreno.component';
import { CarteleraComponent } from './components/cartelera/cartelera.component';
import { MetodoDePagoComponent } from './components/metodo-de-pago/metodo-de-pago.component';
import { CompraUComponent } from './components/compra-u/compra-u.component';
import { PerfilUComponent } from './components/perfil-u/perfil-u.component';
import { FooterComponent } from './components/compartido/footer/footer.component';
import { InfoEstrenoComponent } from './components/info-estreno/info-estreno.component';
import { UsuariosComponent } from './components/usuarios/usuarios.component';
import { PeliculasComponent } from './components/peliculas/peliculas.component';
import { FormComponent } from './components/usuarios/form.component';
import { environment } from 'src/environments/environment';
import { FormPeliComponent } from './components/peliculas/form-peli.component';
import { FormMetodoComponent } from './components/metodo-de-pago/form-metodo.component';
import { CompraComponent } from './components/cartelera/compra.component';



@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    RegistroComponent,
    LoginComponent,
    EstrenoComponent,
    CarteleraComponent,
    MetodoDePagoComponent,
    CompraUComponent,
    PerfilUComponent,
    FooterComponent,
    InfoEstrenoComponent,
    UsuariosComponent,
    PeliculasComponent,
    FormComponent,
    FormPeliComponent,
    FormMetodoComponent,
    CompraComponent

  ],
  imports: [
    BrowserModule,
    APP_ROUTING,
    HttpClientModule,
    FormsModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),
    AngularFireAuthModule

  ],
  providers: [
    EstrenosService,
    UsuariosService


  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
