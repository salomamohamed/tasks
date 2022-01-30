import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AllusersComponent } from './pages/user/allusers/allusers.component';
import { RegisterComponent } from './register/register.component';
import { ImageComponent } from './image/image.component';
import { LoginComponent } from './pages/user/login/login.component';
import { ProfileComponent } from './pages/user/profile/profile.component';
import { SingleuserComponent } from './pages/user/singleuser/singleuser.component';
import { Error404Component } from './pages/error404/error404.component';
import { FollowersComponent } from './pages/user/followers/followers.component';
import { AllimgComponent } from './imge/allimg/allimg.component';
import { SingleimgComponent } from './imge/singleimg/singleimg.component';

const routes: Routes = [
  {path:"",component:AllusersComponent},
  { path :"register",component:RegisterComponent },
  {path:"followers",component:FollowersComponent},
  {path:"user",children:[
   
    {path:"show/:id",component:SingleuserComponent},

   
  ]},
 {path:"login",component:LoginComponent},
 //image
  {path:"addimg",component:ImageComponent },
  {path:"showall",component:AllimgComponent},

  {path:"u",component:ProfileComponent},
  {path:"single/:id",component:SingleimgComponent},
//











  
  {path:"**",component:Error404Component},
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
