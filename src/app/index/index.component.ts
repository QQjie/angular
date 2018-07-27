import { Component, OnInit } from '@angular/core';
import {HttpClient, HttpHeaders, HttpParams} from '@angular/common/http';
import {ActivatedRoute} from "@angular/router";
import {Observable} from "rxjs/index";

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.css']
})
export class IndexComponent implements OnInit {
  private menus:Array<Menu>;
  private menus1:Array<Menu>;
  private username:string;
  private username1:string;
  private http: HttpClient;
  private items:any;
  private tests:boolean[];
  dataSource: Observable<any>;
  constructor(private routeinfo: ActivatedRoute,private http1:HttpClient) {
    this.username=this.routeinfo.snapshot.params["username"];
    this.http=http1;

    const params = new HttpParams()
      .set('userName', this.username)
      .set('parentMenuId', '10');
    this.dataSource = this.http.get ("/api/BelowMenus",{params:params});
  }

  ngOnInit() {
    this.menus=[
      new Menu(1,'url1',2,'caidan1',1),
      new Menu(1,'url1',2,'caidan1',1),
      new Menu(1,'url1',2,'caidan1',1),
      new Menu(1,'url1',2,'caidan1',1)
    ]
    this.menus.push(new Menu(1,'url1',2,'caidan1',1))

   /* const params = new HttpParams()
      .set('userName', this.username)
      .set('parentMenuId', '10');
    this.dataSource = this.http.get ("/api/BelowMenus",{params:params});*/
    this.dataSource.subscribe(function (data) {
      if(data.ret===true){
        console.log(data.data)
       this.items1=data.data;
       alert(data.data.length);
        for (let item of data.data) {
          alert(item.name)
          this.username1=item.name;
       //   alert(this.menus[0].name)
        //  this.menus.push(new Menu(1,item.url,item.parentMenuId,item.name,item.status))
       //   this.menus.push(new Menu(1,'url1',2,'caidan1',1));
        }
      }else {
        alert(data.msg)
      }
    });
  }

  onClick(){

  }

}
export class Menu{
  constructor(
    public id:number,
    public url:string,
    public parentMenuId: number,
    public name:string,
    public status:number
  ){}
}
