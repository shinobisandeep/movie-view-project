import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { SnackbarComponent } from './snackbar.component';

export enum SnackBarType {
  Success = 'success',
  Error = 'error',
  Default = 'default',
}

@Injectable({
  providedIn: 'root',
})
export class SnackBarService {
  constructor(private snackBar: MatSnackBar) {}
  public open(message: string, type: SnackBarType = SnackBarType.Default, actionText?: string): void {
    const duration: number = 3000;
    this.snackBar.openFromComponent(SnackbarComponent, {
      verticalPosition: 'top',
      duration: duration,
      panelClass: type.toString().toLowerCase(),
      data: { message: message, type: type, actionText: actionText },
    });
  }
}
