import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { AuthService } from 'src/app/providers/services/auth.service';
import{ Router} from"@angular/router"

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  user:any = { email:"", password:""}
  msg:string=""

  constructor(private _auth:AuthService , private router:Router) 
  { _auth.flag=false}

  ngOnInit(): void {this.profile()}
   handleLogin(loginForm:NgForm):void{
    if(loginForm.valid){
  this._auth.login(this.user).subscribe( 
     (res) => { localStorage.setItem("proToken", res.data.token) } ,
        (e)=>{ this.msg =  e.error.data },
        ()=>{
          this.msg=""
         loginForm.resetForm()
         this.profile()
        }
        )
      }
    }
profile(){
  this._auth.me().subscribe(
    (data)=>{this._auth.userData=data.data},
    (e)=>{},
    ()=>{
      this._auth.flag=true
      this.router.navigateByUrl('/')
    }
    
  )
}
   }

