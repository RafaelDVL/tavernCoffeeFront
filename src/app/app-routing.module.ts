import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './View/home/home.component';
import { ClienteReadComponent } from './View/cliente/cliente-read/cliente-read.component';
import { AtendentesReadComponent } from './View/atendetes/atendentes-read/atendentes-read.component';
import { ProdutosReadComponent } from './View/produtos/produtos-read/produtos-read.component';

const routes: Routes = [
  {
    path: "",
    component: HomeComponent
  },
  {
    path: "clientes",
    component: ClienteReadComponent
  },
  {
    path: "atendentes",
    component: AtendentesReadComponent
  },
  {
    path: "produtos",
    component: ProdutosReadComponent
  },
  {
    path: "clientes",
    component: ClienteReadComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
