import { Produto } from './produto';

export interface Pedido {
  id?: any;
  dataAbertura: any,
  dataFechamento: any,
  entrega: string;
  prioridade: number;
  status: number;
  itemBillList: any;
  cliente: number;
  atendente: number;
  nomeAtendente: string;
  nomeCliente: string;

}
