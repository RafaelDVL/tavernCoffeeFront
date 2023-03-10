import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { Cliente } from 'src/app/Model/cliente';
import { ClienteService } from '../../../Services/cliente.service';

const CLIENTE_LIST: Cliente[] = [
  { id: 5,
  nome: "Albert Einstein",
  cpf: "111.661.890-74",
  email: "einstein@mail.com",
  senha: "$2a$10$By.R/IK9lpHi4tvFs0pBx.gCDO2ngkKtAPogzJfnVfqLOVTT5jhxi",
  telefone: "159999978978",
  endereco: "Avenida Champs, 260",
  perfil:[
    "CLIENTE"
    ],
  datacriacao: "2023-01-18 17:27:25" }
];

@Component({
  selector: 'app-cliente-read',
  templateUrl: './cliente-read.component.html',
  styleUrls: ['./cliente-read.component.scss']
})
export class ClienteReadComponent implements OnInit{

  clientList: any;


  displayedColumns: string[] = ['nome', 'cpf', 'email', 'telefone', 'endereco', 'datacriacao', 'actions'];

  constructor(private service: ClienteService){

  }
  ngOnInit(): void {
    this.findAll();
  }

  findAll():void{
    this.service.findAll().subscribe(
      (resposta) => {
        this.clientList = new MatTableDataSource(resposta);
        console.log(this.clientList)
      }
    )
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.clientList.filter = filterValue.trim().toLowerCase();
  }


}
