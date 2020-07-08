import { FormControl, ValidatorFn, AbstractControl } from '@angular/forms';

  export function validSearch():ValidatorFn{
    return (control: AbstractControl): {[key: string]: any} | null => {

        if(control.value.toString().includes(';') || control.value.toString().includes('--') || control.value.toString().includes('=')
        || control.value.toString().toLowerCase().includes('insert') || control.value.toString().toLowerCase().includes('drop table') || /\d/.test(control.value.toString())){

            return {validSearch: true};            
        }else{

            return null;
        }
  }
}
