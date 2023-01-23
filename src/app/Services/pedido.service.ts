import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import { Pedido } from '../Model/pedidos';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ItemBill } from '../Model/itemBill';

@Injectable({
  providedIn: 'root'
})
export class PedidoService {


  url: string = environment.apiUrl;

  constructor(private http:HttpClient) { }


  findAll():Observable<Pedido[]>{
    const url = this.url + "/ordempedido/all";
    return this.http.get<Pedido[]>(url);
  }

  findById(id: string):Observable<ItemBill[]>{
    const url = this.url + "/ordempedido/itembill/" + id;
    return this.http.get<ItemBill[]>(url)
  }

}
