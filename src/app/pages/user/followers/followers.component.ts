import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DataService } from 'src/app/service/data.service';
@Component({
  selector: 'app-followers',
  templateUrl: './followers.component.html',
  styleUrls: ['./followers.component.css']
})
export class FollowersComponent implements OnInit {
isloaded=false
allUsers:any[]=[]
  constructor(private _data:DataService, private router:Router) { }

  ngOnInit(): void {
    this.getAllUsers()
  }
  getAllUsers(){
    this._data.getAllUsers().subscribe(
      (res)=>{this.allUsers=res.data; console.log(this.allUsers)},
      (e)=>{this.router.navigateByUrl('/login')},
      ()=>{this.isloaded=true}
    )
  }

}
