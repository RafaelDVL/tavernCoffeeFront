import { Component, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { DialogData } from 'src/app/Model/dialogData';

@Component({
  selector: 'app-dialog-pedido',
  templateUrl: './dialog-pedido.component.html',
  styleUrls: ['./dialog-pedido.component.scss']
})
export class DialogPedidoComponent {
  constructor(
    public dialogRef: MatDialogRef<DialogPedidoComponent>,
    @Inject(MAT_DIALOG_DATA) public data: DialogData,
  ) {}

}
