import { HomeComponent } from './components/home/home.component';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RegisterComponent } from './components/register/register.component';
import { LoginComponent } from './components/login/login.component';
import { LoginFormComponent } from './components/login/login-form/login-form.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RegisterFormComponent } from './components/register/register-form/register-form.component';
import { MaterialModule } from './shared/material.module';
import { SnackbarComponent } from './shared/components/snackbar/snackbar.component';
import { DefaultCrudService } from './shared/services/default-crud.service';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { DestinationComponent } from './components/destination/destination.component';
import { DestinationDetailsComponent } from './components/destination-details/destination-details.component';
import { AuthGuardService } from './authentication/auth-guard.service';
import { JwtHelperService } from '@auth0/angular-jwt';
import { TokenInterceptor } from './interceptors/token.interceptor';
import { MatMenuModule} from '@angular/material/menu';
import { CreateCardComponent } from './components/create-card/create-card.component';
import { EditCardsComponent } from './components/edit-cards/edit-cards.component';
import { DeleteCardsComponent } from './components/delete-cards/delete-cards.component';


@NgModule({
  declarations: [
    AppComponent,
    RegisterComponent,
    LoginComponent,
    LoginFormComponent,
    RegisterFormComponent,
    SnackbarComponent,
    DestinationDetailsComponent,
    DestinationComponent,
    HomeComponent,
    CreateCardComponent,
    EditCardsComponent,
    DeleteCardsComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    MaterialModule,
    HttpClientModule,
    MatMenuModule

  ],
  providers: [
    JwtHelperService,
    AuthGuardService,
    DefaultCrudService,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: TokenInterceptor,
      multi: true,
    },
  ],
  bootstrap: [AppComponent],
  entryComponents: [DeleteCardsComponent]
})
export class AppModule {}
