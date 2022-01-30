import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/service/data.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-edituser',
  templateUrl: './edituser.component.html',
  styleUrls: ['./edituser.component.css']
})
export class EdituserComponent implements OnInit {
  user:any
isloaded=false
   constructor(private_route:ActivatedRoute,private _data:DataService) { }


  ngOnInit(): void {
    //console.log(this._route.snapshot.params['id'])
  }

// getUserData(id:any){
//   this._data.getEditUser(this._route.snapshot.paramMap.get("id")).pipe(first())
//   .subscribe(
//     (res)=> this.user.data
//     (e)=>{},
//     ()=> this.isloaded=true
//   )

  
//   }
}