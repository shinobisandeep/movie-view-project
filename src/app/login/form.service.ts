import { Injectable } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Injectable({
  providedIn: 'root',
})

export class FormsService {
  public isEmptyOrNull(string: string): boolean {
    return string === undefined || string === null || string.trim() === '';
  }

  public validateFormField(form: FormGroup, controlKey: string, errorKey = 'required'): boolean {
    if (
      this.isEmptyOrNull(controlKey) ||
      this.isEmptyOrNull(errorKey) ||
      form === null
    ) {
      throw new Error('No form or key to check');
    }
    return (
      (form.controls[controlKey].touched && form.controls[controlKey].hasError(errorKey)) || form.errors?.[errorKey]
    );
  }
}
