import { Component } from '@angular/core';

import { AuthService } from './providers/services/auth.service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title(title: any) {
    throw new Error('Method not implemented.');
  }
 
  constructor(public _auth:AuthService){}
}
