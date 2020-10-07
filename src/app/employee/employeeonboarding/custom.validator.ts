import { trigger } from '@angular/animations';
import { AbstractControl, FormGroup } from '@angular/forms';

export class CustomValidator {
  static validateName(control: AbstractControl) {
    const value = control.value as string;

    if (value.includes('test')) {
      return { invalidName: true };
    }
    return null;
  }

  static specialCharValidator(char: string[]) {
    return (control: AbstractControl) => {
      const value = control.value as string;
      for (const c of char) {
        if (value.includes(c)) {
          return { invalidChar: true };
        }
      }
      return null;
    };
  }

  static passwordValidator(form: FormGroup) {
    const password = form.get('password').value as string;
    const confirmPassword = form.get('confirmPassword');
    if (password !== confirmPassword.value as string) {
      confirmPassword.setErrors({ invalidPassword: true });
      return { invalidPassword: true };
    }
    return null;
  }


}
