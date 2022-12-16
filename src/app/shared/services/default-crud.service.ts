/* eslint-disable @typescript-eslint/no-unsafe-assignment,
@typescript-eslint/no-unsafe-member-access,
@typescript-eslint/explicit-module-boundary-types */
import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { MatSnackBar } from '@angular/material/snack-bar';
import { SnackbarComponent } from '../components/snackbar/snackbar.component';

@Injectable({
  providedIn: 'root',
})
export class DefaultCrudService {
  private url = 'http://localhost:8080/api/v1/';
  constructor(
    private http: HttpClient,
    public snackBar: MatSnackBar,
  ) { }

  getFullEndPoint(endPoint: string, dynamicUrl?: string): string {
    const url = dynamicUrl ? dynamicUrl : this.url;

    return `${url}${endPoint}`;
  }

  httpGet(endPoint: string, dynamicUrl?: string): Promise<any> {
    return new Promise((resolve, reject) => {
      const url = this.getFullEndPoint(endPoint, dynamicUrl);
      this.http.get(url).subscribe(
          (res: any) => {
            resolve(res);
          },
          (rej: HttpErrorResponse) => {
            console.log(rej)
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
            reject(rej);
          }
        );
    });
  }

  httpDelete(endPoint: string, dynamicUrl?: string): Promise<any> {
    return new Promise((resolve, reject) => {
      const url = this.getFullEndPoint(endPoint, dynamicUrl);
      this.http.delete(url).subscribe(
        (res: any) => {
          this.snackBar.openFromComponent(SnackbarComponent, {
            duration: 8000,
            horizontalPosition: 'right',
            verticalPosition: 'top',
            panelClass: ['mat-toolbar', 'snackbar-success'],
            data: { message: res.message },
          });
          resolve(res);
        },
        (rej: HttpErrorResponse) => {
          let errorMessage =
            'Algum erro interno ocorreu, por favor tente mais tarde!';

          if (rej.error.message !== undefined) {
            errorMessage = rej.error.message;
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
          reject(rej);
        }
      );
    });
  }

  httpPost(endPoint: string, data: any, dynamicUrl?: string): Promise<any> {
    return new Promise((resolve, reject) => {
      const url = this.getFullEndPoint(endPoint, dynamicUrl);
      this.http.post(url, data).subscribe(
        (res: any) => {
          if (res.message) {
            this.snackBar.openFromComponent(SnackbarComponent, {
              duration: 8000,
              horizontalPosition: 'right',
              verticalPosition: 'top',
              panelClass: ['mat-toolbar', 'snackbar-success'],
              data: { message: res.message },
            });
          }
          resolve(res);
        },
        (rej: HttpErrorResponse) => {
          let errorMessage =
            'Algum erro interno ocorreu, por favor tente mais tarde!';

          if (Array.isArray(rej.error)) {
            for (const errItem of rej.error) {
              this.snackBar.openFromComponent(SnackbarComponent, {
                duration: 8000,
                horizontalPosition: 'right',
                verticalPosition: 'top',
                panelClass: ['mat-toolbar', 'snackbar-danger'],
                data: { message: errItem.message },
              });
            }
            reject(rej);
            return;
          }

          if (rej.error.message !== undefined) {
            errorMessage = rej.error.message;
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
          reject(rej);
        }
      );
    });
  }

  httpPatch(endPoint: string, data: any, dynamicUrl?: string): Promise<any> {
    return new Promise((resolve, reject) => {
      const url = this.getFullEndPoint(endPoint, dynamicUrl);
      this.http.patch(url, data).subscribe(
        (res: any) => {
          this.snackBar.openFromComponent(SnackbarComponent, {
            duration: 8000,
            horizontalPosition: 'right',
            verticalPosition: 'top',
            panelClass: ['mat-toolbar', 'snackbar-success'],
            data: { message: res.message },
          });
          resolve(res);
        },
        (rej: HttpErrorResponse) => {
          let errorMessage =
            'Algum erro interno ocorreu, por favor tente mais tarde!';

          if (Array.isArray(rej.error)) {
            for (const errItem of rej.error) {
              this.snackBar.openFromComponent(SnackbarComponent, {
                duration: 8000,
                horizontalPosition: 'right',
                verticalPosition: 'top',
                panelClass: ['mat-toolbar', 'snackbar-danger'],
                data: { message: errItem.message },
              });
            }
            reject(rej);
            return;
          }

          if (rej.error.message !== undefined) {
            errorMessage = rej.error.message;
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
          reject(rej);
        }
      );
    });
  }

  httpPut(endPoint: string, data: any, dynamicUrl?: string): Promise<any> {
    return new Promise((resolve, reject) => {
      const url = this.getFullEndPoint(endPoint, dynamicUrl);
      this.http.put(url, data).subscribe(
        (res: any) => {
          this.snackBar.openFromComponent(SnackbarComponent, {
            duration: 8000,
            horizontalPosition: 'right',
            verticalPosition: 'top',
            panelClass: ['mat-toolbar', 'snackbar-success'],
            data: { message: res.message },
          });
          resolve(res);
        },
        (rej: HttpErrorResponse) => {
          let errorMessage =
            'Algum erro interno ocorreu, por favor tente mais tarde!';

          if (Array.isArray(rej.error)) {
            for (const errItem of rej.error) {
              this.snackBar.openFromComponent(SnackbarComponent, {
                duration: 8000,
                horizontalPosition: 'right',
                verticalPosition: 'top',
                panelClass: ['mat-toolbar', 'snackbar-danger'],
                data: { message: errItem.message },
              });
            }
            reject(rej);
            return;
          }

          if (rej.error.message !== undefined) {
            errorMessage = rej.error.message;
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
          reject(rej);
        }
      );
    });
  }

  httpGetDownload(endPoint: string, dynamicUrl: string): Promise<any> {
    const url = this.getFullEndPoint(endPoint, dynamicUrl);
    return new Promise((resolve, reject) => {
      this.http.get(url, { responseType: 'blob' }).subscribe(
        (res: any) => {
          resolve(res);
        },
        (rej: HttpErrorResponse) => {
          this.snackBar.openFromComponent(SnackbarComponent, {
            duration: 8000,
            horizontalPosition: 'right',
            verticalPosition: 'top',
            panelClass: ['mat-toolbar', 'snackbar-danger'],
            data: { message: 'Não foi possível baixar o arquivo.' },
          });
          reject(rej);
        }
      );
    });
  }

 
}