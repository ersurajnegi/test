import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { PasswordComponent } from './password/password.component';
import { ButtonModule } from 'cockpit-button';
import { HttpClientModule } from '@angular/common/http';


@NgModule({
    declarations: [
        AppComponent, PasswordComponent
    ],
    imports: [
        BrowserModule,
        ReactiveFormsModule,
        ButtonModule,
        HttpClientModule
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule { }
