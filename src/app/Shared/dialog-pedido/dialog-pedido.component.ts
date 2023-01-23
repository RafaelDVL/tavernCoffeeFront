import { Component, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { DialogData } from 'src/app/Model/dialogData';
import { ItemBill } from 'src/app/Model/itemBill';

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
export class DialogPedidoComponent {
  displayedColumns: string[] = ['produto', 'ordemPedido', 'quantidade', 'valorTotalItem', 'actions'];
  dataSource = billList;

  constructor(
    public dialogRef: MatDialogRef<DialogPedidoComponent>,
    @Inject(MAT_DIALOG_DATA) public data: DialogData,
  ) {}



}
