import { Component } from '@angular/core';

export interface Section {
  name: string;
  icon: string;
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
    },
    {
      name: 'Clientes',
      icon: 'group',
    },
    {
      name: 'Atendentes',
      icon: 'support_agent',
    },
    {
      name: 'Produtos',
      icon: 'inventory_2',
    }
  ];
  notes: Section[] = [
    {
      name: 'Pedidos Aberto e em Andamento',
      icon: 'shopping_bag',
    },
    {
      name: 'Pedidos Fechados',
      icon: 'local_mall',
    },
  ];
}
