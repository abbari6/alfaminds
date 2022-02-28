import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { LoginComponent } from './components/auth/login/login.component';
import { RegisterComponent } from './components/auth/register/register.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { HomeComponent } from './components/home/home.component';
import { MaterialModule } from './material/material.module';
import { MainComponent } from './main/main.component';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule , HTTP_INTERCEPTORS } from '@angular/common/http';
import { MainformComponent } from './mainform/mainform.component';
import { AuthInterceptor } from './shared/auth.interceptor';
import { ConfirmRegisterComponent } from './components/auth/confirm-register/confirm-register.component';
import { ContactsComponent } from './components/contacts/contacts.component';
import { AuthGuard } from './shared/auth.guard';
import { AuthAfterGuard } from './shared/auth-after.guard';
import { ContactListComponent } from './contact-list/contact-list.component';
@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    NavbarComponent,
    HomeComponent,
    MainComponent,
    MainformComponent,
    ConfirmRegisterComponent,
    ContactsComponent,
    ContactListComponent
  ],
  imports: [
    BrowserModule,
    NgbModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    MaterialModule,
    HttpClientModule
  ],
  providers: [AuthGuard, AuthAfterGuard, {
    provide: HTTP_INTERCEPTORS,
    useClass: AuthInterceptor,
    multi: true
  }],
  bootstrap: [AppComponent]
})
export class AppModule { }
