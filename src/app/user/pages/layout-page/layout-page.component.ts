import { Component } from '@angular/core';
import { MenuItem } from 'primeng/api';

@Component({
  selector: 'app-layout-page',
  templateUrl: './layout-page.component.html',
  styleUrls: ['./layout-page.component.css']
})
export class LayoutPageComponent {
  value!: string;


  items: MenuItem[] = [
    {
        label: 'Iniciar sesión',
        icon: 'pi pi-sign-in',
        routerLink: 'mis-compras'
    },
    {
        label: 'Crear cuenta',
        icon: 'pi pi-user-plus',

    },
    {
      label: 'Ver perfil',
      icon: 'pi pi-eye',
  },
];
}
