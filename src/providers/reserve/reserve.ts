import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';
import 'rxjs/add/operator/map';


@Injectable()
export class ReserveProvider {
  subject: string;
  data: any;
  login: string;
  student: string;
  activity: string;
  reserve : string;
  constructor(public http: Http) {
    // this.subject = "http://localhost:8100/api/user/subjects";
    // this.login = "http://localhost:8100/api/user/login";
    // this.student = "http://localhost:8100/api/user/students";
    // this.activity = "http://localhost:8100/api/user/activity?token=";
    // this.reserve = "http://localhost:8100/api/user/subject_reserve?token=";


    this.subject = "http://jjmor.tech/api/user/subjects";
    this.login = "http://jjmor.tech/api/user/login";
    this.student = "http://jjmor.tech/api/user/students/";
    this.activity = "http://jjmor.tech/api/user/activity?token=";
    this.reserve = "http://jjmor.tech/api/user/subject_reserve?token=";
  }

  subjects(){
    return this.http.get(this.subject).map(res => res.json());
  }

  loginUser(id, password){
    let headers = new Headers();
    
        headers.append('Content-Type', 'application/json');
    
        let body = {
          "id": id,
          "password": password
        };
    
         return this.http.post(this.login, JSON.stringify(body),{headers: headers} )
         .map(res => res.json());
  }

  viewSubject(subject_id){
    return this.http.get(this.subject+"/"+subject_id).map(res=>res.json());
  }

  viewStudent(id){
    return this.http.get(this.student+id).map(res=> res.json());
  }

  viewActivity(){
    return this.http.get(this.activity+localStorage.getItem("token")).map(res=> res.json());
  }

  reserveSubject(subject_id){
    let headers = new Headers();
    
        headers.append('Content-Type', 'application/json');
    
        let body = {
          "subject_id": subject_id,
          
        };
    
         return this.http.post(this.reserve+localStorage.getItem("token"), JSON.stringify(body),{headers: headers} )
         .map(res => res.json());
  }
}
