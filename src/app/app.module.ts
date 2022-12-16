import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RegisterComponent } from './components/register/register.component';
import { LoginComponent } from './components/login/login.component';
import { LoginFormComponent } from './components/login/login-form/login-form.component';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';
import { RegisterFormComponent } from './components/register/register-form/register-form.component';
import { MaterialModule } from './shared/material.module';
import { SnackbarComponent } from './shared/components/snackbar/snackbar.component';
import { DefaultCrudService } from './shared/services/default-crud.service';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    RegisterComponent,
    LoginComponent,
    LoginFormComponent,
    RegisterFormComponent,
    SnackbarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    MaterialModule,
    HttpClientModule

  ],
  providers: [DefaultCrudService],
  bootstrap: [AppComponent]
})
export class AppModule { }
