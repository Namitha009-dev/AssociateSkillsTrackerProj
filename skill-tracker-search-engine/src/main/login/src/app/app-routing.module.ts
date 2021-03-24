import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainpageComponent } from './mainpage/mainpage.component';
import { AddinghrdetailsComponent } from './addinghrdetails/addinghrdetails.component';
import { LoginpageComponent } from './loginpage/loginpage.component';
const routes: Routes = [
  {path: '', redirectTo: 'loginpage', pathMatch: 'full'},
  {path: 'loginpage',   component: LoginpageComponent },
  {path: 'mainpage1',   component: MainpageComponent},
  {path: 'addinghrdetails',   component: AddinghrdetailsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
