import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DataService } from 'src/app/service/data.service';

@Component({
  selector: 'app-singleuser',
  templateUrl: './singleuser.component.html',
  styleUrls: ['./singleuser.component.css']
})
export class SingleuserComponent implements OnInit {
user:any
isloaded=false
 
  
  constructor(private _route:ActivatedRoute,private _data:DataService) { }

  ngOnInit(): void {
    console.log(this._route.snapshot.params['id'])
  
  this.getUserData()

   
  }
  getUserData(){
    this._data.getSingleUser(this._route.snapshot.paramMap.get("id")).subscribe(
     res=> this.user = res.data,
      e=>{},
      ()=> this.isloaded=true
    
    
    )
  }
}
  
  