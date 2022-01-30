import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http'
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RegisterComponent } from './register/register.component';
import { ImageComponent } from './image/image.component';
import { NavbarComponent } from './shared/navbar/navbar.component';
import { FooterComponent } from './shared/footer/footer.component';
import { LoginComponent } from './pages/user/login/login.component';
import { ProfileComponent } from './pages/user/profile/profile.component';
import { AllusersComponent } from './pages/user/allusers/allusers.component';
import { AuthInterceptor } from './providers/interceptors/auth.interceptor';
import { SingleuserComponent } from './pages/user/singleuser/singleuser.component';
import { Error404Component } from './pages/error404/error404.component';
import { FollowersComponent } from './pages/user/followers/followers.component';
import { AllimgComponent } from './imge/allimg/allimg.component';
import { SingleimgComponent } from './imge/singleimg/singleimg.component';

import { EdituserComponent } from './pages/user/edituser/edituser.component';

@NgModule({
  declarations: [
    AppComponent,
    RegisterComponent,
    ImageComponent,
    NavbarComponent,
    FooterComponent,
    LoginComponent,
    
    ProfileComponent,
    AllusersComponent,
    SingleuserComponent,
    Error404Component,
    FollowersComponent,
    AllimgComponent,
    SingleimgComponent,
   
    EdituserComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,

 ReactiveFormsModule,
HttpClientModule,

  ],
  providers: [{provide:HTTP_INTERCEPTORS,useClass:AuthInterceptor,multi:true }],
  bootstrap: [AppComponent]
})
export class AppModule { }
