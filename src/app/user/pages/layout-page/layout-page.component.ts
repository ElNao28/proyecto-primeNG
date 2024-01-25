import { Component, OnInit } from '@angular/core';
import { MenuItem } from 'primeng/api';
import { Home } from '../../interfaces/home.interface';
import { Router } from '@angular/router';
import { UserService } from '../../services/services.service';
import { Products } from '../../interfaces/Products.interface';

interface AutoCompleteCompleteEvent {
  originalEvent: Event;
  query: string;
}
interface Questions {
  question: string;
  value: number;
}
interface Response{
  response: string;
  value:number;
}
@Component({
  selector: 'app-layout-page',
  templateUrl: './layout-page.component.html',
  styleUrls: ['./layout-page.component.css']
})
export class LayoutPageComponent implements OnInit {

  value!: string;
  itemsHome!: Home[];
  home!: Home;
  ruta!: string;
  selectedItem: any;
  items!: Products[];
  itemsS!: Products[];
  visible: boolean = false;
  response: Response[] = [];
  questions: Questions[] = [{
    question: '¿Qué tipo de producto quieres buscar?',
    value: 0,
  }, {
    question: '¿Como puedo comprar?',
    value: 1,
  }, {
    question: '¿Es seguro comprar en linea?',
    value: 2,
  }, {
    question: '¿Como como se envia mi pedido?',
    value: 3,
  }

  ]
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

  constructor(private router: Router, private userService: UserService) { }
  ngOnInit(): void {

    //this.ruta = this.router.routerState.snapshot.url

    this.itemsHome = [
      { label: 'Login' },
      { label: 'Producto' },
      { label: 'Detalles' },
      { label: 'Comprar' },
    ];

    this.home = { icon: 'pi pi-home', routerLink: '/' };

  }

  search(event: AutoCompleteCompleteEvent) {
    console.log(event)
    this.userService.searchAutocomplete(event.query).subscribe(data => {
      this.items = data
      this.itemsS = this.items.filter(item => item.title.toLowerCase().includes(event.query.toLowerCase()));
      console.log(this.itemsS)
    }
    )
  }
  showDialog() {
    this.visible = true;
  }

  reponseQuestion(value:number){
    switch(value){
      case 0:
        this.response.push({response:"Respuesta 1",value:value})
        break;
      case 1:
        this.response.push({response:"Respuesta 2",value:value})
        break;
      case 2:
        this.response.push({response:"Respuesta 3",value:value})
        break;
      case 3:
        this.response.push({response:"Respuesta 4",value:value})
        break;
    }
  }

}
