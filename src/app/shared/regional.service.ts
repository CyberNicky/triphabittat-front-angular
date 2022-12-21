import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from "@angular/core";
import { MatSnackBar } from '@angular/material/snack-bar';
import { SnackbarComponent } from './components/snackbar/snackbar.component';
import { DefaultCrudService } from './services/default-crud.service';

@Injectable ({
    providedIn: "root"

})

export class RegionalServices{
    private url = "https://servicodados.ibge.gov.br/api/v1/localidades/estados/"
    constructor(
        private http: HttpClient,
        public snackBar: MatSnackBar,
        private crudService: DefaultCrudService
    ){}

    async getStates(): Promise<any> {
      return new Promise((resolve, reject) => {
        this.http.get(this.url).subscribe(
          (res: any) => resolve(res),
          (rej: HttpErrorResponse) => {
            let errorMessage = rej.error?.message ?? rej.message;
  
            if (rej.error.message === undefined) {
              errorMessage =
                'Ocorreu algum erro interno, por favor tente novamente!';
            }
  
            this.snackBar.openFromComponent(SnackbarComponent, {
              duration: 8000,
              horizontalPosition: 'right',
              verticalPosition: 'top',
              panelClass: ['mat-toolbar', 'snackbar-danger'],
              data: {
                message: Array.isArray(errorMessage)
                  ? errorMessage[0]
                  : errorMessage,
              },
            });
  
            reject(rej)
          }
        )
      })
    }

    async getCities(regionalCode: string): Promise<any> {
        return new Promise((resolve, reject) => {
          const url = this.url + `${regionalCode}/distritos`
          this.http.get(url).subscribe(
            (res: any) => resolve(res),
            (rej: HttpErrorResponse) => {
              let errorMessage = rej.error?.message ?? rej.message;
    
              if (rej.error.message === undefined) {
                errorMessage =
                  'Ocorreu algum erro interno, por favor tente novamente!';
              }
    
              this.snackBar.openFromComponent(SnackbarComponent, {
                duration: 8000,
                horizontalPosition: 'right',
                verticalPosition: 'top',
                panelClass: ['mat-toolbar', 'snackbar-danger'],
                data: {
                  message: Array.isArray(errorMessage)
                    ? errorMessage[0]
                    : errorMessage,
                },
              });
    
              reject(rej)
            }
          )
        })
      }
}

