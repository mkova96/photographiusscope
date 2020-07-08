import { ValidationErrors, ValidatorFn, AbstractControl } from '@angular/forms';

export class PasswordPolicy {

  static pass:string[] = ["1v7Upjw3nT","YAgjecc826","a838hfiD","PolniyPizdec0211","Password1","Sojdlg123aljg",
    "j38ifUbn","3rJs1la7qE","iw14Fi9j"]

    static patternValidator(regex: RegExp, error: ValidationErrors): ValidatorFn {
        return (control: AbstractControl): { [key: string]: any } => {
          if (!control.value) {
            // if control is empty return no error
            return null;
          }
      
          // test the value of the control against the regexp supplied
          const valid = regex.test(control.value);
      
          // if true, return no error (no error), else return error passed in the second parameter
          return valid ? null : error;
        };
    }

    static passwordMatchValidator(control: AbstractControl) {
        const password: string = control.get('password').value; // get password from our password form control
        const confirmPassword: string = control.get('confirmPassword').value; // get password from our confirmPassword form control
        // compare is the password math
        if (password !== confirmPassword) {
          // if they don't match, set an error in our confirmPassword form control
          control.get('confirmPassword').setErrors({ NoPassswordMatch: true });
        }
    }

    static checkTop1000(error: ValidationErrors): ValidatorFn {
      return (control: AbstractControl): { [key: string]: any } => {
        if (!control.value) {
          // if control is empty return no error
          return null;
        }
    
        const valid = this.pass.includes(control.value)      
    
        // if true, return no error (no error), else return error passed in the second parameter
        return valid ? error : null;
      };
  }
}
