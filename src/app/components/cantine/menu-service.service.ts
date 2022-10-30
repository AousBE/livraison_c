import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Observable } from 'rxjs/internal/Observable';
import { Menu } from './menu';

@Injectable()
export class MenuServiceService {
  private menuUrl: string;
  private addurl: string;
  private modUrl: string;
  private supUrl: string;
  private retUrl : string;
  private randUrl:string;
  constructor(private http: HttpClient) { 
    this.menuUrl = 'http://localhost:8091/SpringMVC/ListMenu/retrieve-all-ListMenu';
    this.addurl ='http://localhost:8091/SpringMVC/ListMenu/add-ListMenu';
    this.modUrl='http://localhost:8091/SpringMVC/ListMenu/modify-ListMenu';
    this.supUrl='http://localhost:8091/SpringMVC/ListMenu/remove-ListMenu';
    this.retUrl='http://localhost:8091/SpringMVC/ListMenu/retrieve-ListMenu';
    this.randUrl='http://localhost:8091/SpringMVC/ListMenu/getmenu';

  }
  public findAll(): Observable<Menu[]> {
    return this.http.get<Menu[]>(this.menuUrl);
  }
  public save(menu: Menu) {
    return this.http.post<Menu>(this.addurl,menu);
}

public modifymenu(value:any):Observable<object>{
  return this.http.put(`${this.modUrl}`,value)
}

public deletemenu(idListMenu: number): Observable<any> {
  return this.http.delete(`${this.supUrl}/${idListMenu}`);
}
retrievelistmenu(id: number): Observable<any> {
  return this.http.get(`${this.retUrl+"/retrieve-all-ListMenu"}/${id}`);
}
public random():Observable<Menu[]> {
  return this.http.get<Menu[]>(this.randUrl);
}
}
