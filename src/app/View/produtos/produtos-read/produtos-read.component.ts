import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatTableDataSource } from '@angular/material/table';
import { Produto } from 'src/app/Model/produto';
import { DialogInfoComponent } from '../../../Shared/material/dialog-info/dialog-info.component';
import { DialogPedidoComponent } from '../../../Shared/dialog-pedido/dialog-pedido.component';

const ATENDENTE_LIST: Produto[] = [
  {
        "id": 1,
        "estoque": 10,
        "preco": 20.0,
        "nome": "Pizza",
        "urlImage": "http://conteudo.imguol.com.br/c/entretenimento/54/2021/05/07/pizza-de-batata---instachef-1620392226580_v2_1598x1920.jpg",
        "observacoes": "Sem tomate"
  }];

@Component({
  selector: 'app-produtos-read',
  templateUrl: './produtos-read.component.html',
  styleUrls: ['./produtos-read.component.scss']
})
export class ProdutosReadComponent {

  displayedColumns: string[] = ['urlImage', 'nome', 'preco', 'estoque', 'observacoes', 'actions'];
  dataSource = new MatTableDataSource(ATENDENTE_LIST);

  constructor(public dialog: MatDialog) {}

  openDialog(obs: string): void {
    const dialogRef = this.dialog.open(DialogPedidoComponent, {
      data: {observacoes: obs},
    });
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

}
