import {
    AbstractControl, ValidatorFn
} from '@angular/forms';
export function testEmail(): ValidatorFn {
    return (control: AbstractControl): { [key: string]: any } => {
        if (!control.value) return null;
        return control.value && control.value.indexOf('@') != -1 ? null : { 'validEmail': { value: control.value } }
    };
}


export function comparePassword(): ValidatorFn {
    return (control: AbstractControl): { [key: string]: any } => {
        if (!control.root || !control.value) { return null; }
        if (control.root.get('passwordGroup') && control.root.get('passwordGroup').get('password').value !== control.value) {
            return { 'invalidPwd': { value: control.value } }
        }
        return null;
    }
}