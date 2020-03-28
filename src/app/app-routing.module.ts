
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { AboutusComponent } from './aboutus/aboutus.component';


const routes: Routes = [
  {path:'home',component:HomeComponent},
  {path:'services',component:HomeComponent},
  {path:'aboutus',component:HomeComponent},
  
  {path:'login',component:LoginComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
