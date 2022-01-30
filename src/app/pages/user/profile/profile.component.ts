import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/providers/services/auth.service'
import { DataService } from 'src/app/service/data.service'
import { ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  myFile:any;
  islogedin:boolean=true
  // x:string=null
  // userId:number=null;
  // user:User=null;
  // private sub:Subscription
  constructor(
    private _data:DataService,public _auth:AuthService,
    
    
    private _route:ActivatedRoute) { }

  ngOnInit(): void {
   
  }
imgURL:any=""
  onChange(event:any){
    console.log(event.target.files[0])
    this.myFile= event.target.files[0]
    var reader = new FileReader();
    reader.readAsDataURL(event.target.files[0]);
    reader.onload = (_event) => {
      this.imgURL = reader.result;
    }
  }
  onUpload(){
    const formData = new FormData()
    formData.append('image', this.myFile, this.myFile.name)
    this._data.uploadImage(formData).subscribe(data=>console.log(data))
  }
 

}



