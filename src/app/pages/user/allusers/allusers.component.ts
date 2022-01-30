import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DataService } from 'src/app/service/data.service';
@Component({
  selector: 'app-allusers',
  templateUrl: './allusers.component.html',
  styleUrls: ['./allusers.component.css']
})
export class AllusersComponent implements OnInit {
isloaded=false
allUsers:any[]=[]
  constructor(private _data:DataService, private router:Router) { }

  ngOnInit(): void {
    console.log('test')
   this.getAllUsers()
  }

  getAllUsers(){
    this._data.getAllUsers().subscribe(
      (res)=>{this.allUsers=res.data; console.log(this.allUsers)},
      (e)=>{this.router.navigateByUrl('/login')},
      ()=>{this.isloaded=true}
    )
  }

// user._id:any=string
//  handleDelete(user._id:string){
//   this._data.Delete().subscribe( = this._data.filter((value,key)=>{
//     return value.id != user._id.id;
//   })
//   )
}

 

  


