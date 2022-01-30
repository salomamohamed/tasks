import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/providers/services/auth.service';

import { Router } from '@angular/router';


@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  islogedin:boolean=true
  constructor(public _auth:AuthService,private router:Router) { }

  ngOnInit(): void {
  }
  handlelogout():void{
    this._auth.logout().subscribe(
      (res:any)=>{
        console.log(res.message)
        this._auth.isUserLoggedIn=false
        this._auth.userData=null
        this.router.navigateByUrl('/login')
        localStorage.removeItem('proToken')},
      (e)=>{console.log(e)},
      ()=>{
        this.islogedin=false
        this.router.navigateByUrl('login')
      }
   )
   }

}
