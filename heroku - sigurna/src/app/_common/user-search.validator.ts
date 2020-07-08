import { FormControl, ValidatorFn, AbstractControl } from '@angular/forms';

  export function validSearch():ValidatorFn{

    console.log("otvorili");
    return (control: AbstractControl): {[key: string]: any} | null => {

        console.log("otvorili jee");


        if(control.value.toString().includes(';') || control.value.toString().includes('--') || control.value.toString().includes('=')
        || control.value.toString().toLowerCase().includes('insert') || control.value.toString().toLowerCase().includes('drop table') || /\d/.test(control.value.toString())){
            console.log("jee");

            return {validSearch: true};            
        }else{
            console.log("nije ");

            return null;
        }
  }
}
