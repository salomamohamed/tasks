import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
@Injectable({
  providedIn: 'root'
})
export class DataService {
 
 

  constructor(private _http:HttpClient) { }
  readApi():Observable<any>{
    
    return this._http.get("https://newsapi.org/v2/everything?q=tesla&from=2021-12-25&sortBy=publishedAt&apiKey=702e9ad75b684b2ba13de7a0b5cf6ba3")

}
addUser(userData:any): Observable<any>{
  return this._http.post("http://localhost:3000/user/add", userData)
}

getAllUsers():Observable<any>{
  return this._http.get(`${environment.commonApiUrl}user/showall`)
}
getSingleUser(id:any):Observable<any>{
  return this._http.get(`${environment.commonApiUrl}user/showone/${id}`)

}
getEditUser(id:any):Observable<any>{
  return this._http.get(`${environment.commonApiUrl}user/edit/${id}`)

}
  uploadImage(data:any): Observable<any> {
    return this._http.post(`${environment.commonApiUrl}/user/myProfile`, data)
  }
  //












  
  addImg(userImag:any):Observable<any>{
    return this._http.post("http://localhost:3000/image/add", userImag)
  }
  getAllImg():Observable<any>{
    return this._http.get("http://localhost:3000/image/showall")

  }
  getSingleImg(id:any):Observable<any>{
    return this._http.get(`${environment.commonApiUrl}image/myimg/${id}`)

  }
}

