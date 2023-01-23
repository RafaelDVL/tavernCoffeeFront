import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Cliente } from '../Model/cliente';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ClienteService {

  baseUrl: String = environment.apiUrl;

  constructor(private http: HttpClient) { }

  findAll():Observable<Cliente[]>{
    const url = this.baseUrl + "/clientes/all"
    return this.http.get<Cliente[]>(url);
  }
}
