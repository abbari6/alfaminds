import { NgModule } from '@angular/core';
import { RouterModule, Routes, CanActivate, Router } from '@angular/router';
import { ConfirmRegisterComponent } from './components/auth/confirm-register/confirm-register.component';
import { LoginComponent } from './components/auth/login/login.component';
import { RegisterComponent } from './components/auth/register/register.component';
import { ContactsComponent } from './components/contacts/contacts.component';
import { ContactListComponent } from './contact-list/contact-list.component';
import { MainformComponent } from './mainform/mainform.component';
import { AuthAfterGuard } from './shared/auth-after.guard';
import { AuthGuard } from './shared/auth.guard';

const routes: Routes = [
 
  {
    path:'',
    redirectTo:'/main',
    pathMatch:'full',
    
  },
  {
    path:'register',
    component: RegisterComponent,
   // canActivate: [AuthAfterGuard]
    
  },
  {
    path:'login',
    component: LoginComponent,
   // canActivate: [AuthAfterGuard]

  },
   {
    path:'main',
    component: MainformComponent,
   canActivate:[AuthGuard]
  },
  {
    path:'confirm',
    component: ConfirmRegisterComponent,
    canActivate:[AuthGuard]
  },
  {
    path:'contacts',
    component: ContactListComponent,
    canActivate:[AuthGuard]
   
  }
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

