import { ActivationEnd, Router } from '@angular/router';
import { Component, ViewChildren } from '@angular/core';
import { MatSidenav } from '@angular/material/sidenav';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'triphabitat-project-front';
  showFiller = false;
  @ViewChildren('drawer') drawer!: MatSidenav;
  public isUserLogged!: boolean;
  constructor(public router: Router) {
    this.updateSystemBar();
  }
  updateSystemBar(): void {
    this.router.events.subscribe((event) => {
      if (event instanceof ActivationEnd) {
        this.isUserLogged = event.snapshot.data['hasSystemBar'] as boolean;
      }
    });
  }
  onLogout() {
    sessionStorage.setItem('access_token', '');
    sessionStorage.setItem('user', '');
    this.router.navigate(['']);
  }
}
