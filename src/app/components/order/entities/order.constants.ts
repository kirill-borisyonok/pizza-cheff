import { AbstractControl, ValidationErrors, ValidatorFn } from '@angular/forms';

export function phoneValidator(): ValidatorFn {
  return (control: AbstractControl): ValidationErrors | null => {
    const forbidden = !/^\d+$/.test(control.value);
    return forbidden ? { forbiddenName: { value: control.value } } : null;
  };
}
