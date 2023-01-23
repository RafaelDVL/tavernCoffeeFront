import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Produto } from '../Model/produto';

@Injectable({
  providedIn: 'root'
})
export class ProdutoService {

  constructor(private http: HttpClient ) { }

  findAll():Observable<Produto[]>{
    return this.http.get<Produto[]>("http://localhost:8080/produtos/all")
  }
}
