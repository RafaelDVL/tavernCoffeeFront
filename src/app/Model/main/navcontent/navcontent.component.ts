import { Component } from '@angular/core';

export interface Section {
  name: string;
  icon: string;
  routerlink: string
}

@Component({
  selector: 'app-navcontent',
  templateUrl: './navcontent.component.html',
  styleUrls: ['./navcontent.component.scss']
})
export class NavcontentComponent {
  showFiller = false;

  folders: Section[] = [
    {
      name: 'Home',
      icon:'home',
      routerlink: ''
    },
    {
      name: 'Clientes',
      icon: 'group',
      routerlink: 'clientes'
    },
    {
      name: 'Atendentes',
      icon: 'support_agent',
      routerlink: 'atendentes'
    },
    {
      name: 'Produtos',
      icon: 'inventory_2',
      routerlink: 'produtos'
    }
  ];
  notes: Section[] = [
    {
      name: 'Pedidos Aberto e em Andamento',
      icon: 'shopping_bag',
      routerlink: ''
    },
    {
      name: 'Pedidos Fechados',
      icon: 'local_mall',
      routerlink: ''
    },
    {
      name: 'Logout',
      icon: 'logout',
      routerlink:''
    }
  ];
}
