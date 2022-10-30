import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Observable } from 'rxjs/internal/Observable';
import { Inscrimenu } from '../inscri-menu.';

@Injectable({
  providedIn: 'root'
})
export class InscrimenuService {
  private inscrimenuUrl: string;
  private inscriaddurl: string;
  private inscrimodUrl: string;
  private inscrisupUrl: string;
  constructor(private http: HttpClient) { 
    this.inscrimenuUrl = 'http://localhost:8091/SpringMVC/InscriCantine/retrieve-all-inscriCantine';
    this.inscriaddurl ='http://localhost:8091/SpringMVC/InscriCantine/add-inscriCantine';
    this.inscrimodUrl='http://localhost:8091/SpringMVC/InscriCantine/modify-inscriCantine';
    this.inscrisupUrl='http://localhost:8091/SpringMVC/InscriCantine/remove-inscriCantine';
  }
  public findAll(): Observable<Inscrimenu[]> {
    return this.http.get<Inscrimenu[]>(this.inscrimenuUrl);
  }
  public save(Inscrimenu: any) {
    return this.http.post<Inscrimenu>(this.inscriaddurl, Inscrimenu);
}

public modifymenu(Inscrimenu: Inscrimenu): Observable<Inscrimenu> {
  return this.http.put<Inscrimenu>(this.inscrimodUrl+"/modify-inscriCantine",Inscrimenu);
}

public deleteInscrimenu(idinscri: number) {
  return this.http.delete(`${this.inscrisupUrl}/${idinscri}`);
}
}
