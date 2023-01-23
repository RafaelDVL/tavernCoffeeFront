import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { MatTableDataSource } from '@angular/material/table';
import { DialogData } from 'src/app/Model/dialogData';
import { ItemBill } from 'src/app/Model/itemBill';
import { PedidoService } from '../../Services/pedido.service';

const billList: ItemBill[] = [{
  id: 1,
  ordemPedido: 1,
  produto: "Pizza",
  quantidade: 4,
  valorTotalItem: 80.0
},
{
        "id": 2,
        "ordemPedido": 1,
        "produto": "Pão de Queijo",
        "quantidade": 7,
        "valorTotalItem": 70.0
}]

@Component({
  selector: 'app-dialog-pedido',
  templateUrl: './dialog-pedido.component.html',
  styleUrls: ['./dialog-pedido.component.scss']
})
export class DialogPedidoComponent implements OnInit {
  displayedColumns: string[] = ['produto', 'ordemPedido', 'quantidade', 'valorTotalItem', 'actions'];
  dataSource: any;

  constructor(
    public dialogRef: MatDialogRef<DialogPedidoComponent>,
    @Inject(MAT_DIALOG_DATA) public data: DialogData,
    private service:PedidoService
  ) {}

  ngOnInit(): void {
    this.findById(this.data.observacoes);
  }

  findById(id: string):void{
    this.service.findById(id).subscribe(
      resposta => {
        this.dataSource = new MatTableDataSource(resposta);
        console.log(resposta)
      }
    )
  }





}
