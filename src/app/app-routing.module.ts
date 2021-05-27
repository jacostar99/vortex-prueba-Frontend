import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CarteleraComponent } from './components/cartelera/cartelera.component';
import { CompraComponent } from './components/cartelera/compra.component';
import { CompraUComponent } from './components/compra-u/compra-u.component';
import { EstrenoComponent } from './components/estreno/estreno.component';
import { InfoEstrenoComponent } from './components/info-estreno/info-estreno.component';
import { LoginComponent } from './components/login/login.component';
import { FormMetodoComponent } from './components/metodo-de-pago/form-metodo.component';
import { MetodoDePagoComponent } from './components/metodo-de-pago/metodo-de-pago.component';
import { FormPeliComponent } from './components/peliculas/form-peli.component';
import { PeliculasComponent } from './components/peliculas/peliculas.component';
import { PerfilUComponent } from './components/perfil-u/perfil-u.component';
import { RegistroComponent } from './components/registro/registro.component';
import { FormComponent } from './components/usuarios/form.component';
import { UsuariosComponent } from './components/usuarios/usuarios.component';
import { GuardAccesoGuard } from './guardianes/guard-acceso.guard';

const ROUTES: Routes = [

  { path: 'proximos-estrenos', component: EstrenoComponent},
  { path: 'compra', component: CompraComponent},
  { path: 'info-estreno/:id', component: InfoEstrenoComponent},
  { path: 'cartelera', component: CarteleraComponent},
  { path: 'registro', component: RegistroComponent },
  { path: 'usuarios', component: UsuariosComponent },
  { path: 'usuarios/form', component: FormComponent },
  { path: 'usuarios/form/:userId', component: FormComponent },
  { path: 'admin-peliculas', component: PeliculasComponent },
  { path: 'admin-peliculas/form', component: FormPeliComponent },
  { path: 'admin-peliculas/form/:peliId', component: FormPeliComponent },
  { path: 'metodos-de-pago', component: MetodoDePagoComponent },
  { path: 'metodos-de-pago/form', component: FormMetodoComponent },
  { path: 'metodos-de-pago/form/:pagoId', component: FormMetodoComponent },
  { path: 'mi-perfil', component: PerfilUComponent },
  { path: 'mis-compras', component: CompraUComponent },
  { path: 'login', component: LoginComponent },
  // { path: 'compras-de-usuarios', component: LoginComponent },

  { path: '**', pathMatch: 'full', redirectTo: 'login' }


];


export const   APP_ROUTING = RouterModule.forRoot(ROUTES);