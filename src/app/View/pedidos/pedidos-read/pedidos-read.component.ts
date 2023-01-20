import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatTableDataSource } from '@angular/material/table';
import { Pedido } from 'src/app/Model/pedidos';
import { DialogPedidoComponent } from 'src/app/Shared/dialog-pedido/dialog-pedido.component';
import { DialogInfoComponent } from 'src/app/Shared/material/dialog-info/dialog-info.component';

const PEDIDO_LIST: Pedido[] = [
  { id: 2,
    dataAbertura: "2023-01-19 14:00",
    dataFechamento: "",
    entrega: "Retirar",
    prioridade: 1,
    status: 0,
    listaProduto: [{"Produtos":3}],
    cliente: 10,
    atendente: 12,
    nomeAtendente: 'Marcelo Dias Rodrigues',
    nomeCliente: 'Maria Aparecida'
     }];

@Component({
  selector: 'app-pedidos-read',
  templateUrl: './pedidos-read.component.html',
  styleUrls: ['./pedidos-read.component.scss']
})
export class PedidosReadComponent {

  displayedColumns: string[] = ['dataAbertura', 'entrega', 'prioridade', 'status', 'nomeCliente', 'nomeAtendente', 'listaProduto', 'actions'];
  dataSource = new MatTableDataSource(PEDIDO_LIST);

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
