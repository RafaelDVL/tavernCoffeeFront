import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Produto } from '../Model/produto';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ProdutoService {

  baseUrl: string = environment.apiUrl;

  constructor(private http: HttpClient ) { }

  findAll():Observable<Produto[]>{
    const url = this.baseUrl + "/produtos/all";
    return this.http.get<Produto[]>(url)
  }
}
