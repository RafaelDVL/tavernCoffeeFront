import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Atendente } from '../Model/atendente';

@Injectable({
  providedIn: 'root'
})
export class AtendenteService {

  baseurl: String = environment.apiUrl;

  constructor(private http: HttpClient) { }

  findAll():Observable<Atendente[]>{
    const url = this.baseurl + "/atendentes/all";
    return this.http.get<Atendente[]>(url);
  }
}
