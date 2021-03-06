import { BrowserModule } from '@angular/platform-browser';
import { NgModule, LOCALE_ID } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { RouterModule, Routes } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatDatepickerModule } from '@angular/material';
import { MatMomentDateModule } from '@angular/material-moment-adapter';

import { registerLocaleData } from '@angular/common';
import localeES from '@angular/common/locales/es';

registerLocaleData(localeES, 'es');

/* COMPONENTES */
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { DirectivaComponent } from './directiva/directiva.component';
import { ClientesComponent } from './clientes/clientes.component';
import { FormComponent } from './clientes/form.component';

/* SERVICIOS */
import { ClienteService } from './clientes/cliente.service';
import { PaginatorComponent } from './paginator/paginator.component';
import { DetalleComponent } from './clientes/detalle/detalle.component';
import { LoginComponent } from './usuarios/login.component';


const routes:Routes = [
  {path:'', redirectTo:'/clientes', pathMatch:'full'},
  {path:'directivas', component:DirectivaComponent},
  {path:'clientes', component:ClientesComponent},
  {path:'clientes/page/:page', component:ClientesComponent},
  {path:'clientes/form', component:FormComponent},
  {path:'clientes/form/:id', component:FormComponent},
  {path:'login', component:LoginComponent}
];

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    DirectivaComponent,
    ClientesComponent,
    FormComponent,
    PaginatorComponent,
    DetalleComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    RouterModule.forRoot(routes),
    BrowserAnimationsModule,
    MatDatepickerModule,
    MatMomentDateModule
  ],
  providers: [ClienteService, { provide: LOCALE_ID, useValue: 'es' }],
  bootstrap: [AppComponent]
})
export class AppModule { }
