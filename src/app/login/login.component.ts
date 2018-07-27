import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";
import {Observable} from 'rxjs';
import {HttpClient} from '@angular/common/http';
import * as $ from 'jquery';
import {HttpParams} from "@angular/common/http";
import set = Reflect.set;


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  private router: Router;
  private http: HttpClient
  dataSource: Observable<any>;
  constructor(private router1: Router,private http1: HttpClient) {
   this.http=http1;
   this.router=router1;
  }

  ngOnInit() {

  }

  onClickMe(){
    const username : string = $("#username").val().toString();
    const password : string = $("#inputPassword").val().toString();
    const route :Router =this.router;
    const params = new HttpParams()
      .set('username', username)
      .set('password', password)
      .set('token','111')
    this.dataSource = this.http.get ("/api/login",{params:params});
    this.dataSource.subscribe(function (data) {
      if(data.ret===true){
        route.navigate(['/index',username]);
      }else {
        alert(data.msg)
      }
    });
  }
  onClickMe1(){
    this.router.navigate(['/index']);
  }

}
