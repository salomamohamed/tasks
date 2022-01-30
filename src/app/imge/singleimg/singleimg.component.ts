import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DataService } from 'src/app/service/data.service';
@Component({
  selector: 'app-singleimg',
  templateUrl: './singleimg.component.html',
  styleUrls: ['./singleimg.component.css']
})
export class SingleimgComponent implements OnInit {

  image:any
isloaded=false
  constructor(private _route:ActivatedRoute,private _data:DataService) { }

  ngOnInit(): void {
    console.log(this._route.snapshot.params['id'])
   this.getALlImg()
  }
 getALlImg(){
   this._data.getSingleImg(this._route.snapshot.paramMap.get("id")).subscribe(
     res=>{console.log(res)
    this.image=res},
    e=>{},
    ()=>{
      this.isloaded = true;
    }
   )
 }

}
