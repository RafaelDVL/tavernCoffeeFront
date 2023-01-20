import { Component } from '@angular/core';

import { MatTableDataSource } from '@angular/material/table';
import { Atendente } from 'src/app/Model/atendente';

const ATENDENTE_LIST: Atendente[] = [
  { id: 5,
  nome: "Albert Einstein",
  cpf: "111.661.890-74",
  email: "einstein@mail.com",
  senha: "$2a$10$By.R/IK9lpHi4tvFs0pBx.gCDO2ngkKtAPogzJfnVfqLOVTT5jhxi",
  telefone: "159999978978",
  endereco: "Avenida Champs, 260",
  perfil:[
    "ATENDENTE"
    ],
  datacriacao: "2023-01-18 17:27:25"
}];

@Component({
  selector: 'app-atendentes-read',
  templateUrl: './atendentes-read.component.html',
  styleUrls: ['./atendentes-read.component.scss']
})
export class AtendentesReadComponent {
  displayedColumns: string[] = ['nome', 'cpf', 'email', 'telefone', 'endereco', 'datacriacao', 'actions'];
  dataSource = new MatTableDataSource(ATENDENTE_LIST);

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

}
