import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatTableDataSource } from '@angular/material/table';
import { Pedido } from 'src/app/Model/pedidos';
import { DialogPedidoComponent } from 'src/app/Shared/dialog-pedido/dialog-pedido.component';
import { DialogInfoComponent } from 'src/app/Shared/material/dialog-info/dialog-info.component';
import { PedidoService } from '../../../Services/pedido.service';

const PEDIDO_LIST: Pedido[] = [
  { id: 2,
    dataAbertura: "2023-01-19 14:00",
    dataFechamento: "",
    entrega: "Retirar",
    prioridade: 1,
    status: 0,
    itemBillList: [{"Produtos":3}],
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
export class PedidosReadComponent implements OnInit {

  displayedColumns: string[] = ['dataAbertura', 'entrega', 'prioridade', 'status', 'nomeCliente', 'nomeAtendente', 'itemBillList', 'actions'];
  dataSource: any;

  constructor(
    private service: PedidoService,
    public dialog: MatDialog,
    ) {}

  ngOnInit(): void {
    this.findAll();
  }

  findAll():void{
    this.service.findAll().subscribe(
      resposta => {
        this.dataSource = new MatTableDataSource(resposta);
      }
    )
  }

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
