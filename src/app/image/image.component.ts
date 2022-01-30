import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { DataService } from '../service/data.service'
@Component({
  selector: 'app-image',
  templateUrl: './image.component.html',
  styleUrls: ['./image.component.css']
})
export class ImageComponent implements OnInit {

  constructor(private _data:DataService) { }

  ngOnInit(): void {
  }
  handleAddImg(addImg:NgForm){
    if(addImg.valid){
      console.log("image")
      this._data.addImg(addImg.value).subscribe(
        res=> console.log(res)
        )
    }

}
}