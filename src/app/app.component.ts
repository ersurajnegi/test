import { Component } from '@angular/core';
import { FormControl, FormGroup, FormArray, Validators, FormBuilder, AbstractControl } from '@angular/forms';
import { testEmail, comparePassword } from './test';
import { HttpClient } from '@angular/common/http';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss']
})
export class AppComponent {
    title = 'app';
    form: FormGroup;
    constructor(private _fbGroup: FormBuilder, private _http: HttpClient) {
        // this.form = new FormGroup({
        //     email: new FormControl('', [Validators.required, testEmail()]),
        //     passwordGroup: new FormGroup({
        //         password: new FormControl('', Validators.required),
        //         confirmPassword: new FormControl('', [Validators.required, comparePassword()])
        //     })
        // });

        this.form = this._fbGroup.group({
            email: ['', [Validators.required, testEmail()]],
            phone: [''],
            enable: [false],
            passwordGroup: this._fbGroup.group({
                password: ['', Validators.required],
                confirmPassword: ['', [Validators.required, comparePassword()]]
            })
        });
        this.handleCheckBoxChanges();
    }

    onSubmit() {
        console.log('Submit : ', this.form.value);
    }

    handleCheckBoxChanges() {
        this.form.get('enable').valueChanges.subscribe((data) => {
            let phoneControl: AbstractControl = this.form.get('phone');
            if (data) {
                phoneControl.setValidators([Validators.required]);
            }
            else {
                phoneControl.setValidators([]);
            }
            phoneControl.updateValueAndValidity();
        });
    }
    resetForm() {
        //this.form.reset();
        this._http.post("https://api.goschedule.in/accounts/signin", {
            // email: "seenthil2017tce@gmail.com",
            // password: 'password'
            email: "s.shivasurya+india@gmail.com",
            password: '1234'
        }).subscribe((data) => {
            console.log(data)
        }, (error) => {
            console.log(error);
        });

    }
}
