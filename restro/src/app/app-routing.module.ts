import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminloginComponent } from './adminlogin/adminlogin.component';
import { CartComponent } from './cart/cart.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { HomepageComponent } from './homepage/homepage.component';
import { LoginmenuComponent } from './loginmenu/loginmenu.component';
import { LooginComponent } from './loogin/loogin.component';
import { RestdashComponent } from './restdash/restdash.component';
import { SignupComponent } from './signup/signup.component';

const routes: Routes = [
  {
  path:'',redirectTo:'homepage', pathMatch:'full'
  },
  {
  path:'loogin',component:LooginComponent
  },
  {
  path:'signup',component:SignupComponent
  },
  {
  path:'dash',component:DashboardComponent
  },
  {
  path:'homepage',component:HomepageComponent
   },
  {
    path:'restdash',component:RestdashComponent
  },
  {
    path:'loginmenu',component:LoginmenuComponent

  },
  {
    path:'adminlogin',component:AdminloginComponent
  },
  {
    path:'cart',component:CartComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
