import { Component, OnInit } from '@angular/core';
// import { NgForm, Validators } from '@angular/forms';
// import { DataService } from '../service/data.service'
import { FormControl,FormGroup,Validators  } from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
registerUser:FormGroup=new FormGroup({ 
  username:new FormControl("",[Validators.required,Validators.minLength(5)]),
  age:new FormControl("",[Validators.required,Validators.min(18)]),
  password:new FormControl("",[Validators.required,Validators.minLength(10)]),
  userphone:new FormControl("",Validators.minLength(11)),

  email:new FormControl("",[Validators.required,Validators.email]),
  gender:new FormControl("",[Validators.required]),
  usrtype:new FormControl("",Validators.required),




} )
  // constructor(private _data:DataService) { }

  constructor() { }
  ngOnInit(): void {
  }
  handleRegister(){
    console.log(this.registerUser.value)
  }
  // handelAddUser(addUser:NgForm){
  //   if(addUser.valid){
  //     console.log("test")
  //     this._data.addUser(addUser.value).subscribe(res=> console.log(res))
  //   }
  //     }
  get username(){return this.registerUser.get('username')}
  get age(){return this.registerUser.get('age')}
  get password(){return this.registerUser.get('password')}
  get userphone(){return this.registerUser.get('userphone')}
  get email(){return this.registerUser.get('email')}
  get gender(){return this.registerUser.get('gender')}
  get usrtype(){return this.registerUser.get('usrtype')}
  handelregisterUser(){

    console.log(this.registerUser.value)
  }

     
}
