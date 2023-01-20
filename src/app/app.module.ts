import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HeaderComponent } from './Model/main/header/header.component';
import { FooterComponent } from './Model/main/footer/footer.component';
import { NavcontentComponent } from './Model/main/navcontent/navcontent.component';
import { MaterialModule } from './Shared/material/material.module';
import { HomeComponent } from './View/home/home.component';
import { ClienteReadComponent } from './View/cliente/cliente-read/cliente-read.component';
import { ClienteCreateComponent } from './View/cliente/cliente-create/cliente-create.component';
import { ClienteEditComponent } from './View/cliente/cliente-edit/cliente-edit.component';
import { ClienteDeleteComponent } from './View/cliente/cliente-delete/cliente-delete.component';
import { AtendentesReadComponent } from './View/atendetes/atendentes-read/atendentes-read.component';
import { AtendentesCreateComponent } from './View/atendetes/atendentes-create/atendentes-create.component';
import { AtendentesEditComponent } from './View/atendetes/atendentes-edit/atendentes-edit.component';
import { AtendentesDeleteComponent } from './View/atendetes/atendentes-delete/atendentes-delete.component';
import { ProdutosReadComponent } from './View/produtos/produtos-read/produtos-read.component';
import { ProdutosCreateComponent } from './View/produtos/produtos-create/produtos-create.component';
import { ProdutosEditComponent } from './View/produtos/produtos-edit/produtos-edit.component';
import { ProdutosDeleteComponent } from './View/produtos/produtos-delete/produtos-delete.component';
import { PedidosReadComponent } from './View/pedidos/pedidos-read/pedidos-read.component';
import { PedidosEditComponent } from './View/pedidos/pedidos-edit/pedidos-edit.component';
import { PedidosCreateComponent } from './View/pedidos/pedidos-create/pedidos-create.component';
import { PedidosDeleteComponent } from './View/pedidos/pedidos-delete/pedidos-delete.component';
import { DialogPedidoComponent } from './Shared/dialog-pedido/dialog-pedido.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    NavcontentComponent,
    HomeComponent,
    ClienteReadComponent,
    ClienteCreateComponent,
    ClienteEditComponent,
    ClienteDeleteComponent,
    AtendentesReadComponent,
    AtendentesCreateComponent,
    AtendentesEditComponent,
    AtendentesDeleteComponent,
    ProdutosReadComponent,
    ProdutosCreateComponent,
    ProdutosEditComponent,
    ProdutosDeleteComponent,
    PedidosReadComponent,
    PedidosEditComponent,
    PedidosCreateComponent,
    PedidosDeleteComponent,
    DialogPedidoComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
