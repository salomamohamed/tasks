import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DataService } from 'src/app/service/data.service';
@Component({
  selector: 'app-allimg',
  templateUrl: './allimg.component.html',
  styleUrls: ['./allimg.component.css']
})
export class AllimgComponent implements OnInit {
isloaded=false
allImg:any[]=[]
  constructor(private _data:DataService, private router:Router) { }

  ngOnInit(): void {
     console.log('imag')
    this.getAllImg()
  }
getAllImg(){
  this._data.getAllImg().subscribe(
    (res)=>{
      this.allImg=res; 
      console.log(this.allImg)
    },
   
    (e)=>{this.router.navigateByUrl('/addimg')},
  ()=>{this.isloaded=true}
  ) 
}



  

}

