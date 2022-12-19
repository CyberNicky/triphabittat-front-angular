import { HomeComponent } from './components/home/home.component';
import { DestinationDetailsComponent } from './components/destination-details/destination-details.component';
import { DestinationComponent } from './components/destination/destination.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
const routes: Routes = [
  {
    path: '',
    component: LoginComponent,
    data: {
      hasSystemBar: false,
    }
  },
  {
    path: 'register',
    component: RegisterComponent,
    data: {
      hasSystemBar: false,
    }
  },
  {
    path: 'home',
    component: HomeComponent,
    data: {
      hasSystemBar: true,
    }
  },
  {
    path: 'avaliation-destinations',
    component: DestinationDetailsComponent,
    data: {
      hasSystemBar: true,
    }
  },
  {
    path: 'destinos',
    component: DestinationComponent,
    data: {
      hasSystemBar: true,
    }
  }
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
