import { Component, OnInit } from '@angular/core';
import { MenuItem } from 'primeng/api';
import { Home } from '../../interfaces/home.interface';

@Component({
  selector: 'app-layout-page',
  templateUrl: './layout-page.component.html',
  styleUrls: ['./layout-page.component.css']
})
export class LayoutPageComponent implements OnInit{

  value!: string;
  itemsHome!:Home[];
  home!:Home;

  ngOnInit(): void {
    this.itemsHome = [
      { label: 'Login' },
      { label: 'Producto' },
      { label: 'Detalles' },
      { label: 'Comprar' },
    ];

    this.home = { icon: 'pi pi-home', routerLink: '/' };

  }
  login: MenuItem[] = [
    {
        label: 'Iniciar sesión',
        icon: 'pi pi-sign-in',
        routerLink: 'login'
    },
    {
        label: 'Crear cuenta',
        icon: 'pi pi-user-plus',
        routerLink: 'crear-cuenta'

    },
    {
      label: 'Ver perfil',
      icon: 'pi pi-eye',
  },
];
}
